import { createAIProvider, type AIMessage } from "./provider";
import type { Problem } from "@/lib/db/types";

const SYSTEM_PROMPT = `You are a helpful assistant for a tech diagnostic tool called "Why Isn't It Working?".

Your role is to SUPPORT the diagnostic engine, not replace it.

Rules:
- You may help classify user problems
- You may normalize symptoms to match existing problem categories
- You may explain diagnoses in plain language
- You may answer follow-up questions about existing diagnoses
- You MUST NOT invent new diagnostic branches
- You MUST NOT override safety rules
- You MUST NOT claim certainty when the data is uncertain
- You MUST NOT provide unsupported repair instructions

Always communicate uncertainty honestly. Use phrases like "most likely", "possible cause", "based on your answers".`;

export async function classifyProblem(
  userInput: string,
  existingProblems: Problem[]
): Promise<string | null> {
  const provider = createAIProvider();

  const problemList = existingProblems
    .map((p) => `- ${p.title}: ${p.description}`)
    .join("\n");

  const messages: AIMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    {
      role: "user",
      content: `Classify this user problem into one of the existing categories.

User input: "${userInput}"

Existing problems:
${problemList}

Return ONLY the matching problem title, or "NONE" if no match.`,
    },
  ];

  const response = await provider.chat(messages);

  if (!response.success || !response.content) {
    return null;
  }

  const result = response.content.trim();
  if (result === "NONE") return null;

  const match = existingProblems.find(
    (p) => p.title.toLowerCase() === result.toLowerCase()
  );
  return match?.slug ?? null;
}

export async function normalizeSymptoms(
  symptoms: string[]
): Promise<string[]> {
  const provider = createAIProvider();

  const messages: AIMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    {
      role: "user",
      content: `Normalize these symptoms to standard technical terms. Return a JSON array of normalized symptom strings.

Input symptoms:
${symptoms.map((s) => `- ${s}`).join("\n")}

Return ONLY the JSON array, no other text.`,
    },
  ];

  const response = await provider.chat(messages);

  if (!response.success || !response.content) {
    return symptoms;
  }

  try {
    const normalized = JSON.parse(response.content);
    return Array.isArray(normalized) ? normalized : symptoms;
  } catch {
    return symptoms;
  }
}

export async function explainDiagnosis(
  diagnosis: string,
  causeTitle: string,
  causeDescription: string
): Promise<string> {
  const provider = createAIProvider();

  const messages: AIMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    {
      role: "user",
      content: `Explain this diagnosis to a non-technical user in simple, clear language. Do not add any new technical information or recommendations beyond what's provided.

Diagnosis: ${diagnosis}
Cause: ${causeTitle}
Description: ${causeDescription}

Provide a clear, concise explanation.`,
    },
  ];

  const response = await provider.chat(messages);

  if (!response.success || !response.content) {
    return causeDescription;
  }

  return response.content.trim();
}

export async function answerFollowUp(
  question: string,
  context: string
): Promise<string> {
  const provider = createAIProvider();

  const messages: AIMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    {
      role: "user",
      content: `Answer this follow-up question based on the provided context. Do not invent new information.

Context:
${context}

Question: "${question}"

Provide a helpful answer based only on the context.`,
    },
  ];

  const response = await provider.chat(messages);

  if (!response.success || !response.content) {
    return "I'm sorry, I cannot answer that question based on the available information. Please consult a qualified professional.";
  }

  return response.content.trim();
}

export async function summarizeResult(
  causes: Array<{ title: string; classification: string }>
): Promise<string> {
  const provider = createAIProvider();

  const causeList = causes
    .map((c) => `- ${c.title} (${c.classification})`)
    .join("\n");

  const messages: AIMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    {
      role: "user",
      content: `Summarize these diagnostic results for the user in 2-3 sentences. Be honest about uncertainty.

Results:
${causeList}

Provide a concise summary.`,
    },
  ];

  const response = await provider.chat(messages);

  if (!response.success || !response.content) {
    return "Based on your answers, we've identified possible causes for your issue. Please review the detailed results below.";
  }

  return response.content.trim();
}
