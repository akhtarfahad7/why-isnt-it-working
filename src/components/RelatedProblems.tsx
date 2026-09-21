import Link from "next/link";
import type { Problem } from "@/lib/db/types";

interface RelatedProblemsProps {
  problems: Problem[];
}

export function RelatedProblems({ problems }: RelatedProblemsProps) {
  if (problems.length === 0) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Related Problems
      </h3>
      <div className="flex flex-col gap-3">
        {problems.map((problem) => (
          <Link
            key={problem.id}
            href={`/problems/${problem.slug}`}
            className="rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <h4 className="font-medium text-gray-900">{problem.title}</h4>
            <p className="mt-1 text-sm text-gray-600 line-clamp-1">
              {problem.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
