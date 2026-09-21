import type { SafetyLevel } from "@/lib/db/types";

export interface SafetyWarning {
  level: SafetyLevel;
  message: string;
  action: string;
}

const SAFETY_MESSAGES: Record<SafetyLevel, SafetyWarning> = {
  SAFE: {
    level: "SAFE",
    message: "This action is generally safe to perform.",
    action: "You can proceed with troubleshooting.",
  },
  CAUTION: {
    level: "CAUTION",
    message: "This action requires reasonable care.",
    action: "Please proceed carefully and follow the instructions.",
  },
  HIGH: {
    level: "HIGH",
    message:
      "This is potentially dangerous and should normally be performed by qualified professionals.",
    action:
      "We recommend contacting a qualified technician for this step.",
  },
  STOP: {
    level: "STOP",
    message:
      "Stop troubleshooting immediately and seek professional help.",
    action:
      "Please contact a qualified professional. Do not attempt further troubleshooting.",
  },
};

export function getSafetyWarning(level: SafetyLevel): SafetyWarning {
  return SAFETY_MESSAGES[level];
}

export function getSafetyColor(level: SafetyLevel): string {
  switch (level) {
    case "SAFE":
      return "text-green-700 bg-green-50 border-green-200";
    case "CAUTION":
      return "text-yellow-700 bg-yellow-50 border-yellow-200";
    case "HIGH":
      return "text-orange-700 bg-orange-50 border-orange-200";
    case "STOP":
      return "text-red-700 bg-red-50 border-red-200";
  }
}

export function getSafetyIcon(level: SafetyLevel): string {
  switch (level) {
    case "SAFE":
      return "✓";
    case "CAUTION":
      return "⚠";
    case "HIGH":
      return "⚡";
    case "STOP":
      return "🛑";
  }
}
