export type SafetyLevel = "SAFE" | "CAUTION" | "HIGH" | "STOP";

export type CauseClassification = "most_likely" | "possible" | "less_likely";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Problem {
  id: string;
  categoryId: string;
  title: string;
  slug: string;
  description: string;
  symptoms: string[];
  safetyLevel: SafetyLevel;
  metaTitle: string;
  metaDescription: string;
}

export interface DiagnosticNode {
  id: string;
  problemId: string;
  question: string;
  answers: DiagnosticAnswer[];
  safetyNote?: string;
}

export interface DiagnosticAnswer {
  id: string;
  nodeId: string;
  text: string;
  nextNodeId: string | null;
  causeScores: CauseScore[];
}

export interface CauseScore {
  causeId: string;
  points: number;
}

export interface Cause {
  id: string;
  problemId: string;
  title: string;
  description: string;
  safetyLevel: SafetyLevel;
  recommendation: string;
  professionalHelp: boolean;
}

export interface DiagnosticResult {
  causeId: string;
  score: number;
  classification: CauseClassification;
}

export interface AnsweredNode {
  nodeId: string;
  answerId: string;
  question: string;
  answerText: string;
}

export interface DiagnosisSession {
  id: string;
  problemId: string;
  answers: string[];
  result: DiagnosticResult[];
  createdAt: Date;
}
