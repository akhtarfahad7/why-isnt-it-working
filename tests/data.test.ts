import { describe, it, expect } from "vitest";
import {
  getAllCategories,
  getAllProblems,
  getProblemBySlug,
  getDiagnosticNodes,
  getCauses,
  getCauseById,
  searchProblems,
} from "@/lib/db";

describe("Data Loading", () => {
  describe("getAllCategories", () => {
    it("should return all categories (7)", () => {
      const categories = getAllCategories();
      expect(categories.length).toBe(7);
    });

    it("should have required fields", () => {
      const categories = getAllCategories();
      categories.forEach((cat) => {
        expect(cat.id).toBeDefined();
        expect(cat.name).toBeDefined();
        expect(cat.slug).toBeDefined();
        expect(cat.description).toBeDefined();
      });
    });
  });

  describe("getAllProblems", () => {
    it("should return all problems (30+)", () => {
      const problems = getAllProblems();
      expect(problems.length).toBeGreaterThanOrEqual(30);
    });

    it("should have required fields", () => {
      const problems = getAllProblems();
      problems.forEach((prob) => {
        expect(prob.id).toBeDefined();
        expect(prob.title).toBeDefined();
        expect(prob.slug).toBeDefined();
        expect(prob.symptoms.length).toBeGreaterThan(0);
      });
    });
  });

  describe("getProblemBySlug", () => {
    it("should find problem by slug", () => {
      const problem = getProblemBySlug("laptop-wont-charge");
      expect(problem).toBeDefined();
      expect(problem?.title).toBe("Laptop Won't Charge");
    });

    it("should find new problems", () => {
      const problem = getProblemBySlug("computer-running-slow");
      expect(problem).toBeDefined();
      expect(problem?.title).toBe("Computer Running Slow");
    });

    it("should return undefined for non-existent slug", () => {
      const problem = getProblemBySlug("non-existent");
      expect(problem).toBeUndefined();
    });
  });

  describe("getDiagnosticNodes", () => {
    it("should return nodes for a problem", () => {
      const nodes = getDiagnosticNodes("prob-laptop-wont-charge");
      expect(nodes.length).toBeGreaterThan(0);
    });

    it("should have root node", () => {
      const nodes = getDiagnosticNodes("prob-laptop-wont-charge");
      const root = nodes.find((n) => n.id === "root");
      expect(root).toBeDefined();
    });

    it("should have answers for each node", () => {
      const nodes = getDiagnosticNodes("prob-laptop-wont-charge");
      nodes.forEach((node) => {
        expect(node.answers.length).toBeGreaterThan(0);
      });
    });
  });

  describe("getCauses", () => {
    it("should return causes for a problem", () => {
      const causes = getCauses("prob-laptop-wont-charge");
      expect(causes.length).toBeGreaterThan(0);
    });

    it("should have required fields", () => {
      const causes = getCauses("prob-laptop-wont-charge");
      causes.forEach((cause) => {
        expect(cause.id).toBeDefined();
        expect(cause.title).toBeDefined();
        expect(cause.safetyLevel).toBeDefined();
        expect(cause.recommendation).toBeDefined();
      });
    });
  });

  describe("getCauseById", () => {
    it("should find cause by id", () => {
      const cause = getCauseById("cause-lc-1");
      expect(cause).toBeDefined();
      expect(cause?.title).toBe("Faulty Charging Cable");
    });

    it("should return undefined for non-existent id", () => {
      const cause = getCauseById("non-existent");
      expect(cause).toBeUndefined();
    });
  });

  describe("searchProblems", () => {
    it("should find problems by title", () => {
      const results = searchProblems("laptop");
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].slug).toBe("laptop-wont-charge");
    });

    it("should find problems by symptom", () => {
      const results = searchProblems("charging");
      expect(results.length).toBeGreaterThan(0);
    });

    it("should return empty for no matches", () => {
      const results = searchProblems("xyznonexistent");
      expect(results.length).toBe(0);
    });

    it("should be case insensitive", () => {
      const results = searchProblems("LAPTOP");
      expect(results.length).toBeGreaterThan(0);
    });

    it("should find software problems", () => {
      const results = searchProblems("blue screen");
      expect(results.length).toBeGreaterThan(0);
    });

    it("should find internet problems", () => {
      const results = searchProblems("internet");
      expect(results.length).toBeGreaterThan(0);
    });
  });
});
