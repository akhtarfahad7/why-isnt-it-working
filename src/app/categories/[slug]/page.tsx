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
    title: `${category.name} Problems`,
    description: category.description,
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

  return (
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
          {category.name}
        </h1>
        <p className="mt-3 text-gray-600">{category.description}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
}
