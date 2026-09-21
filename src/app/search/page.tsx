"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { SearchBox } from "@/components/SearchBox";
import { ProblemCard } from "@/components/ProblemCard";
import type { Problem } from "@/lib/db/types";

interface SearchResult {
  id: string;
  title: string;
  slug: string;
  description: string;
  symptoms: string[];
  safetyLevel: Problem["safetyLevel"];
  score: number;
  matchType: string;
}

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") ?? "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [aiGenerating, setAiGenerating] = useState(false);
  const [error, setError] = useState("");

  const popularSearches = [
    "laptop won't charge",
    "car won't start",
    "wifi keeps disconnecting",
    "phone battery drains fast",
    "ac not cooling",
    "computer running slow",
  ];

  useEffect(() => {
    if (!query.trim()) return;

    let cancelled = false;

    const fetchResults = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        if (!cancelled) {
          setResults(data.results || []);
        }
      } catch {
        if (!cancelled) {
          setError("Search failed. Please try again.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchResults();

    return () => {
      cancelled = true;
    };
  }, [query]);

  const handleAIDiagnostic = async () => {
    if (!query.trim()) return;

    setAiGenerating(true);
    setError("");
    try {
      const res = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();

      if (data.source === "ai" && data.problem?.slug) {
        router.push(`/problems/${data.problem.slug}?ai=true&q=${encodeURIComponent(query)}`);
      } else {
        setError(data.message || "Could not generate diagnostic for this query.");
      }
    } catch {
      setError("Failed to generate diagnostic. Please try again.");
    } finally {
      setAiGenerating(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Search</h1>
      <SearchBox initialQuery={query} suggestions={popularSearches} />

      {loading && (
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-4">Searching...</p>
        </div>
      )}

      {error && (
        <div className="mt-8 rounded-lg bg-yellow-50 border border-yellow-200 p-4">
          <p className="text-yellow-800">{error}</p>
        </div>
      )}

      {query && !loading && results.length > 0 && (
        <div className="mt-8">
          <p className="text-gray-600 mb-6">
            {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result) => (
              <ProblemCard
                key={result.id}
                problem={{
                  id: result.id,
                  categoryId: "",
                  title: result.title,
                  slug: result.slug,
                  description: result.description,
                  symptoms: result.symptoms,
                  safetyLevel: result.safetyLevel,
                  metaTitle: result.title,
                  metaDescription: result.description,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {query && !loading && results.length === 0 && !error && (
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            No matching problems found for &quot;{query}&quot;
          </p>
        </div>
      )}

      {query && !loading && (
        <div className="mt-8 text-center">
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6 max-w-md mx-auto">
            <p className="text-blue-800 font-medium mb-2">
              {results.length > 0
                ? "Not what you're looking for?"
                : "Want AI to diagnose this problem?"}
            </p>
            <p className="text-sm text-blue-700 mb-4">
              Our AI can generate a custom diagnostic tree for your specific problem.
            </p>
            <button
              onClick={handleAIDiagnostic}
              disabled={aiGenerating}
              className="rounded-lg bg-blue-600 px-6 py-2 text-white font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2 mx-auto"
            >
              {aiGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Generating...
                </>
              ) : (
                "Generate AI Diagnostic"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-5xl px-4 py-12">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
