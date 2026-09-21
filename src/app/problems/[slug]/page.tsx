import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getProblemBySlug, getDiagnosticNodes, getCauses, getAllProblems } from "@/lib/db";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { RelatedProblems } from "@/components/RelatedProblems";
import { ProblemStructuredData } from "@/components/StructuredData";
import { AIDiagnosticLoader } from "@/components/AIDiagnosticLoader";

interface ProblemPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProblemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const problem = getProblemBySlug(slug);
  if (!problem) return { title: "Problem Not Found" };

  return {
    title: problem.metaTitle,
    description: problem.metaDescription,
    openGraph: {
      title: problem.metaTitle,
      description: problem.metaDescription,
    },
  };
}

export function generateStaticParams() {
  const problems = getAllProblems();
  return problems.map((p) => ({ slug: p.slug }));
}

export default async function ProblemPage({ params, searchParams }: ProblemPageProps & { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { slug } = await params;
  const sp = await searchParams;
  const isAI = sp.ai === "true";

  // If AI mode, render client-side AI loader
  if (isAI) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12">
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/problems" className="hover:text-gray-900">Problems</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">AI Diagnostic</span>
        </nav>
        <Suspense fallback={
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600">Loading AI diagnostic...</p>
          </div>
        }>
          <AIDiagnosticLoader slug={slug} />
        </Suspense>
      </div>
    );
  }

  // Regular problem from database
  const problem = getProblemBySlug(slug);

  if (!problem) {
    notFound();
  }

  const nodes = getDiagnosticNodes(problem.id);
  const causes = getCauses(problem.id);
  const allProblems = getAllProblems();
  const related = allProblems.filter(
    (p) => p.categoryId === problem.categoryId && p.id !== problem.id
  );

  return (
    <>
      <ProblemStructuredData problem={problem} />
      <div className="mx-auto max-w-5xl px-4 py-12">
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/problems" className="hover:text-gray-900">Problems</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{problem.title}</span>
        </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{problem.title}</h1>
        <p className="mt-3 text-gray-600">{problem.description}</p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Symptoms</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {problem.symptoms.map((symptom) => (
            <li key={symptom}>{symptom}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Diagnostic Tool
        </h2>
        <p className="text-gray-600 mb-6">
          Answer the following questions to help identify the cause of your problem.
        </p>
        <DiagnosticTool problem={problem} nodes={nodes} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Possible Causes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="rounded-lg border border-gray-200 bg-white p-4"
            >
              <h3 className="font-semibold text-gray-900">{cause.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{cause.description}</p>
            </div>
          ))}
        </div>
      </section>

      <RelatedProblems problems={related} />
      </div>
    </>
  );
}
