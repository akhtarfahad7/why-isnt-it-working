export const DIAGNOSTIC_TREE_PROMPT = `You are an expert diagnostic technician for a troubleshooting tool called "Why Isn't It Working?".

Given this user problem description: "{query}"

Generate a COMPLETE diagnostic tree. Output ONLY valid JSON, no markdown, no code fences, no extra text.

JSON FORMAT:
{
  "problem": {
    "id": "ai-diag",
    "categoryId": "cat-other",
    "title": "Short problem title",
    "slug": "problem-slug-url",
    "description": "One sentence description",
    "symptoms": ["Symptom 1", "Symptom 2", "Symptom 3"],
    "safetyLevel": "SAFE",
    "metaTitle": "Title | Why Isnt It Working",
    "metaDescription": "Description for search engines"
  },
  "nodes": [
    {
      "id": "root",
      "question": "First yes/no question to diagnose?",
      "answers": [
        {
          "id": "a1",
          "text": "Yes",
          "nextNodeId": "node2",
          "causeScores": [{"causeId": "c1", "points": 3}]
        },
        {
          "id": "a2",
          "text": "No",
          "nextNodeId": null,
          "causeScores": [{"causeId": "c2", "points": 3}]
        }
      ]
    },
    {
      "id": "node2",
      "question": "Follow-up question?",
      "answers": [
        {
          "id": "a3",
          "text": "Option 1",
          "nextNodeId": null,
          "causeScores": [{"causeId": "c1", "points": 2}]
        },
        {
          "id": "a4",
          "text": "Option 2",
          "nextNodeId": null,
          "causeScores": [{"causeId": "c3", "points": 3}]
        }
      ]
    }
  ],
  "causes": [
    {
      "id": "c1",
      "title": "Cause 1 title",
      "description": "What might be wrong",
      "safetyLevel": "SAFE",
      "recommendation": "What to do about it",
      "professionalHelp": false
    },
    {
      "id": "c2",
      "title": "Cause 2 title",
      "description": "Another possibility",
      "safetyLevel": "CAUTION",
      "recommendation": "Be careful doing this",
      "professionalHelp": false
    },
    {
      "id": "c3",
      "title": "Cause 3 title",
      "description": "Third option",
      "safetyLevel": "HIGH",
      "recommendation": "Get professional help",
      "professionalHelp": true
    }
  ]
}

RULES:
1. Generate exactly 3-5 diagnostic questions (nodes)
2. Generate exactly 3-5 possible causes
3. Each node must have exactly 2-4 answers
4. Each answer must have causeScores with 1-3 causes
5. Points must be 1-5 (higher = more likely)
6. Questions must be clear yes/no or multiple choice
7. Use simple English anyone can understand
8. safetyLevel must be exactly one of: SAFE, CAUTION, HIGH, STOP
9. For electrical, gas, high-voltage, chemical issues: set safetyLevel to HIGH or STOP
10. For HIGH and STOP safety: set professionalHelp to true
11. The root node must have id exactly "root"
12. Node IDs must be: "root", "node2", "node3", "node4", "node5"
13. Answer IDs must be: "a1", "a2", "a3", etc.
14. Cause IDs must be: "c1", "c2", "c3", etc.
15. Output ONLY the JSON object, nothing else`;

export const PROBLEM_CLASSIFICATION_PROMPT = `You are a problem classifier for a diagnostic tool.

Given this user query: "{query}"

Classify it into one of these categories:
- electronics: Laptops, phones, tablets, monitors, printers, Bluetooth devices
- vehicles: Cars, motorcycles, trucks (engine, brakes, AC, battery, etc.)
- appliances: AC, washing machine, microwave, refrigerator, dishwasher, oven, fan, vacuum
- home: Plumbing, electrical, doors, windows, garage, smoke detectors
- software: Windows, apps, performance, errors, crashes, updates
- internet: Browser, email, streaming, VPN, connectivity
- networking: WiFi, router, ethernet, Bluetooth connectivity

Return ONLY the category slug (one word), nothing else.`;

export const SYMPTOM_NORMALIZATION_PROMPT = `Normalize these symptoms to standard technical terms.
Return a JSON array of normalized symptom strings.

Input symptoms:
{symptoms}

Return ONLY the JSON array, no other text.`;

export const DIAGNOSIS_EXPLANATION_PROMPT = `Explain this diagnosis to a non-technical user in simple, clear language.

Diagnosis: {diagnosis}
Cause: {cause_title}
Description: {cause_description}

Provide a concise explanation. Do not add new technical information.`;
