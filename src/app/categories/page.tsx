import type { Metadata } from "next";
import { getAllCategories } from "@/lib/db";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse problems by category.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`/categories/${category.slug}`}
            className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <span className="text-4xl">{category.icon}</span>
            <h2 className="mt-3 text-lg font-semibold text-gray-900">
              {category.name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">{category.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
