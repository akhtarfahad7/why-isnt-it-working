import { categories } from "@/data/categories";
import {
  problems as mvpProblems,
  laptopChargingNodes,
  laptopChargingCauses,
  wifiNodes,
  wifiCauses,
  carNodes,
  carCauses,
} from "@/data/problems/mvp";
import {
  phoneBatteryProblems,
  phoneBatteryCauses,
  phoneBatteryNodes,
  phoneOverheatingCauses,
  phoneOverheatingNodes,
} from "@/data/problems/electronics";
import {
  moreElectronicsProblems,
  moreElectronicsCauses,
  moreElectronicsNodes,
} from "@/data/problems/electronics-extended";
import {
  applianceProblems,
  acCauses,
  acNodes,
  washingMachineCauses,
  washingMachineNodes,
  microwaveCauses,
  microwaveNodes,
} from "@/data/problems/appliances";
import {
  vehicleProblems,
  carAcCauses,
  carAcNodes,
  carBrakeCauses,
  carBrakeNodes,
} from "@/data/problems/vehicles";
import {
  homeProblems,
  homeCauses,
  homeNodes,
} from "@/data/problems/home";
import {
  softwareProblems,
  softwareCauses,
  softwareNodes,
} from "@/data/problems/software";
import {
  internetProblems,
  internetCauses,
  internetNodes,
} from "@/data/problems/internet";
import type { Problem, DiagnosticNode, Cause, Category } from "./types";

const ALL_PROBLEMS: Problem[] = [
  ...mvpProblems,
  ...phoneBatteryProblems,
  ...moreElectronicsProblems,
  ...applianceProblems,
  ...vehicleProblems,
  ...homeProblems,
  ...softwareProblems,
  ...internetProblems,
];

const ALL_NODES: DiagnosticNode[] = [
  ...laptopChargingNodes,
  ...wifiNodes,
  ...carNodes,
  ...phoneBatteryNodes,
  ...phoneOverheatingNodes,
  ...moreElectronicsNodes,
  ...acNodes,
  ...washingMachineNodes,
  ...microwaveNodes,
  ...carAcNodes,
  ...carBrakeNodes,
  ...homeNodes,
  ...softwareNodes,
  ...internetNodes,
];

const ALL_CAUSES: Cause[] = [
  ...laptopChargingCauses,
  ...wifiCauses,
  ...carCauses,
  ...phoneBatteryCauses,
  ...phoneOverheatingCauses,
  ...moreElectronicsCauses,
  ...acCauses,
  ...washingMachineCauses,
  ...microwaveCauses,
  ...carAcCauses,
  ...carBrakeCauses,
  ...homeCauses,
  ...softwareCauses,
  ...internetCauses,
];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllProblems(): Problem[] {
  return ALL_PROBLEMS;
}

export function getProblemBySlug(slug: string): Problem | undefined {
  return ALL_PROBLEMS.find((p) => p.slug === slug);
}

export function getProblemsByCategory(categoryId: string): Problem[] {
  return ALL_PROBLEMS.filter((p) => p.categoryId === categoryId);
}

export function getDiagnosticNodes(problemId: string): DiagnosticNode[] {
  return ALL_NODES.filter((n) => n.problemId === problemId);
}

export function getCauses(problemId: string): Cause[] {
  return ALL_CAUSES.filter((c) => c.problemId === problemId);
}

export function getCauseById(causeId: string): Cause | undefined {
  return ALL_CAUSES.find((c) => c.id === causeId);
}

export function searchProblems(query: string): Problem[] {
  const lower = query.toLowerCase();
  return ALL_PROBLEMS.filter(
    (p) =>
      p.title.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower) ||
      p.symptoms.some((s) => s.toLowerCase().includes(lower))
  );
}
