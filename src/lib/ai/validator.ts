import type { SafetyLevel } from "@/lib/db/types";

interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

const VALID_SAFETY_LEVELS: SafetyLevel[] = ["SAFE", "CAUTION", "HIGH", "STOP"];

const DANGEROUS_KEYWORDS = [
  "open the panel",
  "touch the wire",
  "cut the wire",
  "bypass the switch",
  "remove the cover",
  "disconnect the mains",
  "handle the gas",
  "repair the compressor",
  "fix the circuit board",
  "replace the fuse",
  "work on live wires",
];

export function validateAITree(tree: unknown): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!tree || typeof tree !== "object") {
    return { valid: false, errors: ["Tree is not a valid object"], warnings: [] };
  }

  const t = tree as Record<string, unknown>;

  // Check required top-level fields
  if (!t.problem || typeof t.problem !== "object") {
    errors.push("Missing or invalid 'problem' field");
  }
  if (!Array.isArray(t.nodes)) {
    errors.push("Missing or invalid 'nodes' array");
  }
  if (!Array.isArray(t.causes)) {
    errors.push("Missing or invalid 'causes' array");
  }

  // Validate problem
  if (t.problem && typeof t.problem === "object") {
    const p = t.problem as Record<string, unknown>;
    if (!p.id || typeof p.id !== "string") errors.push("Problem missing id");
    if (!p.title || typeof p.title !== "string") errors.push("Problem missing title");
    if (!p.slug || typeof p.slug !== "string") errors.push("Problem missing slug");
    if (!p.description || typeof p.description !== "string") errors.push("Problem missing description");
    if (!Array.isArray(p.symptoms) || p.symptoms.length === 0) errors.push("Problem must have at least one symptom");
    if (!VALID_SAFETY_LEVELS.includes(p.safetyLevel as SafetyLevel)) {
      errors.push(`Invalid safetyLevel: ${p.safetyLevel}`);
    }
  }

  // Validate nodes
  if (Array.isArray(t.nodes)) {
    const nodes = t.nodes as Record<string, unknown>[];
    if (nodes.length < 2) {
      warnings.push("Tree has very few diagnostic nodes");
    }

    const nodeIds = new Set<string>();
    for (const node of nodes) {
      if (!node.id || typeof node.id !== "string") {
        errors.push("Node missing id");
        continue;
      }
      if (nodeIds.has(node.id)) {
        errors.push(`Duplicate node id: ${node.id}`);
      }
      nodeIds.add(node.id);

      if (!node.question || typeof node.question !== "string") {
        errors.push(`Node ${node.id} missing question`);
      }
      if (!Array.isArray(node.answers) || node.answers.length < 2) {
        errors.push(`Node ${node.id} must have at least 2 answers`);
      }
    }

    // Check root node exists
    if (!nodeIds.has("root")) {
      errors.push("Missing root node");
    }
  }

  // Validate causes
  if (Array.isArray(t.causes)) {
    const causes = t.causes as Record<string, unknown>[];
    if (causes.length < 2) {
      warnings.push("Tree has very few causes");
    }

    const causeIds = new Set<string>();
    for (const cause of causes) {
      if (!cause.id || typeof cause.id !== "string") {
        errors.push("Cause missing id");
        continue;
      }
      if (causeIds.has(cause.id)) {
        errors.push(`Duplicate cause id: ${cause.id}`);
      }
      causeIds.add(cause.id);

      if (!cause.title || typeof cause.title !== "string") {
        errors.push(`Cause ${cause.id} missing title`);
      }
      if (!cause.description || typeof cause.description !== "string") {
        errors.push(`Cause ${cause.id} missing description`);
      }
      if (!VALID_SAFETY_LEVELS.includes(cause.safetyLevel as SafetyLevel)) {
        errors.push(`Cause ${cause.id} has invalid safetyLevel: ${cause.safetyLevel}`);
      }
      if (!cause.recommendation || typeof cause.recommendation !== "string") {
        errors.push(`Cause ${cause.id} missing recommendation`);
      }

      // Check for dangerous recommendations
      if (typeof cause.recommendation === "string") {
        const lower = cause.recommendation.toLowerCase();
        for (const keyword of DANGEROUS_KEYWORDS) {
          if (lower.includes(keyword)) {
            errors.push(
              `Cause ${cause.id} contains dangerous recommendation: "${keyword}"`
            );
          }
        }
      }

      // HIGH/STOP issues must have professionalHelp: true
      if (
        (cause.safetyLevel === "HIGH" || cause.safetyLevel === "STOP") &&
        cause.professionalHelp !== true
      ) {
        warnings.push(
          `Cause ${cause.id} is ${cause.safetyLevel} but professionalHelp is not true`
        );
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
