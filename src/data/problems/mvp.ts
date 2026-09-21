import type { Problem, DiagnosticNode, Cause } from "@/lib/db/types";

export const problems: Problem[] = [
  {
    id: "prob-laptop-wont-charge",
    categoryId: "cat-electronics",
    title: "Laptop Won't Charge",
    slug: "laptop-wont-charge",
    description:
      "Your laptop is not charging when plugged in, charges very slowly, or the battery drains while plugged in.",
    symptoms: [
      "Laptop not charging when plugged in",
      "Battery percentage not increasing",
      "Charging indicator not showing",
      "Laptop works on battery but not when plugged in",
    ],
    safetyLevel: "CAUTION",
    metaTitle: "Laptop Won't Charge - Diagnosis & Fix | Why Isn't It Working",
    metaDescription:
      "Find out why your laptop won't charge. Use our diagnostic tool to identify the cause and get step-by-step recommendations.",
  },
  {
    id: "prob-wifi-keeps-disconnecting",
    categoryId: "cat-networking",
    title: "Wi-Fi Keeps Disconnecting",
    slug: "wifi-keeps-disconnecting",
    description:
      "Your Wi-Fi connection drops repeatedly, is unstable, or disconnects randomly.",
    symptoms: [
      "Wi-Fi disconnects randomly",
      "Internet drops intermittently",
      "Wi-Fi shows connected but no internet",
      "Need to reconnect Wi-Fi frequently",
    ],
    safetyLevel: "SAFE",
    metaTitle:
      "Wi-Fi Keeps Disconnecting - Fix & Diagnosis | Why Isn't It Working",
    metaDescription:
      "Diagnose why your Wi-Fi keeps disconnecting. Our tool helps identify the cause and provides solutions.",
  },
  {
    id: "prob-car-wont-start",
    categoryId: "cat-vehicles",
    title: "Car Won't Start",
    slug: "car-wont-start",
    description:
      "Your car won't start when you turn the key or push the start button.",
    symptoms: [
      "Engine doesn't crank",
      "Engine cranks but doesn't start",
      "Clicking sound when trying to start",
      "Dashboard lights come on but car won't start",
    ],
    safetyLevel: "CAUTION",
    metaTitle: "Car Won't Start - Diagnosis & Fix | Why Isn't It Working",
    metaDescription:
      "Find out why your car won't start. Use our diagnostic tool to identify the problem and get recommendations.",
  },
];

export const laptopChargingCauses: Cause[] = [
  {
    id: "cause-lc-1",
    problemId: "prob-laptop-wont-charge",
    title: "Faulty Charging Cable",
    description:
      "The charging cable may be damaged, frayed, or have a broken connector.",
    safetyLevel: "SAFE",
    recommendation:
      "Inspect the cable for visible damage. Try a different compatible charger if available.",
    professionalHelp: false,
  },
  {
    id: "cause-lc-2",
    problemId: "prob-laptop-wont-charge",
    title: "Damaged Charging Port",
    description:
      "The charging port on the laptop may be loose, damaged, or have debris inside.",
    safetyLevel: "CAUTION",
    recommendation:
      "Check if the connector fits snugly. Clean the port gently with compressed air. Avoid using metal objects.",
    professionalHelp: false,
  },
  {
    id: "cause-lc-3",
    problemId: "prob-laptop-wont-charge",
    title: "Battery Failure",
    description:
      "The laptop battery may have reached the end of its lifecycle or is defective.",
    safetyLevel: "SAFE",
    recommendation:
      "Check battery health in system settings. If the battery is removable, try removing and reinserting it.",
    professionalHelp: false,
  },
  {
    id: "cause-lc-4",
    problemId: "prob-laptop-wont-charge",
    title: "Power Adapter Issue",
    description:
      "The power adapter (charger brick) may be faulty or not providing enough power.",
    safetyLevel: "SAFE",
    recommendation:
      "Check if the adapter's LED indicator is on. Try a different compatible adapter.",
    professionalHelp: false,
  },
  {
    id: "cause-lc-5",
    problemId: "prob-laptop-wont-charge",
    title: "Motherboard Charging Circuit Failure",
    description:
      "The charging circuit on the motherboard may be damaged.",
    safetyLevel: "HIGH",
    recommendation:
      "This requires professional diagnosis and repair. Contact a qualified technician.",
    professionalHelp: true,
  },
];

export const laptopChargingNodes: DiagnosticNode[] = [
  {
    id: "root",
    problemId: "prob-laptop-wont-charge",
    question: "Does the charging indicator light up when you plug in the charger?",
    answers: [
      {
        id: "lc-a1-yes",
        nodeId: "root",
        text: "Yes, the light turns on",
        nextNodeId: "node-charging-light-on",
        causeScores: [],
      },
      {
        id: "lc-a1-no",
        nodeId: "root",
        text: "No, there is no light",
        nextNodeId: "node-no-charging-light",
        causeScores: [
          { causeId: "cause-lc-1", points: 3 },
          { causeId: "cause-lc-4", points: 2 },
        ],
      },
      {
        id: "lc-a1-dim",
        nodeId: "root",
        text: "It flickers or is dim",
        nextNodeId: "node-dim-charging-light",
        causeScores: [
          { causeId: "cause-lc-1", points: 2 },
          { causeId: "cause-lc-4", points: 3 },
        ],
      },
    ],
  },
  {
    id: "node-charging-light-on",
    problemId: "prob-laptop-wont-charge",
    question: "Does the battery percentage increase while plugged in?",
    answers: [
      {
        id: "lc-a2-yes",
        nodeId: "node-charging-light-on",
        text: "Yes, but very slowly",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-lc-3", points: 2 },
          { causeId: "cause-lc-4", points: 1 },
        ],
      },
      {
        id: "lc-a2-no",
        nodeId: "node-charging-light-on",
        text: "No, it stays the same or decreases",
        nextNodeId: "node-battery-drains",
        causeScores: [
          { causeId: "cause-lc-3", points: 3 },
          { causeId: "cause-lc-5", points: 2 },
        ],
      },
    ],
  },
  {
    id: "node-no-charging-light",
    problemId: "prob-laptop-wont-charge",
    question: "Have you tried a different power outlet?",
    answers: [
      {
        id: "lc-a3-yes",
        nodeId: "node-no-charging-light",
        text: "Yes, same result",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-lc-1", points: 3 },
          { causeId: "cause-lc-4", points: 3 },
          { causeId: "cause-lc-2", points: 2 },
        ],
      },
      {
        id: "lc-a3-no",
        nodeId: "node-no-charging-light",
        text: "No, I haven't",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-lc-1", points: 1 },
          { causeId: "cause-lc-4", points: 1 },
        ],
      },
    ],
  },
  {
    id: "node-dim-charging-light",
    problemId: "prob-laptop-wont-charge",
    question: "Is the charger connector loose in the port?",
    answers: [
      {
        id: "lc-a4-yes",
        nodeId: "node-dim-charging-light",
        text: "Yes, it wiggles or falls out",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-lc-2", points: 4 },
          { causeId: "cause-lc-1", points: 1 },
        ],
      },
      {
        id: "lc-a4-no",
        nodeId: "node-dim-charging-light",
        text: "No, it fits securely",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-lc-4", points: 3 },
          { causeId: "cause-lc-1", points: 2 },
        ],
      },
    ],
  },
  {
    id: "node-battery-drains",
    problemId: "prob-laptop-wont-charge",
    question: "Does the laptop work normally on battery power?",
    answers: [
      {
        id: "lc-a5-yes",
        nodeId: "node-battery-drains",
        text: "Yes, it works fine on battery",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-lc-5", points: 3 },
          { causeId: "cause-lc-1", points: 2 },
        ],
      },
      {
        id: "lc-a5-no",
        nodeId: "node-battery-drains",
        text: "No, it shuts down or behaves oddly",
        nextNodeId: null,
        causeScores: [
          { causeId: "cause-lc-3", points: 4 },
          { causeId: "cause-lc-5", points: 2 },
        ],
      },
    ],
  },
];

export const wifiCauses: Cause[] = [
  {
    id: "cause-wf-1",
    problemId: "prob-wifi-keeps-disconnecting",
    title: "Router Needs Restart",
    description: "The router may need a simple restart to clear temporary issues.",
    safetyLevel: "SAFE",
    recommendation:
      "Unplug the router for 30 seconds, then plug it back in. Wait 2 minutes for it to fully restart.",
    professionalHelp: false,
  },
  {
    id: "cause-wf-2",
    problemId: "prob-wifi-keeps-disconnecting",
    title: "Wi-Fi Driver Issue",
    description:
      "The Wi-Fi adapter driver on your device may be outdated or corrupted.",
    safetyLevel: "SAFE",
    recommendation:
      "Update or reinstall the Wi-Fi adapter driver from your device manufacturer's website.",
    professionalHelp: false,
  },
  {
    id: "cause-wf-3",
    problemId: "prob-wifi-keeps-disconnecting",
    title: "Channel Interference",
    description:
      "Too many Wi-Fi networks on the same channel causing interference.",
    safetyLevel: "SAFE",
    recommendation:
      "Access your router settings and change the Wi-Fi channel to a less congested one (try channel 1, 6, or 11 for 2.4GHz).",
    professionalHelp: false,
  },
  {
    id: "cause-wf-4",
    problemId: "prob-wifi-keeps-disconnecting",
    title: "Distance or Obstruction",
    description:
      "The device is too far from the router or there are thick walls blocking the signal.",
    safetyLevel: "SAFE",
    recommendation:
      "Move closer to the router or remove obstructions. Consider a Wi-Fi extender for large spaces.",
    professionalHelp: false,
  },
  {
    id: "cause-wf-5",
    problemId: "prob-wifi-keeps-disconnecting",
    title: "Faulty Router Hardware",
    description:
      "The router hardware may be failing or overheating.",
    safetyLevel: "SAFE",
    recommendation:
      "Check if the router feels hot. Ensure proper ventilation. If issues persist, the router may need replacement.",
    professionalHelp: false,
  },
];

export const wifiNodes: DiagnosticNode[] = [
  {
    id: "root",
    problemId: "prob-wifi-keeps-disconnecting",
    question: "Does this happen on all devices or just one device?",
    answers: [
      {
        id: "wf-a1-all",
        nodeId: "root",
        text: "All devices",
        nextNodeId: "node-all-devices",
        causeScores: [
          { causeId: "cause-wf-1", points: 3 },
          { causeId: "cause-wf-5", points: 2 },
        ],
      },
      {
        id: "wf-a1-one",
        nodeId: "root",
        text: "Just one device",
        nextNodeId: "node-one-device",
        causeScores: [
          { causeId: "cause-wf-2", points: 3 },
          { causeId: "cause-wf-4", points: 2 },
        ],
      },
    ],
  },
  {
    id: "node-all-devices",
    problemId: "prob-wifi-keeps-disconnecting",
    question: "Have you restarted the router recently?",
    answers: [
      {
        id: "wf-a2-no",
        nodeId: "node-all-devices",
        text: "No, not recently",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-wf-1", points: 4 }],
      },
      {
        id: "wf-a2-yes",
        nodeId: "node-all-devices",
        text: "Yes, but the problem continues",
        nextNodeId: "node-router-restarted",
        causeScores: [
          { causeId: "cause-wf-5", points: 3 },
          { causeId: "cause-wf-3", points: 2 },
        ],
      },
    ],
  },
  {
    id: "node-one-device",
    problemId: "prob-wifi-keeps-disconnecting",
    question: "Is the device close to the router?",
    answers: [
      {
        id: "wf-a3-yes",
        nodeId: "node-one-device",
        text: "Yes, same room",
        nextNodeId: "node-close-to-router",
        causeScores: [{ causeId: "cause-wf-2", points: 3 }],
      },
      {
        id: "wf-a3-no",
        nodeId: "node-one-device",
        text: "No, it's in another room or floor",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-wf-4", points: 4 }],
      },
    ],
  },
  {
    id: "node-router-restarted",
    problemId: "prob-wifi-keeps-disconnecting",
    question: "Is the router in a well-ventilated area?",
    answers: [
      {
        id: "wf-a4-yes",
        nodeId: "node-router-restarted",
        text: "Yes, it's not enclosed",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-wf-3", points: 3 }],
      },
      {
        id: "wf-a4-no",
        nodeId: "node-router-restarted",
        text: "No, it's in a cabinet or corner",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-wf-5", points: 4 }],
      },
    ],
  },
  {
    id: "node-close-to-router",
    problemId: "prob-wifi-keeps-disconnecting",
    question: "Have you updated the Wi-Fi driver recently?",
    answers: [
      {
        id: "wf-a5-no",
        nodeId: "node-close-to-router",
        text: "No",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-wf-2", points: 4 }],
      },
      {
        id: "wf-a5-yes",
        nodeId: "node-close-to-router",
        text: "Yes, it's up to date",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-wf-2", points: 2 }],
      },
    ],
  },
];

export const carCauses: Cause[] = [
  {
    id: "cause-cs-1",
    problemId: "prob-car-wont-start",
    title: "Dead Battery",
    description: "The car battery is depleted or no longer holds a charge.",
    safetyLevel: "SAFE",
    recommendation:
      "Try jump-starting the car. If it starts, let it run for 15-20 minutes. If the battery is old (3+ years), consider replacing it.",
    professionalHelp: false,
  },
  {
    id: "cause-cs-2",
    problemId: "prob-car-wont-start",
    title: "Faulty Starter Motor",
    description:
      "The starter motor that cranks the engine may be faulty.",
    safetyLevel: "HIGH",
    recommendation:
      "If you hear a clicking sound but the engine doesn't crank, the starter may need replacement. Contact a mechanic.",
    professionalHelp: true,
  },
  {
    id: "cause-cs-3",
    problemId: "prob-car-wont-start",
    title: "Fuel System Issue",
    description:
      "The car may be out of fuel or the fuel pump may not be working.",
    safetyLevel: "SAFE",
    recommendation:
      "Check the fuel gauge. If fuel is present but the car won't start, the fuel pump or fuel filter may need inspection.",
    professionalHelp: false,
  },
  {
    id: "cause-cs-4",
    problemId: "prob-car-wont-start",
    title: "Ignition Switch Problem",
    description:
      "The ignition switch may be faulty, preventing the car from starting.",
    safetyLevel: "HIGH",
    recommendation:
      "If dashboard lights come on but nothing happens when you turn the key, the ignition switch may need professional repair.",
    professionalHelp: true,
  },
  {
    id: "cause-cs-5",
    problemId: "prob-car-wont-start",
    title: "Corroded or Loose Battery Terminals",
    description:
      "Battery terminals may be corroded or not making proper contact.",
    safetyLevel: "CAUTION",
    recommendation:
      "Inspect the battery terminals for corrosion (white/green buildup). Clean with a wire brush and ensure connections are tight.",
    professionalHelp: false,
  },
];

export const carNodes: DiagnosticNode[] = [
  {
    id: "root",
    problemId: "prob-car-wont-start",
    question: "What happens when you turn the key (or push the start button)?",
    answers: [
      {
        id: "cs-a1-click",
        nodeId: "root",
        text: "I hear a clicking sound",
        nextNodeId: "node-clicking",
        causeScores: [
          { causeId: "cause-cs-1", points: 3 },
          { causeId: "cause-cs-2", points: 2 },
        ],
      },
      {
        id: "cs-a1-crank",
        nodeId: "root",
        text: "The engine cranks but doesn't start",
        nextNodeId: "node-cranking",
        causeScores: [
          { causeId: "cause-cs-3", points: 3 },
          { causeId: "cause-cs-1", points: 1 },
        ],
      },
      {
        id: "cs-a1-nothing",
        nodeId: "root",
        text: "Nothing happens at all",
        nextNodeId: "node-nothing",
        causeScores: [
          { causeId: "cause-cs-1", points: 3 },
          { causeId: "cause-cs-4", points: 2 },
        ],
      },
      {
        id: "cs-a1-lights",
        nodeId: "root",
        text: "Dashboard lights come on but engine doesn't crank",
        nextNodeId: "node-lights-no-crank",
        causeScores: [
          { causeId: "cause-cs-1", points: 2 },
          { causeId: "cause-cs-2", points: 3 },
        ],
      },
    ],
  },
  {
    id: "node-clicking",
    problemId: "prob-car-wont-start",
    question: "Do the dashboard lights dim when you try to start?",
    answers: [
      {
        id: "cs-a2-yes",
        nodeId: "node-clicking",
        text: "Yes, they dim significantly",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-cs-1", points: 4 }],
      },
      {
        id: "cs-a2-no",
        nodeId: "node-clicking",
        text: "No, they stay the same",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-cs-2", points: 4 }],
      },
    ],
  },
  {
    id: "node-cranking",
    problemId: "prob-car-wont-start",
    question: "When did you last fill up with fuel?",
    answers: [
      {
        id: "cs-a3-recent",
        nodeId: "node-cranking",
        text: "Recently, I have fuel",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-cs-3", points: 3 }],
      },
      {
        id: "cs-a3-ago",
        nodeId: "node-cranking",
        text: "It's been a while, I might be low",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-cs-3", points: 4 }],
      },
    ],
  },
  {
    id: "node-nothing",
    problemId: "prob-car-wont-start",
    question: "Do any lights or electronics work when you turn the key to 'on'?",
    answers: [
      {
        id: "cs-a4-yes",
        nodeId: "node-nothing",
        text: "Yes, everything works",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-cs-4", points: 4 }],
      },
      {
        id: "cs-a4-no",
        nodeId: "node-nothing",
        text: "No, nothing works",
        nextNodeId: "node-check-battery-visual",
        causeScores: [{ causeId: "cause-cs-1", points: 4 }],
      },
    ],
  },
  {
    id: "node-lights-no-crank",
    problemId: "prob-car-wont-start",
    question: "Is the transmission in Park (or Neutral for manual)?",
    answers: [
      {
        id: "cs-a5-yes",
        nodeId: "node-lights-no-crank",
        text: "Yes, it's in Park/Neutral",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-cs-2", points: 3 }],
      },
      {
        id: "cs-a5-no",
        nodeId: "node-lights-no-crank",
        text: "No, or I'm not sure",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-cs-4", points: 2 }],
      },
    ],
  },
  {
    id: "node-check-battery-visual",
    problemId: "prob-car-wont-start",
    question: "Do you see any corrosion (white/green buildup) on the battery terminals?",
    answers: [
      {
        id: "cs-a6-yes",
        nodeId: "node-check-battery-visual",
        text: "Yes, I see corrosion",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-cs-5", points: 4 }],
      },
      {
        id: "cs-a6-no",
        nodeId: "node-check-battery-visual",
        text: "No, they look clean",
        nextNodeId: null,
        causeScores: [{ causeId: "cause-cs-1", points: 4 }],
      },
    ],
  },
];
