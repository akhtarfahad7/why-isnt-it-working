import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { blogArticles, getBlogArticle } from "@/data/blog";
import { ArticleStructuredData, FAQStructuredData } from "@/components/StructuredData";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.datePublished,
      authors: ["Why Isn't It Working?"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ArticleStructuredData
        title={article.title}
        description={article.metaDescription}
        slug={article.slug}
      />
      <FAQStructuredData items={article.faq} />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-gray-900">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{article.title}</span>
        </nav>

        <article>
          <header className="mb-8">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-3">
              {article.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              {article.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <time dateTime={article.datePublished}>
                {new Date(article.datePublished).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>|</span>
              <Link
                href={`/problems/${article.problemSlug}`}
                className="text-blue-600 hover:underline"
              >
                Use Diagnostic Tool →
              </Link>
            </div>
          </header>

          <div
            className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {article.faq.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {article.faq.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-gray-200 bg-white p-6"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mt-12 rounded-lg bg-blue-50 border border-blue-200 p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Still having this problem?
            </h2>
            <p className="text-gray-600 mb-4">
              Try our interactive diagnostic tool for step-by-step troubleshooting.
            </p>
            <Link
              href={`/problems/${article.problemSlug}`}
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
            >
              Start Diagnostic →
            </Link>
          </section>
        </article>
      </div>
    </>
  );
}
