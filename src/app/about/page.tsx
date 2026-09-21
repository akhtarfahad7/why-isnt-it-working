import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Why Isn't It Working? - A diagnostic tool for everyday tech problems.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 mb-4">
          <strong>Why Isn&apos;t It Working?</strong> is a search-driven diagnostic
          web application that helps users understand why everyday technology,
          appliances, and vehicles are not working.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Our Goal</h2>
        <p className="text-gray-600 mb-4">
          We want to provide structured, reliable diagnostic information that helps
          people understand what might be wrong with their devices and when they
          should seek professional help.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          How It Works
        </h2>
        <p className="text-gray-600 mb-4">
          Our diagnostic engine uses structured decision trees based on symptoms
          and conditions you provide. The tool asks you questions and, based on your
          answers, identifies the most likely causes.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Important Disclaimer
        </h2>
        <p className="text-gray-600 mb-4">
          This tool is <strong>not</strong> intended to replace qualified
          technicians, electricians, mechanics, or other professionals. Always
          consult a professional for critical repairs, especially when dealing
          with electrical systems, gas appliances, or vehicle safety components.
        </p>
      </div>
    </div>
  );
}
