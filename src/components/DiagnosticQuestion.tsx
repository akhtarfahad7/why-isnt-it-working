"use client";

import type { DiagnosticNode } from "@/lib/db/types";
import { AnswerButton } from "./AnswerButton";
import { SafetyWarning } from "./SafetyWarning";

interface DiagnosticQuestionProps {
  node: DiagnosticNode;
  onAnswer: (answerId: string) => void;
}

export function DiagnosticQuestion({
  node,
  onAnswer,
}: DiagnosticQuestionProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {node.safetyNote && <SafetyWarning level="CAUTION" message={node.safetyNote} />}
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {node.question}
      </h2>
      <div className="flex flex-col gap-3">
        {node.answers.map((answer) => (
          <AnswerButton
            key={answer.id}
            text={answer.text}
            onClick={() => onAnswer(answer.id)}
          />
        ))}
      </div>
    </div>
  );
}
