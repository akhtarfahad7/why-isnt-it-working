function levenshteinDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

export function fuzzyScore(query: string, target: string): number {
  const q = query.toLowerCase().trim();
  const t = target.toLowerCase().trim();

  if (q === t) return 1.0;
  if (t.includes(q)) return 0.9;
  if (q.includes(t)) return 0.8;

  const words = q.split(/\s+/);
  let matchCount = 0;
  for (const word of words) {
    if (t.includes(word)) {
      matchCount++;
    }
  }
  if (matchCount > 0) {
    return 0.5 + (matchCount / words.length) * 0.3;
  }

  const distance = levenshteinDistance(q, t);
  const maxLen = Math.max(q.length, t.length);
  if (maxLen === 0) return 1.0;

  const similarity = 1 - distance / maxLen;
  if (similarity > 0.6) return similarity * 0.7;

  return 0;
}

export function expandQuery(query: string): string[] {
  const words = query.toLowerCase().split(/\s+/);
  const expanded: string[] = [query.toLowerCase()];

  for (const word of words) {
    const synonymGroups: Record<string, string[]> = {
      battery: ["cell", "power", "charge"],
      screen: ["display", "monitor"],
      internet: ["web", "online", "connection"],
      slow: ["lagging", "hanging", "freezing"],
      broken: ["damaged", "not working"],
      noise: ["sound", "buzzing", "clicking"],
      heat: ["hot", "overheating"],
      charge: ["charging", "power"],
      start: ["turn on", "boot"],
      drain: ["empty", "not going"],
      block: ["clogged", "jammed"],
      leak: ["dripping", "water coming"],
      error: ["problem", "issue", "bug"],
    };

    if (synonymGroups[word]) {
      expanded.push(...synonymGroups[word]);
    }
  }

  return [...new Set(expanded)];
}
