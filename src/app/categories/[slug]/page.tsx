import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getCategoryBySlug, getProblemsByCategory, getAllCategories } from "@/lib/db";
import { ProblemCard } from "@/components/ProblemCard";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} Problems - Troubleshooting Guides & Solutions`,
    description: `Browse all ${category.name.toLowerCase()} troubleshooting guides. Find step-by-step diagnostic solutions for ${category.name.toLowerCase()} problems.`,
    keywords: [category.name, "troubleshooting", "diagnostic", "fix", "repair", "guide"],
    openGraph: {
      title: `${category.name} Problems | Why Isn't It Working?`,
      description: `Browse all ${category.name.toLowerCase()} troubleshooting guides. Find step-by-step diagnostic solutions for ${category.name.toLowerCase()} problems.`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} Problems | Why Isn't It Working?`,
      description: `Browse all ${category.name.toLowerCase()} troubleshooting guides.`,
    },
  };
}

export function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const problems = getProblemsByCategory(category.id);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://why-isnt-it-working.vercel.app";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Troubleshooting Guides`,
    description: `Browse all ${category.name.toLowerCase()} troubleshooting guides and diagnostic tools.`,
    url: `${BASE_URL}/categories/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: problems.length,
      itemListElement: problems.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}/problems/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto max-w-5xl px-4 py-12">
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/categories" className="hover:text-gray-900">Categories</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{category.name}</span>
        </nav>

        <header className="mb-8">
          <span className="text-4xl">{category.icon}</span>
          <h1 className="mt-3 text-3xl font-bold text-gray-900">
            {category.name} Problems
          </h1>
          <p className="mt-3 text-gray-600">{category.description}</p>
          <p className="mt-2 text-sm text-gray-500">
            {problems.length} diagnostic guide{problems.length !== 1 ? "s" : ""} available
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>

        {problems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No problems found in this category yet.</p>
          </div>
        )}
      </div>
    </>
  );
}
