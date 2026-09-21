import { NextRequest, NextResponse } from "next/server";
import { generateDiagnosticTree, createFallbackResponse } from "@/lib/ai/dynamic-diagnostic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query } = body;

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }

    if (query.length > 500) {
      return NextResponse.json(
        { error: "Query too long (max 500 characters)" },
        { status: 400 }
      );
    }

    const tree = await generateDiagnosticTree(query);

    if (!tree) {
      const fallback = createFallbackResponse(query);
      return NextResponse.json({
        ...fallback,
        source: "fallback",
        message: "AI could not generate a complete diagnostic tree. Showing generic guidance.",
      });
    }

    return NextResponse.json({
      ...tree,
      source: "ai",
    });
  } catch (error) {
    console.error("Diagnostic API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
