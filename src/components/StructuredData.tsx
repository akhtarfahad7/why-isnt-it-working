import type { Problem, DiagnosticResult } from "@/lib/db/types";

interface StructuredDataProps {
  problem: Problem;
  results?: DiagnosticResult[];
}

export function ProblemStructuredData({ problem }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: problem.title,
    description: problem.description,
    url: `/problems/${problem.slug}`,
    mainEntity: {
      "@type": "Question",
      name: problem.title,
      text: problem.description,
      answerCount: problem.symptoms.length,
      acceptedAnswer: {
        "@type": "Answer",
        text: problem.description,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function DiagnosticResultsStructuredData({
  problem,
  results,
}: StructuredDataProps) {
  if (!results || results.length === 0) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `Diagnosis: ${problem.title}`,
    description: `Diagnostic results for: ${problem.description}`,
    medicalAudience: {
      "@type": "Patient",
    },
    lastReviewed: new Date().toISOString(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
