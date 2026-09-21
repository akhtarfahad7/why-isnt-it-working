import type { Problem } from "@/lib/db/types";

export interface SearchResult {
  problem: Problem;
  score: number;
  matchType: "exact" | "synonym" | "alias" | "fuzzy" | "category";
  matchSource: string;
}

export function rankResults(results: SearchResult[]): SearchResult[] {
  const sorted = [...results].sort((a, b) => {
    const matchPriority: Record<string, number> = {
      exact: 5,
      alias: 4,
      synonym: 3,
      category: 2,
      fuzzy: 1,
    };

    const aPriority = matchPriority[a.matchType] ?? 0;
    const bPriority = matchPriority[b.matchType] ?? 0;

    if (aPriority !== bPriority) return bPriority - aPriority;

    return b.score - a.score;
  });

  const seen = new Set<string>();
  return sorted.filter((result) => {
    if (seen.has(result.problem.id)) return false;
    seen.add(result.problem.id);
    return true;
  });
}

export function deduplicateResults(results: SearchResult[]): SearchResult[] {
  const map = new Map<string, SearchResult>();

  for (const result of results) {
    const existing = map.get(result.problem.id);
    if (!existing || result.score > existing.score) {
      map.set(result.problem.id, result);
    }
  }

  return Array.from(map.values());
}
