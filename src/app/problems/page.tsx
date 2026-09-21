import type { Metadata } from "next";
import { getAllProblems } from "@/lib/db";
import { ProblemCard } from "@/components/ProblemCard";

export const metadata: Metadata = {
  title: "All Problems",
  description: "Browse all diagnostic problems we can help you with.",
};

export default function ProblemsPage() {
  const problems = getAllProblems();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">All Problems</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
}
