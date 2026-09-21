import { describe, it, expect } from "vitest";
import {
  getSafetyWarning,
  getSafetyColor,
  getSafetyIcon,
} from "@/lib/safety";
import type { SafetyLevel } from "@/lib/db/types";

describe("Safety Module", () => {
  const levels: SafetyLevel[] = ["SAFE", "CAUTION", "HIGH", "STOP"];

  describe("getSafetyWarning", () => {
    it("should return warning for each level", () => {
      levels.forEach((level) => {
        const warning = getSafetyWarning(level);
        expect(warning.level).toBe(level);
        expect(warning.message).toBeDefined();
        expect(warning.action).toBeDefined();
      });
    });
  });

  describe("getSafetyColor", () => {
    it("should return color class for each level", () => {
      levels.forEach((level) => {
        const color = getSafetyColor(level);
        expect(color).toContain("text-");
        expect(color).toContain("bg-");
      });
    });
  });

  describe("getSafetyIcon", () => {
    it("should return icon for each level", () => {
      levels.forEach((level) => {
        const icon = getSafetyIcon(level);
        expect(typeof icon).toBe("string");
        expect(icon.length).toBeGreaterThan(0);
      });
    });
  });
});
