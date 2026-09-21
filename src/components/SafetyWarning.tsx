import type { SafetyLevel } from "@/lib/db/types";
import { getSafetyColor, getSafetyIcon } from "@/lib/safety";

interface SafetyWarningProps {
  level: SafetyLevel;
  message: string;
}

export function SafetyWarning({ level, message }: SafetyWarningProps) {
  return (
    <div
      className={`rounded-lg border p-4 mb-6 ${getSafetyColor(level)}`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <span className="text-lg" aria-hidden="true">
          {getSafetyIcon(level)}
        </span>
        <div>
          <p className="font-semibold">{level}</p>
          <p className="mt-1 text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}
