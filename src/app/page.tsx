import { SearchBox } from "@/components/SearchBox";
import { ProblemCard } from "@/components/ProblemCard";
import { getAllProblems, getAllCategories } from "@/lib/db";

const popularSearches = [
  "laptop won't charge",
  "car won't start",
  "wifi keeps disconnecting",
  "phone battery drains fast",
  "ac not cooling",
  "computer running slow",
];

export default function Home() {
  const problems = getAllProblems();
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Why Isn&apos;t It Working?
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Tell us what&apos;s not working. We&apos;ll help you figure out why.
          Free diagnostic tool for tech, appliances, and vehicles.
        </p>
        <div className="mt-8">
          <SearchBox suggestions={popularSearches} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/categories/${category.slug}`}
              className="rounded-lg border border-gray-200 bg-white p-6 text-center transition-shadow hover:shadow-md"
            >
              <span className="text-3xl">{category.icon}</span>
              <h3 className="mt-2 font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {category.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Troubleshooting Guides
        </h2>
        <p className="text-gray-600 mb-6">
          Step-by-step guides to help you diagnose and fix everyday problems.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/blog/why-is-my-laptop-not-charging"
            className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900 text-sm">Laptop Not Charging</h3>
            <p className="mt-1 text-xs text-gray-600 line-clamp-2">7 fixes that actually work</p>
          </a>
          <a
            href="/blog/why-is-my-phone-overheating"
            className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900 text-sm">Phone Overheating</h3>
            <p className="mt-1 text-xs text-gray-600 line-clamp-2">8 quick fixes to cool it down</p>
          </a>
          <a
            href="/blog/why-wont-my-car-start"
            className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900 text-sm">Car Won&apos;t Start</h3>
            <p className="mt-1 text-xs text-gray-600 line-clamp-2">10 reasons and how to fix</p>
          </a>
          <a
            href="/blog/why-does-my-wifi-keep-disconnecting"
            className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900 text-sm">WiFi Keeps Disconnecting</h3>
            <p className="mt-1 text-xs text-gray-600 line-clamp-2">9 fixes that work</p>
          </a>
          <a
            href="/blog/why-is-my-ac-not-cooling"
            className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900 text-sm">AC Not Cooling</h3>
            <p className="mt-1 text-xs text-gray-600 line-clamp-2">8 reasons and fixes</p>
          </a>
          <a
            href="/blog/why-is-my-computer-running-slow"
            className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900 text-sm">Computer Running Slow</h3>
            <p className="mt-1 text-xs text-gray-600 line-clamp-2">10 ways to speed it up</p>
          </a>
        </div>
        <div className="mt-6 text-center">
          <a
            href="/blog"
            className="text-blue-600 hover:underline font-medium"
          >
            View All Guides →
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Common Problems
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>
      </section>
    </div>
  );
}
