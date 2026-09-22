import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories } from "@/lib/db";

export const metadata: Metadata = {
  title: "Problem Categories - Browse by Device Type",
  description: "Browse troubleshooting categories for electronics, vehicles, home appliances, software, and internet problems. Find solutions for any device.",
  keywords: ["troubleshooting categories", "tech support categories", "repair guides", "diagnostic tools", "problem categories"],
  openGraph: {
    title: "Problem Categories | Why Isn't It Working?",
    description: "Browse troubleshooting categories for electronics, vehicles, home appliances, software, and internet problems.",
    type: "website",
  },
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Categories</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Problem Categories</h1>
        <p className="mt-3 text-gray-600">
          Choose a category to browse related troubleshooting guides and diagnostic tools.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <span className="text-4xl">{category.icon}</span>
            <h2 className="mt-3 text-lg font-semibold text-gray-900">
              {category.name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
