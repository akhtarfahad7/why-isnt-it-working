import type { Problem, DiagnosticNode, Cause } from "@/lib/db/types";

export const phoneBatteryProblems: Problem[] = [
  {
    id: "prob-phone-battery-drains",
    categoryId: "cat-electronics",
    title: "Phone Battery Drains Fast",
    slug: "phone-battery-drains-fast",
    description:
      "Your phone battery runs out quickly, even with normal use or when idle.",
    symptoms: [
      "Battery percentage drops rapidly",
      "Phone dies before end of day",
      "Battery drains overnight",
      "Phone gets hot while charging",
    ],
    safetyLevel: "SAFE",
    metaTitle:
      "Phone Battery Drains Fast - Fix & Diagnosis | Why Isn't It Working",
    metaDescription:
      "Find out why your phone battery drains fast. Use our diagnostic tool to identify the cause and get solutions.",
  },
  {
    id: "prob-phone-overheating",
    categoryId: "cat-electronics",
    title: "Phone Overheating",
    slug: "phone-overheating",
    description:
      "Your phone gets unusually hot during use, charging, or even when idle.",
    symptoms: [
      "Phone feels hot to touch",
      "Phone slows down when hot",
      "Warning message about temperature",
      "Phone shuts down due to heat",
    ],
    safetyLevel: "CAUTION",
    metaTitle:
      "Phone Overheating - Fix & Diagnosis | Why Isn't It Working",
    metaDescription:
      "Diagnose why your phone is overheating. Find the cause and get recommendations.",
  },
];

export const phoneBatteryCauses: Cause[] = [
  {
    id: "cause-pb-1",
    problemId: "prob-phone-battery-drains",
    title: "Background Apps Consuming Battery",
    description:
      "Too many apps running in the background are draining your battery.",
    safetyLevel: "SAFE",
    recommendation:
      "Close unused apps. Check battery usage in settings to see which apps use the most power.",
    professionalHelp: false,
  },
  {
    id: "cause-pb-2",
    problemId: "prob-phone-battery-drains",
    title: "Screen Brightness Too High",
    description:
      "High screen brightness or always-on display is consuming significant battery.",
    safetyLevel: "SAFE",
    recommendation:
      "Lower screen brightness or enable auto-brightness. Turn off always-on display if not needed.",
    professionalHelp: false,
  },
  {
    id: "cause-pb-3",
    problemId: "prob-phone-battery-drains",
    title: "Old Battery Needing Replacement",
    description:
      "Your phone battery has degraded over time and can no longer hold a full charge.",
    safetyLevel: "SAFE",
    recommendation:
      "Check battery health in settings. If below 80%, consider battery replacement.",
    professionalHelp: false,
  },
  {
    id: "cause-pb-4",
    problemId: "prob-phone-battery-drains",
    title: "Software Bug or Glitch",
    description:
      "A recent software update or app may be causing excessive battery drain.",
    safetyLevel: "SAFE",
    recommendation:
      "Restart your phone. Check for software updates. Uninstall recently installed apps.",
    professionalHelp: false,
  },
  {
    id: "cause-pb-5",
    problemId: "prob-phone-battery-drains",
    title: "Faulty Charging Cable or Adapter",
    description:
      "The charger is not providing proper power, causing slow or incomplete charging.",
    safetyLevel: "SAFE",
    recommendation:
      "Try a different certified charger. Check for damage on the cable and adapter.",
    professionalHelp: false,
  },
];

export const phoneBatteryNodes: DiagnosticNode[] = [
  {
    id: "root",
    problemId: "prob-phone-battery-drains",
    question: "Does the battery drain fast even when you're not using the phone?",
    answers: [
      {
        id: "pb-a1-yes",
        nodeId: "root",
        text: "Yes, it drains overnight or when idle",
        nextNodeId: "node-drains-idle",
        causeScores: [
          { causeId: "cause-pb-1", points: 3 },
          { causeId: "cause-pb-4", points: 2 },
        ],
      },
      {
        id: "pb-a1-no",
        nodeId: "root",
        text: "No, only when I'm using it",
        nextNodeId: "node-drains-using",
        causeScores: [
          { causeId: "cause-pb-2", points: 3 },
          { causeId: "cause-pb-3", points: 1 },
        ],
      },
      {
        id: "pb-a1-both",
        nodeId: "root",
        text: "Both - drains fast always",
        nextNodeId: "node-drains-both",
        causeScores: [
          { causeId: "cause-pb-3", points: 3 },
          { causeId: "cause-pb-1", points: 2 },
        ],
      },
    ],
  },
  {
    id: "node-drains-idle",
    problemId: "prob-phone-battery-drains",
    question: "Do you have many apps running in the background?",
    answers: [
      {
        id: "pb-a2-yes",
        nodeId: "node-drains-idle",
        text: "Yes, I have many apps open",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-pb-1", points: 4 }],
      },
      {
        id: "pb-a2-no",
        nodeId: "node-drains-idle",
        text: "No, I close apps regularly",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-pb-4", points: 3 },
          { causeId: "cause-pb-3", points: 2 },
        ],
      },
    ],
  },
  {
    id: "node-drains-using",
    problemId: "prob-phone-battery-drains",
    question: "Is your screen brightness set to high or always-on?",
    answers: [
      {
        id: "pb-a3-yes",
        nodeId: "node-drains-using",
        text: "Yes, brightness is high",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-pb-2", points: 4 }],
      },
      {
        id: "pb-a3-no",
        nodeId: "node-drains-using",
        text: "No, it's on auto or low",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-pb-3", points: 3 },
          { causeId: "cause-pb-1", points: 2 },
        ],
      },
    ],
  },
  {
    id: "node-drains-both",
    problemId: "prob-phone-battery-drains",
    question: "How old is your phone?",
    answers: [
      {
        id: "pb-a4-new",
        nodeId: "node-drains-both",
        text: "Less than 1 year",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-pb-4", points: 4 },
          { causeId: "cause-pb-5", points: 2 },
        ],
      },
      {
        id: "pb-a4-old",
        nodeId: "node-drains-both",
        text: "More than 2 years",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-pb-3", points: 4 }],
      },
    ],
  },
];

export const phoneOverheatingCauses: Cause[] = [
  {
    id: "cause-po-1",
    problemId: "prob-phone-overheating",
    title: "Heavy App Usage",
    description:
      "Running demanding apps like games or video editors causes the processor to overheat.",
    safetyLevel: "SAFE",
    recommendation:
      "Close heavy apps when not in use. Take breaks during extended gaming sessions.",
    professionalHelp: false,
  },
  {
    id: "cause-po-2",
    problemId: "prob-phone-overheating",
    title: "Direct Sunlight Exposure",
    description:
      "Leaving your phone in direct sunlight or a hot car causes it to overheat.",
    safetyLevel: "SAFE",
    recommendation:
      "Keep your phone out of direct sunlight. Don't leave it in a hot car.",
    professionalHelp: false,
  },
  {
    id: "cause-po-3",
    problemId: "prob-phone-overheating",
    title: "Faulty Battery",
    description:
      "A damaged or defective battery can cause overheating, which may be dangerous.",
    safetyLevel: "HIGH",
    recommendation:
      "Stop using the phone immediately if it gets very hot. Have the battery checked by a professional.",
    professionalHelp: true,
  },
  {
    id: "cause-po-4",
    problemId: "prob-phone-overheating",
    title: "Software Issue",
    description:
      "A software bug is causing the processor to work harder than necessary.",
    safetyLevel: "SAFE",
    recommendation:
      "Restart your phone. Check for software updates. Clear cache partition.",
    professionalHelp: false,
  },
  {
    id: "cause-po-5",
    problemId: "prob-phone-overheating",
    title: "Charging While Using",
    description:
      "Using your phone while charging generates excess heat from both the battery and processor.",
    safetyLevel: "CAUTION",
    recommendation:
      "Avoid using your phone while charging. Remove the case while charging for better heat dissipation.",
    professionalHelp: false,
  },
];

export const phoneOverheatingNodes: DiagnosticNode[] = [
  {
    id: "root",
    problemId: "prob-phone-overheating",
    question: "When does your phone overheat?",
    answers: [
      {
        id: "po-a1-gaming",
        nodeId: "root",
        text: "While playing games or using heavy apps",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-po-1", points: 4 }],
      },
      {
        id: "po-a1-charging",
        nodeId: "root",
        text: "While charging",
        nextNodeId: "node-charging-heat",
        causeScores: [{ causeId: "cause-po-5", points: 3 }],
      },
      {
        id: "po-a1-sun",
        nodeId: "root",
        text: "After being in sunlight or a hot place",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-po-2", points: 4 }],
      },
      {
        id: "po-a1-random",
        nodeId: "root",
        text: "Randomly, even when not in use",
        nextNodeId: "node-random-heat",
        causeScores: [
          { causeId: "cause-po-3", points: 3 },
          { causeId: "cause-po-4", points: 2 },
        ],
      },
    ],
  },
  {
    id: "node-charging-heat",
    problemId: "prob-phone-overheating",
    question: "Are you using the phone while charging?",
    answers: [
      {
        id: "po-a2-yes",
        nodeId: "node-charging-heat",
        text: "Yes, always",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-po-5", points: 4 }],
      },
      {
        id: "po-a2-no",
        nodeId: "node-charging-heat",
        text: "No, it heats up even when idle",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-po-3", points: 3 },
          { causeId: "cause-po-4", points: 2 },
        ],
      },
    ],
  },
  {
    id: "node-random-heat",
    problemId: "prob-phone-overheating",
    question: "Does the phone feel very hot or just warm?",
    answers: [
      {
        id: "po-a3-hot",
        nodeId: "node-random-heat",
        text: "Very hot - almost too hot to hold",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-po-3", points: 4 }],
      },
      {
        id: "po-a3-warm",
        nodeId: "node-random-heat",
        text: "Just warm",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-po-4", points: 3 }],
      },
    ],
  },
];
