import { getAllProblems, getAllCategories, getProblemsByCategory } from "@/lib/db";
import { synonyms } from "./synonyms";
import { aliases } from "./aliases";
import { fuzzyScore } from "./fuzzy";
import { rankResults, deduplicateResults, type SearchResult } from "./ranker";
import type { Problem } from "@/lib/db/types";

function findExactMatch(query: string, problems: Problem[]): SearchResult[] {
  const lower = query.toLowerCase();
  const results: SearchResult[] = [];

  for (const problem of problems) {
    if (problem.title.toLowerCase() === lower) {
      results.push({
        problem,
        score: 1.0,
        matchType: "exact",
        matchSource: `title="${problem.title}"`,
      });
    }
    if (problem.slug === lower.replace(/\s+/g, "-")) {
      results.push({
        problem,
        score: 0.95,
        matchType: "exact",
        matchSource: `slug="${problem.slug}"`,
      });
    }
  }

  return results;
}

function findAliasMatch(query: string, problems: Problem[]): SearchResult[] {
  const lower = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  for (const [aliasKey, slug] of Object.entries(aliases)) {
    if (
      lower.includes(aliasKey) ||
      aliasKey.includes(lower)
    ) {
      const problem = problems.find((p) => p.slug === slug);
      if (problem) {
        results.push({
          problem,
          score: 0.9,
          matchType: "alias",
          matchSource: `alias="${aliasKey}"`,
        });
      }
    }
  }

  return results;
}

function findSynonymMatch(query: string, problems: Problem[]): SearchResult[] {
  const words = query.toLowerCase().split(/\s+/);
  const results: SearchResult[] = [];

  for (const word of words) {
    const synonymGroup = Object.entries(synonyms).find(
      ([key, values]) =>
        key === word || values.some((v) => v.toLowerCase() === word)
    );

    if (synonymGroup) {
      const [, synonymWords] = synonymGroup;
      const allWords = [synonymGroup[0], ...synonymWords];

      for (const problem of problems) {
        const text = `${problem.title} ${problem.description} ${problem.symptoms.join(" ")}`.toLowerCase();

        for (const syn of allWords) {
          if (text.includes(syn.toLowerCase())) {
            results.push({
              problem,
              score: 0.7,
              matchType: "synonym",
              matchSource: `synonym="${syn}" for "${word}"`,
            });
            break;
          }
        }
      }
    }
  }

  return results;
}

function findFuzzyMatch(query: string, problems: Problem[]): SearchResult[] {
  const results: SearchResult[] = [];

  for (const problem of problems) {
    const titleScore = fuzzyScore(query, problem.title);
    const descScore = fuzzyScore(query, problem.description);
    const symptomScore = Math.max(
      ...problem.symptoms.map((s) => fuzzyScore(query, s)),
      0
    );

    const bestScore = Math.max(titleScore, descScore, symptomScore);

    if (bestScore > 0.3) {
      results.push({
        problem,
        score: bestScore,
        matchType: "fuzzy",
        matchSource: `title_score=${titleScore.toFixed(2)}, desc_score=${descScore.toFixed(2)}, symptom_score=${symptomScore.toFixed(2)}`,
      });
    }
  }

  return results;
}

function findCategoryMatch(query: string): SearchResult[] {
  const categories = getAllCategories();
  const results: SearchResult[] = [];
  const lower = query.toLowerCase();

  for (const category of categories) {
    if (
      lower.includes(category.name.toLowerCase()) ||
      lower.includes(category.slug.toLowerCase())
    ) {
      const categoryProblems = getProblemsByCategory(category.id);
      for (const problem of categoryProblems) {
        results.push({
          problem,
          score: 0.5,
          matchType: "category",
          matchSource: `category="${category.name}"`,
        });
      }
    }
  }

  return results;
}

export async function smartSearch(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const problems = getAllProblems();

  const exactResults = findExactMatch(query, problems);
  if (exactResults.length > 0) {
    return rankResults(exactResults);
  }

  const aliasResults = findAliasMatch(query, problems);

  const synonymResults = findSynonymMatch(query, problems);

  const fuzzyResults = findFuzzyMatch(query, problems);

  const categoryResults = findCategoryMatch(query);

  const allResults = [
    ...aliasResults,
    ...synonymResults,
    ...fuzzyResults,
    ...categoryResults,
  ];

  const deduplicated = deduplicateResults(allResults);
  return rankResults(deduplicated);
}
