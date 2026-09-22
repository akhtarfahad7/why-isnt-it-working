import type { Metadata } from "next";
import Link from "next/link";
import { blogArticles } from "@/data/blog";

export const metadata: Metadata = {
  title: "Troubleshooting Guides & Articles",
  description: "Step-by-step troubleshooting guides for everyday tech, appliance, and vehicle problems. Learn why things aren't working and how to fix them.",
  openGraph: {
    title: "Troubleshooting Guides | Why Isn't It Working?",
    description: "Step-by-step troubleshooting guides for everyday tech, appliance, and vehicle problems.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Blog</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Troubleshooting Guides
        </h1>
        <p className="mt-3 text-gray-600">
          Step-by-step guides to help you diagnose and fix everyday problems.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-3">
              {article.category}
            </span>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {article.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.keywords.slice(0, 3).map((kw) => (
                <span
                  key={kw}
                  className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                >
                  {kw}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
