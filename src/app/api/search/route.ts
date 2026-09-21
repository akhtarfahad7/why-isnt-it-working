import { NextRequest, NextResponse } from "next/server";
import { smartSearch } from "@/lib/search";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") ?? "";

    if (!query.trim()) {
      return NextResponse.json({ results: [], query: "" });
    }

    const results = await smartSearch(query);

    return NextResponse.json({
      results: results.map((r) => ({
        id: r.problem.id,
        title: r.problem.title,
        slug: r.problem.slug,
        description: r.problem.description,
        symptoms: r.problem.symptoms,
        safetyLevel: r.problem.safetyLevel,
        score: r.score,
        matchType: r.matchType,
        matchSource: r.matchSource,
      })),
      query,
      total: results.length,
    });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
