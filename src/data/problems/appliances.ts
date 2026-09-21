import type { Problem, DiagnosticNode, Cause } from "@/lib/db/types";

export const applianceProblems: Problem[] = [
  {
    id: "prob-ac-not-cooling",
    categoryId: "cat-appliances",
    title: "Air Conditioner Not Cooling",
    slug: "ac-not-cooling",
    description:
      "Your AC is running but not cooling the room, or cooling very poorly.",
    symptoms: [
      "AC runs but room stays warm",
      "Air from AC is not cold",
      "AC cools sometimes but not others",
      "AC makes noise but no cold air",
    ],
    safetyLevel: "CAUTION",
    metaTitle:
      "AC Not Cooling - Diagnosis & Fix | Why Isn't It Working",
    metaDescription:
      "Find out why your air conditioner is not cooling. Use our diagnostic tool to identify the cause.",
  },
  {
    id: "prob-washing-machine-not-draining",
    categoryId: "cat-appliances",
    title: "Washing Machine Not Draining",
    slug: "washing-machine-not-draining",
    description:
      "Your washing machine finishes the cycle but water remains in the drum.",
    symptoms: [
      "Water left in drum after cycle",
      "Machine stops mid-cycle",
      "Drain error code displayed",
      "Water drains very slowly",
    ],
    safetyLevel: "CAUTION",
    metaTitle:
      "Washing Machine Not Draining - Fix | Why Isn't It Working",
    metaDescription:
      "Diagnose why your washing machine won't drain. Get step-by-step solutions.",
  },
  {
    id: "prob-microwave-not-heating",
    categoryId: "cat-appliances",
    title: "Microwave Not Heating",
    slug: "microwave-not-heating",
    description:
      "Your microwave runs but doesn't heat food, or heats unevenly.",
    symptoms: [
      "Microwave runs but food stays cold",
      "Food heats unevenly",
      "Microwave makes unusual sounds",
      "Turntable doesn't rotate",
    ],
    safetyLevel: "HIGH",
    metaTitle:
      "Microwave Not Heating - Diagnosis | Why Isn't It Working",
    metaDescription:
      "Find out why your microwave is not heating. Our diagnostic tool helps identify the problem.",
  },
];

export const acCauses: Cause[] = [
  {
    id: "cause-ac-1",
    problemId: "prob-ac-not-cooling",
    title: "Dirty Air Filter",
    description:
      "A clogged air filter restricts airflow, reducing cooling efficiency.",
    safetyLevel: "SAFE",
    recommendation:
      "Clean or replace the air filter. Check filter every 2 weeks during heavy use.",
    professionalHelp: false,
  },
  {
    id: "cause-ac-2",
    problemId: "prob-ac-not-cooling",
    title: "Low Refrigerant",
    description:
      "The AC is low on refrigerant due to a leak or normal usage over time.",
    safetyLevel: "HIGH",
    recommendation:
      "This requires professional service. A technician needs to locate the leak and recharge the system.",
    professionalHelp: true,
  },
  {
    id: "cause-ac-3",
    problemId: "prob-ac-not-cooling",
    title: "Dirty Condenser Coils",
    description:
      "The outdoor unit's coils are dirty, preventing heat transfer.",
    safetyLevel: "CAUTION",
    recommendation:
      "Turn off the AC and clean the outdoor unit coils with a garden hose. Be careful with electrical components.",
    professionalHelp: false,
  },
  {
    id: "cause-ac-4",
    problemId: "prob-ac-not-cooling",
    title: "Thermostat Issue",
    description:
      "The thermostat is not reading temperature correctly or is set incorrectly.",
    safetyLevel: "SAFE",
    recommendation:
      "Check thermostat settings. Ensure it's set to 'cool' and the temperature is set correctly. Replace batteries if needed.",
    professionalHelp: false,
  },
  {
    id: "cause-ac-5",
    problemId: "prob-ac-not-cooling",
    title: "Compressor Failure",
    description:
      "The compressor, which circulates refrigerant, has failed.",
    safetyLevel: "HIGH",
    recommendation:
      "The compressor needs professional diagnosis and likely replacement. Contact a certified HVAC technician.",
    professionalHelp: true,
  },
];

export const acNodes: DiagnosticNode[] = [
  {
    id: "root",
    problemId: "prob-ac-not-cooling",
    question: "Is the AC turning on and blowing air?",
    answers: [
      {
        id: "ac-a1-yes",
        nodeId: "root",
        text: "Yes, but the air is not cold",
        nextNodeId: "node-air-not-cold",
        causeScores: [
          { causeId: "cause-ac-2", points: 3 },
          { causeId: "cause-ac-3", points: 2 },
        ],
      },
      {
        id: "ac-a1-no",
        nodeId: "root",
        text: "No, it won't turn on at all",
        nextNodeId: "node-wont-turn-on",
        causeScores: [
          { causeId: "cause-ac-4", points: 3 },
          { causeId: "cause-ac-5", points: 2 },
        ],
      },
      {
        id: "ac-a1-partial",
        nodeId: "root",
        text: "Sometimes yes, sometimes no",
        nextNodeId: "node-intermittent",
        causeScores: [
          { causeId: "cause-ac-1", points: 2 },
          { causeId: "cause-ac-2", points: 2 },
        ],
      },
    ],
  },
  {
    id: "node-air-not-cold",
    problemId: "prob-ac-not-cooling",
    question: "When did you last clean or replace the air filter?",
    answers: [
      {
        id: "ac-a2-never",
        nodeId: "node-air-not-cold",
        text: "I don't remember / Never",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-ac-1", points: 4 }],
      },
      {
        id: "ac-a2-recent",
        nodeId: "node-air-not-cold",
        text: "Recently, within the last month",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-ac-2", points: 3 },
          { causeId: "cause-ac-3", points: 3 },
        ],
      },
    ],
  },
  {
    id: "node-wont-turn-on",
    problemId: "prob-ac-not-cooling",
    question: "Is the thermostat set to 'cool' mode?",
    answers: [
      {
        id: "ac-a3-yes",
        nodeId: "node-wont-turn-on",
        text: "Yes, it's set correctly",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-ac-5", points: 4 }],
      },
      {
        id: "ac-a3-no",
        nodeId: "node-wont-turn-on",
        text: "No, or I'm not sure",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-ac-4", points: 4 }],
      },
    ],
  },
  {
    id: "node-intermittent",
    problemId: "prob-ac-not-cooling",
    question: "Does the outdoor unit make unusual sounds?",
    answers: [
      {
        id: "ac-a4-yes",
        nodeId: "node-intermittent",
        text: "Yes, clicking or humming",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-ac-5", points: 3 }],
      },
      {
        id: "ac-a4-no",
        nodeId: "node-intermittent",
        text: "No, sounds normal",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-ac-1", points: 3 }],
      },
    ],
  },
];

export const washingMachineCauses: Cause[] = [
  {
    id: "cause-wm-1",
    problemId: "prob-washing-machine-not-draining",
    title: "Clogged Drain Pump Filter",
    description:
      "The drain pump filter is blocked with lint, coins, or debris.",
    safetyLevel: "SAFE",
    recommendation:
      "Locate and clean the drain pump filter. It's usually behind a small door at the bottom front of the machine.",
    professionalHelp: false,
  },
  {
    id: "cause-wm-2",
    problemId: "prob-washing-machine-not-draining",
    title: "Kinked or Blocked Drain Hose",
    description:
      "The drain hose is kinked, clogged, or not positioned correctly.",
    safetyLevel: "SAFE",
    recommendation:
      "Check the drain hose for kinks or blockages. Ensure it's not inserted too far into the standpipe.",
    professionalHelp: false,
  },
  {
    id: "cause-wm-3",
    problemId: "prob-washing-machine-not-draining",
    title: "Faulty Drain Pump",
    description:
      "The drain pump motor has failed or is jammed.",
    safetyLevel: "HIGH",
    recommendation:
      "The drain pump needs professional diagnosis and likely replacement. Contact a repair technician.",
    professionalHelp: true,
  },
  {
    id: "cause-wm-4",
    problemId: "prob-washing-machine-not-draining",
    title: "Blocked Standpipe",
    description:
      "The household standpipe or drain is blocked, preventing water from flowing out.",
    safetyLevel: "SAFE",
    recommendation:
      "Check if other drains in your home are also slow. If so, the blockage may be in your plumbing.",
    professionalHelp: false,
  },
  {
    id: "cause-wm-5",
    problemId: "prob-washing-machine-not-draining",
    title: "Control Board Issue",
    description:
      "The electronic control board is not sending the signal to drain.",
    safetyLevel: "HIGH",
    recommendation:
      "Try restarting the machine. If the problem persists, the control board may need professional repair.",
    professionalHelp: true,
  },
];

export const washingMachineNodes: DiagnosticNode[] = [
  {
    id: "root",
    problemId: "prob-washing-machine-not-draining",
    question: "Does the machine make any sound when it should be draining?",
    answers: [
      {
        id: "wm-a1-yes",
        nodeId: "root",
        text: "Yes, I hear humming or gurgling",
        nextNodeId: "node-hears-drain",
        causeScores: [{ causeId: "cause-wm-2", points: 2 }],
      },
      {
        id: "wm-a1-no",
        nodeId: "root",
        text: "No, it's silent",
        nextNodeId: "node-silent-drain",
        causeScores: [
          { causeId: "cause-wm-3", points: 3 },
          { causeId: "cause-wm-5", points: 2 },
        ],
      },
      {
        id: "wm-a1-error",
        nodeId: "root",
        text: "It shows an error code",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-wm-3", points: 3 },
          { causeId: "cause-wm-5", points: 3 },
        ],
      },
    ],
  },
  {
    id: "node-hears-drain",
    problemId: "prob-washing-machine-not-draining",
    question: "Is the drain hose kinked or bent?",
    answers: [
      {
        id: "wm-a2-yes",
        nodeId: "node-hears-drain",
        text: "Yes, it looks kinked",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-wm-2", points: 4 }],
      },
      {
        id: "wm-a2-no",
        nodeId: "node-hears-drain",
        text: "No, it looks fine",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-wm-1", points: 3 }],
      },
    ],
  },
  {
    id: "node-silent-drain",
    problemId: "prob-washing-machine-not-draining",
    question: "Have you checked the drain pump filter?",
    answers: [
      {
        id: "wm-a3-no",
        nodeId: "node-silent-drain",
        text: "No, I don't know where it is",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-wm-1", points: 3 }],
      },
      {
        id: "wm-a3-yes-clean",
        nodeId: "node-silent-drain",
        text: "Yes, it was clean",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-wm-3", points: 3 },
          { causeId: "cause-wm-5", points: 2 },
        ],
      },
      {
        id: "wm-a3-yes-dirty",
        nodeId: "node-silent-drain",
        text: "Yes, it was clogged",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-wm-1", points: 4 }],
      },
    ],
  },
];

export const microwaveCauses: Cause[] = [
  {
    id: "cause-mw-1",
    problemId: "prob-microwave-not-heating",
    title: "Faulty Door Switch",
    description:
      "The safety switches that detect if the door is closed may be malfunctioning.",
    safetyLevel: "HIGH",
    recommendation:
      "Do not attempt to bypass door switches. Have them inspected by a qualified technician.",
    professionalHelp: true,
  },
  {
    id: "cause-mw-2",
    problemId: "prob-microwave-not-heating",
    title: "Failed Magnetron",
    description:
      "The magnetron, which generates the microwaves, has failed.",
    safetyLevel: "HIGH",
    recommendation:
      "The magnetron needs professional replacement. Do not attempt to repair it yourself.",
    professionalHelp: true,
  },
  {
    id: "cause-mw-3",
    problemId: "prob-microwave-not-heating",
    title: "Turntable Motor Issue",
    description:
      "The turntable motor is not rotating, causing uneven heating.",
    safetyLevel: "CAUTION",
    recommendation:
      "Check if the turntable is properly seated. If the motor is faulty, it needs professional repair.",
    professionalHelp: false,
  },
  {
    id: "cause-mw-4",
    problemId: "prob-microwave-not-heating",
    title: "Dirty Waveguide Cover",
    description:
      "The waveguide cover inside the microwave is dirty or damaged, affecting energy distribution.",
    safetyLevel: "CAUTION",
    recommendation:
      "Clean the inside of the microwave thoroughly, especially the waveguide cover (small metal plate on the wall).",
    professionalHelp: false,
  },
  {
    id: "cause-mw-5",
    problemId: "prob-microwave-not-heating",
    title: "Power Supply Issue",
    description:
      "The microwave is not receiving full power due to electrical issues.",
    safetyLevel: "SAFE",
    recommendation:
      "Try plugging the microwave into a different outlet. Check if the outlet is working properly.",
    professionalHelp: false,
  },
];

export const microwaveNodes: DiagnosticNode[] = [
  {
    id: "root",
    problemId: "prob-microwave-not-heating",
    question: "Does the microwave run (make noise) but not heat?",
    answers: [
      {
        id: "mw-a1-yes",
        nodeId: "root",
        text: "Yes, it runs but food stays cold",
        nextNodeId: "node-runs-no-heat",
        causeScores: [
          { causeId: "cause-mw-1", points: 3 },
          { causeId: "cause-mw-2", points: 2 },
        ],
      },
      {
        id: "mw-a1-no",
        nodeId: "root",
        text: "No, it doesn't run at all",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-mw-5", points: 4 }],
      },
      {
        id: "mw-a1-partial",
        nodeId: "root",
        text: "It runs but heats unevenly",
        nextNodeId: "node-uneven-heat",
        causeScores: [{ causeId: "cause-mw-3", points: 3 }],
      },
    ],
  },
  {
    id: "node-runs-no-heat",
    problemId: "prob-microwave-not-heating",
    question: "Is the door closing properly?",
    answers: [
      {
        id: "mw-a2-yes",
        nodeId: "node-runs-no-heat",
        text: "Yes, it clicks shut",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-mw-2", points: 4 }],
      },
      {
        id: "mw-a2-no",
        nodeId: "node-runs-no-heat",
        text: "No, it feels loose or doesn't click",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-mw-1", points: 4 }],
      },
    ],
  },
  {
    id: "node-uneven-heat",
    problemId: "prob-microwave-not-heating",
    question: "Is the turntable rotating?",
    answers: [
      {
        id: "mw-a3-yes",
        nodeId: "node-uneven-heat",
        text: "Yes, it rotates fine",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-mw-4", points: 3 }],
      },
      {
        id: "mw-a3-no",
        nodeId: "node-uneven-heat",
        text: "No, it's stuck or not moving",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-mw-3", points: 4 }],
      },
    ],
  },
];
