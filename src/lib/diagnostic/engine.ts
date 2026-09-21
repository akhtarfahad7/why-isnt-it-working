import type {
  DiagnosticNode,
  DiagnosticResult,
  CauseClassification,
  AnsweredNode,
} from "@/lib/db/types";

export interface EngineResult {
  currentNode: DiagnosticNode | null;
  isComplete: boolean;
  results: DiagnosticResult[];
  answeredNodes: AnsweredNode[];
  maxDepth: number;
  currentDepth: number;
}

function classifyScore(
  score: number,
  maxPossible: number
): CauseClassification {
  const ratio = maxPossible > 0 ? score / maxPossible : 0;
  if (ratio >= 0.6) return "most_likely";
  if (ratio >= 0.3) return "possible";
  return "less_likely";
}

function calculateResults(
  allScores: Map<string, number>,
  maxPossibleScore: number
): DiagnosticResult[] {
  const results: DiagnosticResult[] = [];

  allScores.forEach((score, causeId) => {
    results.push({
      causeId,
      score,
      classification: classifyScore(score, maxPossibleScore),
    });
  });

  results.sort((a, b) => b.score - a.score);
  return results;
}

function findAnswerOnNode(
  nodes: DiagnosticNode[],
  nodeId: string,
  answerId: string
): { node: DiagnosticNode; answer: NonNullable<DiagnosticNode["answers"][0]> } | null {
  const node = nodes.find((n) => n.id === nodeId);
  if (!node) return null;
  const answer = node.answers.find((a) => a.id === answerId);
  if (!answer) return null;
  return { node, answer };
}

function computeTreeDepth(
  nodes: DiagnosticNode[],
  nodeId: string,
  visited: Set<string> = new Set()
): number {
  if (visited.has(nodeId)) return 0;
  visited.add(nodeId);

  const node = nodes.find((n) => n.id === nodeId);
  if (!node) return 0;

  let maxChildDepth = 0;
  for (const answer of node.answers) {
    if (answer.nextNodeId) {
      const childDepth = computeTreeDepth(nodes, answer.nextNodeId, visited);
      if (childDepth > maxChildDepth) {
        maxChildDepth = childDepth;
      }
    }
  }

  return 1 + maxChildDepth;
}

export function startDiagnostic(
  nodes: DiagnosticNode[]
): EngineResult {
  const rootNode = nodes.find((n) => n.id === "root") ?? nodes[0];
  const maxDepth = rootNode ? computeTreeDepth(nodes, rootNode.id) : 1;

  return {
    currentNode: rootNode ?? null,
    isComplete: false,
    results: [],
    answeredNodes: [],
    maxDepth,
    currentDepth: 0,
  };
}

export function processAnswer(
  nodes: DiagnosticNode[],
  answeredNodes: AnsweredNode[],
  answerId: string,
  currentNodeId?: string
): EngineResult {
  const targetNodeId = currentNodeId ?? (answeredNodes.length > 0
    ? answeredNodes[answeredNodes.length - 1].nodeId
    : undefined);

  let nodeToProcess: DiagnosticNode | undefined;
  let selectedAnswer: DiagnosticNode["answers"][0] | undefined;

  if (targetNodeId) {
    const found = findAnswerOnNode(nodes, targetNodeId, answerId);
    if (found) {
      nodeToProcess = found.node;
      selectedAnswer = found.answer;
    }
  } else if (answeredNodes.length === 0) {
    const rootNode = nodes.find((n) => n.id === "root") ?? nodes[0];
    if (rootNode) {
      const answer = rootNode.answers.find((a) => a.id === answerId);
      if (answer) {
        nodeToProcess = rootNode;
        selectedAnswer = answer;
      }
    }
  }

  if (!selectedAnswer || !nodeToProcess) {
    return {
      currentNode: null,
      isComplete: true,
      results: [],
      answeredNodes,
      maxDepth: 1,
      currentDepth: 0,
    };
  }

  // Build new answered list with this answer
  const newAnsweredNodes: AnsweredNode[] = [
    ...answeredNodes,
    {
      nodeId: nodeToProcess.id,
      answerId: selectedAnswer.id,
      question: nodeToProcess.question,
      answerText: selectedAnswer.text,
    },
  ];

  // Find next node
  let nextNode: DiagnosticNode | null = null;
  if (selectedAnswer.nextNodeId) {
    nextNode = nodes.find((n) => n.id === selectedAnswer!.nextNodeId) ?? null;
  }

  // Calculate scores - ONLY from selected answers, not all answers
  const allScores = new Map<string, number>();
  let maxPossibleScore = 0;

  // Count scores from previously selected answers
  for (const entry of answeredNodes) {
    const result = findAnswerOnNode(nodes, entry.nodeId, entry.answerId);
    if (!result) continue;

    for (const cs of result.answer.causeScores) {
      const current = allScores.get(cs.causeId) ?? 0;
      allScores.set(cs.causeId, current + cs.points);
      if (cs.points > maxPossibleScore) {
        maxPossibleScore = cs.points;
      }
    }
  }

  // Count scores from current answer
  for (const cs of selectedAnswer.causeScores) {
    const current = allScores.get(cs.causeId) ?? 0;
    allScores.set(cs.causeId, current + cs.points);
    if (cs.points > maxPossibleScore) {
      maxPossibleScore = cs.points;
    }
  }

  const results = calculateResults(allScores, maxPossibleScore);

  const hasMoreQuestions =
    nextNode &&
    nextNode.answers.length > 0 &&
    nextNode.answers.some((a) => a.nextNodeId !== null);

  const rootNode = nodes.find((n) => n.id === "root") ?? nodes[0];
  const maxDepth = rootNode ? computeTreeDepth(nodes, rootNode.id) : 1;

  return {
    currentNode: nextNode,
    isComplete: !hasMoreQuestions,
    results,
    answeredNodes: newAnsweredNodes,
    maxDepth,
    currentDepth: newAnsweredNodes.length,
  };
}

export function goBack(
  nodes: DiagnosticNode[],
  answeredNodes: AnsweredNode[]
): EngineResult {
  if (answeredNodes.length === 0) {
    return startDiagnostic(nodes);
  }

  // Remove the last answer
  const previousAnswered = answeredNodes.slice(0, -1);

  if (previousAnswered.length === 0) {
    return startDiagnostic(nodes);
  }

  // Re-process all previous answers to get back to the previous state
  let state = startDiagnostic(nodes);

  for (const entry of previousAnswered) {
    state = processAnswer(nodes, state.answeredNodes, entry.answerId, entry.nodeId === state.currentNode?.id ? undefined : entry.nodeId);
  }

  return state;
}

export function getRootNode(nodes: DiagnosticNode[]): DiagnosticNode | null {
  return nodes.find((n) => n.id === "root") ?? nodes[0] ?? null;
}

export function findNodeById(
  nodes: DiagnosticNode[],
  nodeId: string
): DiagnosticNode | undefined {
  return nodes.find((n) => n.id === nodeId);
}
