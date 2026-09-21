import type { Problem, DiagnosticNode, Cause } from "@/lib/db/types";

export const vehicleProblems: Problem[] = [
  {
    id: "prob-car-ac-not-working",
    categoryId: "cat-vehicles",
    title: "Car AC Not Working",
    slug: "car-ac-not-working",
    description:
      "Your car's air conditioning is not blowing cold air or not working at all.",
    symptoms: [
      "Car AC blows warm air",
      "AC makes noise but no cold air",
      "AC works sometimes but not others",
      "Strange smell from AC vents",
    ],
    safetyLevel: "CAUTION",
    metaTitle:
      "Car AC Not Working - Fix & Diagnosis | Why Isn't It Working",
    metaDescription:
      "Find out why your car AC is not working. Use our diagnostic tool to identify the cause.",
  },
  {
    id: "prob-car-brake-squealing",
    categoryId: "cat-vehicles",
    title: "Car Brakes Squealing",
    slug: "car-brake-squealing",
    description:
      "Your car makes a high-pitched squealing noise when braking.",
    symptoms: [
      "Squealing sound when braking",
      "Screeching noise from wheels",
      "Brakes feel less responsive",
      "Grinding sound when braking",
    ],
    safetyLevel: "HIGH",
    metaTitle:
      "Car Brakes Squealing - Diagnosis | Why Isn't It Working",
    metaDescription:
      "Diagnose why your car brakes are squealing. Safety-first diagnostic tool.",
  },
];

export const carAcCauses: Cause[] = [
  {
    id: "cause-ca-1",
    problemId: "prob-car-ac-not-working",
    title: "Low Refrigerant",
    description:
      "The AC system is low on refrigerant due to a leak.",
    safetyLevel: "HIGH",
    recommendation:
      "Refrigerant handling requires proper equipment. Have a mechanic check and recharge the system.",
    professionalHelp: true,
  },
  {
    id: "cause-ca-2",
    problemId: "prob-car-ac-not-working",
    title: "Faulty Compressor",
    description:
      "The AC compressor is not working properly.",
    safetyLevel: "HIGH",
    recommendation:
      "The compressor needs professional diagnosis. Do not attempt to repair it yourself.",
    professionalHelp: true,
  },
  {
    id: "cause-ca-3",
    problemId: "prob-car-ac-not-working",
    title: "Cabin Air Filter Clogged",
    description:
      "The cabin air filter is clogged, reducing airflow.",
    safetyLevel: "SAFE",
    recommendation:
      "Replace the cabin air filter. It's usually located behind the glove box.",
    professionalHelp: false,
  },
  {
    id: "cause-ca-4",
    problemId: "prob-car-ac-not-working",
    title: "Condenser Issue",
    description:
      "The AC condenser is blocked or damaged.",
    safetyLevel: "CAUTION",
    recommendation:
      "Check if the condenser (in front of the radiator) is blocked by debris. Clean carefully.",
    professionalHelp: false,
  },
  {
    id: "cause-ca-5",
    problemId: "prob-car-ac-not-working",
    title: "Electrical Problem",
    description:
      "There's an electrical issue with the AC system.",
    safetyLevel: "HIGH",
    recommendation:
      "Electrical issues require professional diagnosis. Contact a mechanic.",
    professionalHelp: true,
  },
];

export const carAcNodes: DiagnosticNode[] = [
  {
    id: "root",
    problemId: "prob-car-ac-not-working",
    question: "Does the AC blow air at all?",
    answers: [
      {
        id: "ca-a1-yes",
        nodeId: "root",
        text: "Yes, but it's warm",
        nextNodeId: "node-warm-air",
        causeScores: [
          { causeId: "cause-ca-1", points: 3 },
          { causeId: "cause-ca-2", points: 2 },
        ],
      },
      {
        id: "ca-a1-no",
        nodeId: "root",
        text: "No, no air comes out",
        nextNodeId: "node-no-air",
        causeScores: [
          { causeId: "cause-ca-3", points: 3 },
          { causeId: "cause-ca-5", points: 2 },
        ],
      },
      {
        id: "ca-a1-smell",
        nodeId: "root",
        text: "Yes, but there's a strange smell",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-ca-3", points: 4 }],
      },
    ],
  },
  {
    id: "node-warm-air",
    problemId: "prob-car-ac-not-working",
    question: "Does the AC make unusual sounds?",
    answers: [
      {
        id: "ca-a2-yes",
        nodeId: "node-warm-air",
        text: "Yes, clicking or grinding",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-ca-2", points: 4 }],
      },
      {
        id: "ca-a2-no",
        nodeId: "node-warm-air",
        text: "No, sounds normal",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-ca-1", points: 3 },
          { causeId: "cause-ca-4", points: 2 },
        ],
      },
    ],
  },
  {
    id: "node-no-air",
    problemId: "prob-car-ac-not-working",
    question: "Is the AC fan turning on?",
    answers: [
      {
        id: "ca-a3-yes",
        nodeId: "node-no-air",
        text: "Yes, I hear the fan",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-ca-3", points: 4 }],
      },
      {
        id: "ca-a3-no",
        nodeId: "node-no-air",
        text: "No, nothing happens",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-ca-5", points: 4 }],
      },
    ],
  },
];

export const carBrakeCauses: Cause[] = [
  {
    id: "cause-cb-1",
    problemId: "prob-car-brake-squealing",
    title: "Worn Brake Pads",
    description:
      "The brake pads are worn down and need replacement. This is the most common cause of brake squealing.",
    safetyLevel: "HIGH",
    recommendation:
      "Have your brake pads inspected immediately. Worn pads can damage rotors and increase stopping distance.",
    professionalHelp: true,
  },
  {
    id: "cause-cb-2",
    problemId: "prob-car-brake-squealing",
    title: "Brake Dust Accumulation",
    description:
      "Built-up brake dust on the pads or rotors can cause squealing.",
    safetyLevel: "SAFE",
    recommendation:
      "Clean the wheels and brakes with appropriate brake cleaner. The squealing may stop after a few brake applications.",
    professionalHelp: false,
  },
  {
    id: "cause-cb-3",
    problemId: "prob-car-brake-squealing",
    title: "Moisture on Brakes",
    description:
      "Moisture from rain or washing can cause temporary brake squeal.",
    safetyLevel: "SAFE",
    recommendation:
      "This is normal. The squealing should stop after a few brake applications as the brakes dry out.",
    professionalHelp: false,
  },
  {
    id: "cause-cb-4",
    problemId: "prob-car-brake-squealing",
    title: "Glazed Brake Pads or Rotors",
    description:
      "Hard braking can glaze the brake surfaces, causing squealing.",
    safetyLevel: "CAUTION",
    recommendation:
      "Avoid hard braking when possible. If persistent, have the brakes inspected by a professional.",
    professionalHelp: false,
  },
  {
    id: "cause-cb-5",
    problemId: "prob-car-brake-squealing",
    title: "Damaged Brake Components",
    description:
      "The rotors, calipers, or other brake components may be damaged.",
    safetyLevel: "STOP",
    recommendation:
      "Stop driving immediately and have your vehicle towed to a mechanic. Damaged brake components are a serious safety hazard.",
    professionalHelp: true,
  },
];

export const carBrakeNodes: DiagnosticNode[] = [
  {
    id: "root",
    problemId: "prob-car-brake-squealing",
    question: "When does the squealing happen?",
    answers: [
      {
        id: "cb-a1-braking",
        nodeId: "root",
        text: "Only when I press the brakes",
        nextNodeId: "node-squeal-braking",
        causeScores: [
          { causeId: "cause-cb-1", points: 3 },
          { causeId: "cause-cb-2", points: 1 },
        ],
      },
      {
        id: "cb-a1-always",
        nodeId: "root",
        text: "All the time, even when not braking",
        nextNodeId: "node-squeal-always",
        causeScores: [
          { causeId: "cause-cb-5", points: 3 },
          { causeId: "cause-cb-4", points: 2 },
        ],
      },
      {
        id: "cb-a1-rain",
        nodeId: "root",
        text: "Mostly after rain or in wet conditions",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-cb-3", points: 4 }],
      },
    ],
  },
  {
    id: "node-squeal-braking",
    problemId: "prob-car-brake-squealing",
    question: "How long has this been happening?",
    answers: [
      {
        id: "cb-a2-days",
        nodeId: "node-squeal-braking",
        text: "Just started recently (days)",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-cb-2", points: 3 },
          { causeId: "cause-cb-1", points: 2 },
        ],
      },
      {
        id: "cb-a2-weeks",
        nodeId: "node-squeal-braking",
        text: "For a few weeks",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-cb-1", points: 4 }],
      },
      {
        id: "cb-a2-long",
        nodeId: "node-squeal-braking",
        text: "For a long time",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-cb-1", points: 4 },
          { causeId: "cause-cb-4", points: 2 },
        ],
      },
    ],
  },
  {
    id: "node-squeal-always",
    problemId: "prob-car-brake-squealing",
    question: "Does the car pull to one side when braking?",
    answers: [
      {
        id: "cb-a3-yes",
        nodeId: "node-squeal-always",
        text: "Yes, it pulls to the left or right",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-cb-5", points: 4 }],
      },
      {
        id: "cb-a3-no",
        nodeId: "node-squeal-always",
        text: "No, it stays straight",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-cb-4", points: 3 },
          { causeId: "cause-cb-1", points: 2 },
        ],
      },
    ],
  },
];
