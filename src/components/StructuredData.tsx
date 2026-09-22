import type { Problem, DiagnosticResult } from "@/lib/db/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://why-isnt-it-working.vercel.app";

interface StructuredDataProps {
  problem: Problem;
  results?: DiagnosticResult[];
}

export function ProblemStructuredData({ problem }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `Why Is My ${problem.title}? - Troubleshooting Guide`,
    description: problem.description,
    url: `${BASE_URL}/problems/${problem.slug}`,
    author: {
      "@type": "Organization",
      name: "Why Isn't It Working?",
    },
    publisher: {
      "@type": "Organization",
      name: "Why Isn't It Working?",
    },
    mainEntity: {
      "@type": "Question",
      name: `Why is my ${problem.title.toLowerCase()}?`,
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
    url: `${BASE_URL}/problems/${problem.slug}`,
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

export function ArticleStructuredData({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}/blog/${slug}`,
    author: {
      "@type": "Organization",
      name: "Why Isn't It Working?",
    },
    publisher: {
      "@type": "Organization",
      name: "Why Isn't It Working?",
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function FAQStructuredData({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
