import type { Cause, CauseClassification } from "@/lib/db/types";
import { getSafetyColor, getSafetyIcon } from "@/lib/safety";

interface CauseCardProps {
  cause: Cause;
  classification: CauseClassification;
}

function getClassificationLabel(classification: CauseClassification): string {
  switch (classification) {
    case "most_likely":
      return "Most Likely Cause";
    case "possible":
      return "Possible Cause";
    case "less_likely":
      return "Less Likely";
  }
}

function getClassificationColor(classification: CauseClassification): string {
  switch (classification) {
    case "most_likely":
      return "bg-blue-50 border-blue-300";
    case "possible":
      return "bg-gray-50 border-gray-300";
    case "less_likely":
      return "bg-gray-50 border-gray-200";
  }
}

export function CauseCard({ cause, classification }: CauseCardProps) {
  return (
    <div
      className={`rounded-lg border p-6 ${getClassificationColor(classification)}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {getClassificationLabel(classification)}
          </span>
          <h3 className="mt-1 text-lg font-semibold text-gray-900">
            {cause.title}
          </h3>
        </div>
        <span
          className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-medium ${getSafetyColor(cause.safetyLevel)}`}
        >
          <span aria-hidden="true">{getSafetyIcon(cause.safetyLevel)}</span>
          {cause.safetyLevel}
        </span>
      </div>
      <p className="mt-3 text-sm text-gray-700">{cause.description}</p>
      <div className="mt-4 rounded-md bg-white p-4 border border-gray-100">
        <h4 className="text-sm font-semibold text-gray-900">Recommendation</h4>
        <p className="mt-1 text-sm text-gray-700">{cause.recommendation}</p>
      </div>
      {cause.professionalHelp && (
        <p className="mt-3 text-sm font-medium text-orange-700">
          This issue likely requires professional assistance.
        </p>
      )}
    </div>
  );
}
