import Link from "next/link";
import type { Problem } from "@/lib/db/types";
import { getSafetyColor } from "@/lib/safety";

interface ProblemCardProps {
  problem: Problem;
}

export function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <Link
      href={`/problems/${problem.slug}`}
      className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <h3 className="text-lg font-semibold text-gray-900">{problem.title}</h3>
      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
        {problem.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {problem.symptoms.slice(0, 3).map((symptom) => (
          <span
            key={symptom}
            className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
          >
            {symptom}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <span
          className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${getSafetyColor(problem.safetyLevel)}`}
        >
          {problem.safetyLevel}
        </span>
      </div>
    </Link>
  );
}
