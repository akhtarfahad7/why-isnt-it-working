import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Problem, DiagnosticNode, Cause } from "@/lib/db/types";

export interface CachedTree {
  id: string;
  query: string;
  problem: Problem;
  nodes: DiagnosticNode[];
  causes: Cause[];
  createdAt: string;
}

let supabase: SupabaseClient | null = null;

function getSupabase(): SupabaseClient | null {
  if (supabase) return supabase;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  supabase = createClient(url, key);
  return supabase;
}

function generateCacheKey(query: string): string {
  return query
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 100);
}

export async function getCachedTree(
  query: string
): Promise<CachedTree | null> {
  const client = getSupabase();
  if (!client) return null;

  const cacheKey = generateCacheKey(query);

  try {
    const { data, error } = await client
      .from("diagnostic_cache")
      .select("*")
      .eq("cache_key", cacheKey)
      .gt("expires_at", new Date().toISOString())
      .single();

    if (error || !data) return null;

    return {
      id: data.id,
      query: data.query,
      problem: JSON.parse(data.problem),
      nodes: JSON.parse(data.nodes),
      causes: JSON.parse(data.causes),
      createdAt: data.created_at,
    };
  } catch {
    return null;
  }
}

export async function setCachedTree(
  query: string,
  problem: Problem,
  nodes: DiagnosticNode[],
  causes: Cause[]
): Promise<void> {
  const client = getSupabase();
  if (!client) return;

  const cacheKey = generateCacheKey(query);
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  try {
    await client.from("diagnostic_cache").upsert({
      cache_key: cacheKey,
      query,
      problem: JSON.stringify(problem),
      nodes: JSON.stringify(nodes),
      causes: JSON.stringify(causes),
      expires_at: expiresAt,
    });
  } catch {
    // Silently fail - caching is optional
  }
}

export async function clearExpiredCache(): Promise<void> {
  const client = getSupabase();
  if (!client) return;

  try {
    await client
      .from("diagnostic_cache")
      .delete()
      .lt("expires_at", new Date().toISOString());
  } catch {
    // Silently fail
  }
}
