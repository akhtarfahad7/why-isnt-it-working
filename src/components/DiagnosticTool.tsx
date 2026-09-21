"use client";

import { useState, useCallback } from "react";
import type { Problem, DiagnosticNode, DiagnosticResult, AnsweredNode } from "@/lib/db/types";
import { startDiagnostic, processAnswer, goBack } from "@/lib/diagnostic/engine";
import { DiagnosticQuestion } from "@/components/DiagnosticQuestion";
import { DiagnosisResults } from "@/components/DiagnosisResult";
import { SafetyWarning } from "@/components/SafetyWarning";

interface DiagnosticToolProps {
  problem: Problem;
  nodes: DiagnosticNode[];
}

export function DiagnosticTool({ problem, nodes }: DiagnosticToolProps) {
  const [currentNode, setCurrentNode] = useState<DiagnosticNode | null>(() => {
    const root = startDiagnostic(nodes);
    return root.currentNode;
  });
  const [answeredNodes, setAnsweredNodes] = useState<AnsweredNode[]>([]);
  const [results, setResults] = useState<DiagnosticResult[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [maxDepth, setMaxDepth] = useState(() => {
    return startDiagnostic(nodes).maxDepth;
  });
  const [currentDepth, setCurrentDepth] = useState(0);

  const handleAnswer = useCallback(
    (answerId: string) => {
      if (!currentNode) return;

      const newState = processAnswer(
        nodes,
        answeredNodes,
        answerId,
        currentNode.id
      );

      setAnsweredNodes(newState.answeredNodes);
      setCurrentNode(newState.currentNode);
      setResults(newState.results);
      setIsComplete(newState.isComplete);
      setMaxDepth(newState.maxDepth);
      setCurrentDepth(newState.currentDepth);
    },
    [currentNode, answeredNodes, nodes]
  );

  const handleBack = useCallback(() => {
    const newState = goBack(nodes, answeredNodes);
    setAnsweredNodes(newState.answeredNodes);
    setCurrentNode(newState.currentNode);
    setResults(newState.results);
    setIsComplete(newState.isComplete);
    setMaxDepth(newState.maxDepth);
    setCurrentDepth(newState.currentDepth);
  }, [answeredNodes, nodes]);

  const handleRestart = useCallback(() => {
    const root = startDiagnostic(nodes);
    setCurrentNode(root.currentNode);
    setAnsweredNodes([]);
    setResults([]);
    setIsComplete(false);
    setMaxDepth(root.maxDepth);
    setCurrentDepth(0);
  }, [nodes]);

  if (isComplete || !currentNode) {
    return (
      <DiagnosisResults
        results={results}
        answeredNodes={answeredNodes}
        onRestart={handleRestart}
      />
    );
  }

  const progressPercent = maxDepth > 0 ? (currentDepth / maxDepth) * 100 : 0;

  return (
    <div>
      {problem.safetyLevel !== "SAFE" && (
        <SafetyWarning
          level={problem.safetyLevel}
          message={`This diagnostic involves ${problem.safetyLevel === "STOP" ? "potentially dangerous" : "moderate risk"} procedures. Please follow safety guidelines carefully.`}
        />
      )}

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">
            Question {currentDepth + 1} of ~{maxDepth}
          </span>
          {answeredNodes.length > 0 && (
            <button
              onClick={handleBack}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Go Back
            </button>
          )}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progressPercent, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Answer trail */}
      {answeredNodes.length > 0 && (
        <div className="mb-4 text-xs text-gray-500">
          {answeredNodes.map((entry, i) => (
            <span key={i}>
              {i > 0 && " → "}
              <span className="font-medium">{entry.answerText}</span>
            </span>
          ))}
        </div>
      )}

      <DiagnosticQuestion node={currentNode} onAnswer={handleAnswer} />
    </div>
  );
}
