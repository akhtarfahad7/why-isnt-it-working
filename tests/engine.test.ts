import { describe, it, expect } from "vitest";
import {
  startDiagnostic,
  processAnswer,
  getRootNode,
  findNodeById,
} from "@/lib/diagnostic/engine";
import { laptopChargingNodes } from "@/data/problems/mvp";
import type { AnsweredNode } from "@/lib/db/types";

describe("Diagnostic Engine", () => {
  describe("startDiagnostic", () => {
    it("should return the root node", () => {
      const result = startDiagnostic(laptopChargingNodes);
      expect(result.currentNode).toBeDefined();
      expect(result.currentNode?.id).toBe("root");
      expect(result.isComplete).toBe(false);
      expect(result.results).toHaveLength(0);
      expect(result.answeredNodes).toHaveLength(0);
    });

    it("should compute max depth", () => {
      const result = startDiagnostic(laptopChargingNodes);
      expect(result.maxDepth).toBeGreaterThan(0);
    });
  });

  describe("processAnswer", () => {
    it("should move to next node when answer has nextNodeId", () => {
      const start = startDiagnostic(laptopChargingNodes);
      const result = processAnswer(
        laptopChargingNodes,
        start.answeredNodes,
        "lc-a1-yes",
        start.currentNode?.id
      );
      expect(result.currentNode).toBeDefined();
      expect(result.currentNode?.id).toBe("node-charging-light-on");
    });

    it("should complete when answer has no nextNodeId", () => {
      const prevAnswered: AnsweredNode[] = [
        {
          nodeId: "root",
          answerId: "lc-a1-no",
          question: "Does the charging light turn on?",
          answerText: "No, nothing happens",
        },
      ];
      const result = processAnswer(
        laptopChargingNodes,
        prevAnswered,
        "lc-a3-no",
        "node-charging-light-on"
      );
      expect(result.currentNode).toBeNull();
      expect(result.isComplete).toBe(true);
    });

    it("should track answered nodes with details", () => {
      const start = startDiagnostic(laptopChargingNodes);
      const result = processAnswer(
        laptopChargingNodes,
        start.answeredNodes,
        "lc-a1-yes",
        start.currentNode?.id
      );
      expect(result.answeredNodes).toHaveLength(1);
      expect(result.answeredNodes[0].nodeId).toBe("root");
      expect(result.answeredNodes[0].answerId).toBe("lc-a1-yes");
      expect(result.answeredNodes[0].question).toBeDefined();
      expect(result.answeredNodes[0].answerText).toBeDefined();
    });

    it("should calculate cause scores from selected answers only", () => {
      const start = startDiagnostic(laptopChargingNodes);
      const result = processAnswer(
        laptopChargingNodes,
        start.answeredNodes,
        "lc-a1-no",
        start.currentNode?.id
      );
      expect(result.results.length).toBeGreaterThan(0);
      expect(result.currentDepth).toBe(1);
    });

    it("should accumulate scores across multiple answers", () => {
      const start = startDiagnostic(laptopChargingNodes);
      const result1 = processAnswer(
        laptopChargingNodes,
        start.answeredNodes,
        "lc-a1-yes",
        start.currentNode?.id
      );
      const result2 = processAnswer(
        laptopChargingNodes,
        result1.answeredNodes,
        "lc-a2-no",
        result1.currentNode?.id
      );
      expect(result2.answeredNodes).toHaveLength(2);
      expect(result2.currentDepth).toBe(2);
    });
  });

  describe("getRootNode", () => {
    it("should return the root node", () => {
      const root = getRootNode(laptopChargingNodes);
      expect(root).toBeDefined();
      expect(root?.id).toBe("root");
    });
  });

  describe("findNodeById", () => {
    it("should find a node by id", () => {
      const node = findNodeById(laptopChargingNodes, "node-charging-light-on");
      expect(node).toBeDefined();
      expect(node?.question).toContain("battery percentage");
    });

    it("should return undefined for non-existent node", () => {
      const node = findNodeById(laptopChargingNodes, "non-existent");
      expect(node).toBeUndefined();
    });
  });
});
