import type { DiagnosticResult, AnsweredNode } from "@/lib/db/types";
import { getCauseById } from "@/lib/db";
import { CauseCard } from "./CauseCard";

interface DiagnosisResultProps {
  results: DiagnosticResult[];
  answeredNodes: AnsweredNode[];
  onRestart: () => void;
}

export function DiagnosisResults({
  results,
  answeredNodes,
  onRestart,
}: DiagnosisResultProps) {
  const topResults = results.slice(0, 5);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Diagnosis Results</h2>
        <p className="mt-2 text-gray-600">
          Based on your answers, here are the possible causes:
        </p>
      </div>

      {/* Answer Trail */}
      {answeredNodes.length > 0 && (
        <div className="mb-8 rounded-lg bg-gray-50 border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Your Answers:</h3>
          <div className="space-y-2">
            {answeredNodes.map((entry, i) => (
              <div key={i} className="flex gap-2 text-sm">
                <span className="text-gray-500 shrink-0">Q{i + 1}:</span>
                <span className="text-gray-700">{entry.question}</span>
              </div>
            ))}
            <div className="flex gap-2 text-sm">
              <span className="text-gray-500 shrink-0">A:</span>
              <span className="text-blue-700 font-medium">
                {answeredNodes.map((e) => e.answerText).join(" → ")}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-6">
        {topResults.map((result) => {
          const cause = getCauseById(result.causeId);
          if (!cause) return null;
          return (
            <CauseCard
              key={result.causeId}
              cause={cause}
              classification={result.classification}
            />
          );
        })}
      </div>

      <div className="mt-8 rounded-lg bg-yellow-50 border border-yellow-200 p-4">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> This diagnostic tool provides general guidance only.
          It is not a substitute for professional diagnosis. Always consult a qualified
          technician for critical issues.
        </p>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={onRestart}
          className="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Start Over
        </button>
      </div>
    </div>
  );
}
