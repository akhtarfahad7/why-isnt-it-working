import { createAIProvider, type AIMessage } from "./provider";
import { DIAGNOSTIC_TREE_PROMPT } from "./prompts";
import { validateAITree } from "./validator";
import { getCachedTree, setCachedTree } from "./tree-cache";
import type { Problem, DiagnosticNode, Cause } from "@/lib/db/types";

interface AIGeneratedDiagnostic {
  problem: Problem;
  nodes: DiagnosticNode[];
  causes: Cause[];
}

function generateId(): string {
  return `ai-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function parseAIResponse(content: string): unknown | null {
  let cleaned = content.trim();

  // Remove markdown code fences if present
  const fenceMatch = cleaned.match(/```(?:json)?\s*\n?([\s\S]*?)\n?\s*```/);
  if (fenceMatch) {
    cleaned = fenceMatch[1].trim();
  }

  // Try to find JSON object in the response
  const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    cleaned = jsonMatch[0];
  }

  try {
    return JSON.parse(cleaned);
  } catch {
    // Try to fix common JSON issues
    try {
      // Remove trailing commas
      const fixed = cleaned.replace(/,\s*([\]}])/g, "$1");
      return JSON.parse(fixed);
    } catch {
      return null;
    }
  }
}

function transformAITree(raw: unknown): AIGeneratedDiagnostic | null {
  if (!raw || typeof raw !== "object") return null;

  const tree = raw as Record<string, unknown>;
  const problemData = tree.problem as Record<string, unknown> | undefined;
  const nodesData = tree.nodes as Record<string, unknown>[] | undefined;
  const causesData = tree.causes as Record<string, unknown>[] | undefined;

  if (!problemData || !nodesData || !causesData) return null;

  const problem: Problem = {
    id: (problemData.id as string) || generateId(),
    categoryId: (problemData.categoryId as string) || "cat-other",
    title: (problemData.title as string) || "Unknown Problem",
    slug: (problemData.slug as string) || "unknown-problem",
    description: (problemData.description as string) || "",
    symptoms: Array.isArray(problemData.symptoms)
      ? (problemData.symptoms as string[])
      : [],
    safetyLevel: (problemData.safetyLevel as Problem["safetyLevel"]) || "CAUTION",
    metaTitle: (problemData.metaTitle as string) || `${problemData.title} | Why Isn't It Working`,
    metaDescription: (problemData.metaDescription as string) || `${problemData.description}`,
  };

  const nodes: DiagnosticNode[] = nodesData.map((n) => ({
    id: (n.id as string) || generateId(),
    problemId: problem.id,
    question: (n.question as string) || "",
    answers: Array.isArray(n.answers)
      ? (n.answers as Record<string, unknown>[]).map((a) => ({
          id: (a.id as string) || generateId(),
          nodeId: (n.id as string) || "",
          text: (a.text as string) || "",
          nextNodeId: (a.nextNodeId as string) || null,
          causeScores: Array.isArray(a.causeScores)
            ? (a.causeScores as Record<string, unknown>[]).map((cs) => ({
                causeId: (cs.causeId as string) || "",
                points: (cs.points as number) || 1,
              }))
            : [],
        }))
      : [],
    safetyNote: (n.safetyNote as string) || undefined,
  }));

  const causes: Cause[] = causesData.map((c) => ({
    id: (c.id as string) || generateId(),
    problemId: problem.id,
    title: (c.title as string) || "Unknown Cause",
    description: (c.description as string) || "",
    safetyLevel: (c.safetyLevel as Cause["safetyLevel"]) || "CAUTION",
    recommendation: (c.recommendation as string) || "Consult a professional",
    professionalHelp: Boolean(c.professionalHelp),
  }));

  return { problem, nodes, causes };
}

export async function generateDiagnosticTree(
  query: string
): Promise<AIGeneratedDiagnostic | null> {
  // 1. Check cache first
  const cached = await getCachedTree(query);
  if (cached) {
    return {
      problem: cached.problem,
      nodes: cached.nodes,
      causes: cached.causes,
    };
  }

  // 2. Generate via AI
  const provider = createAIProvider();
  const prompt = DIAGNOSTIC_TREE_PROMPT.replace("{query}", query);

  const messages: AIMessage[] = [
    { role: "user", content: prompt },
  ];

  const response = await provider.chat(messages);

  if (!response.success || !response.content) {
    console.error("AI generation failed:", response.error);
    return null;
  }

  // 3. Parse and validate
  const raw = parseAIResponse(response.content);
  if (!raw) {
    console.error("Failed to parse AI response as JSON");
    return null;
  }

  const validation = validateAITree(raw);
  if (!validation.valid) {
    console.error("AI tree validation failed:", validation.errors);
    return null;
  }

  // 4. Transform to our types
  const tree = transformAITree(raw);
  if (!tree) return null;

  // 5. Cache the result
  await setCachedTree(query, tree.problem, tree.nodes, tree.causes);

  return tree;
}

export async function getOrGenerateTree(
  query: string
): Promise<AIGeneratedDiagnostic | null> {
  return generateDiagnosticTree(query);
}

export function createFallbackResponse(query: string): AIGeneratedDiagnostic {
  const id = generateId();

  return {
    problem: {
      id,
      categoryId: "cat-other",
      title: query.slice(0, 100),
      slug: query
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 100),
      description: `Diagnostic for: ${query}`,
      symptoms: [query],
      safetyLevel: "CAUTION",
      metaTitle: `${query} | Why Isn't It Working`,
      metaDescription: `Find out about: ${query}`,
    },
    nodes: [
      {
        id: "root",
        problemId: id,
        question: "Can you describe the problem in more detail?",
        answers: [
          {
            id: "a1",
            nodeId: "root",
            text: "Yes, I'll describe it",
            nextNodeId: null,
            causeScores: [{ causeId: "c1", points: 2 }],
          },
          {
            id: "a2",
            nodeId: "root",
            text: "Not sure how to describe it",
            nextNodeId: null,
            causeScores: [{ causeId: "c2", points: 2 }],
          },
        ],
      },
    ],
    causes: [
      {
        id: "c1",
        problemId: id,
        title: "Unable to determine specific cause",
        description:
          "Based on the limited information available, we cannot pinpoint the exact cause.",
        safetyLevel: "CAUTION",
        recommendation:
          "Please try searching with more specific symptoms, or consult a qualified professional for diagnosis.",
        professionalHelp: true,
      },
      {
        id: "c2",
        problemId: id,
        title: "More information needed",
        description:
          "The diagnostic tool needs more specific information to identify potential causes.",
        safetyLevel: "SAFE",
        recommendation:
          "Try describing specific symptoms: what happens, when it happens, any error messages, and what you've already tried.",
        professionalHelp: false,
      },
    ],
  };
}
