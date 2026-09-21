import type { Problem, DiagnosticNode, Cause } from "@/lib/db/types";

export const homeProblems: Problem[] = [
  {
    id: "prob-leaking-faucet",
    categoryId: "cat-home",
    title: "Leaking Faucet",
    slug: "leaking-faucet",
    description: "Your faucet is dripping water continuously or leaks when turned on.",
    symptoms: ["Water dripping from faucet", "Puddle around sink base", "Faucet handle is wet", "Water stains under sink"],
    safetyLevel: "CAUTION",
    metaTitle: "Leaking Faucet - Fix & Diagnosis | Why Isn't It Working",
    metaDescription: "Find out why your faucet is leaking. DIY diagnostic and fix guide.",
  },
  {
    id: "prob-clogged-drain",
    categoryId: "cat-home",
    title: "Clogged Drain",
    slug: "clogged-drain",
    description: "Your sink, bathtub, or shower drain is slow or completely blocked.",
    symptoms: ["Water draining slowly", "Water backing up", "Gurgling sounds from drain", "Bad smell from drain"],
    safetyLevel: "SAFE",
    metaTitle: "Clogged Drain - Fix & Diagnosis | Why Isn't It Working",
    metaDescription: "Diagnose why your drain is clogged. Step-by-step unclogging guide.",
  },
  {
    id: "prob-door-wont-lock",
    categoryId: "cat-home",
    title: "Door Won't Lock",
    slug: "door-wont-lock",
    description: "Your door lock is jammed, won't turn, or the door won't stay closed.",
    symptoms: ["Key won't turn in lock", "Lock feels stuck", "Door won't latch", "Lock spins freely"],
    safetyLevel: "CAUTION",
    metaTitle: "Door Won't Lock - Fix & Diagnosis | Why Isn't It Working",
    metaDescription: "Find out why your door won't lock. Diagnostic tool and solutions.",
  },
  {
    id: "prob-circuit-breaker-tripping",
    categoryId: "cat-home",
    title: "Circuit Breaker Tripping",
    slug: "circuit-breaker-tripping",
    description: "Your circuit breaker keeps tripping, cutting power to parts of your home.",
    symptoms: ["Power goes out suddenly", "Breaker switch in middle position", "Multiple outlets not working", "Breaker trips immediately after reset"],
    safetyLevel: "HIGH",
    metaTitle: "Circuit Breaker Tripping - Diagnosis | Why Isn't It Working",
    metaDescription: "Diagnose why your circuit breaker keeps tripping. Safety-first approach.",
  },
  {
    id: "prob-toilet-running-leaking",
    categoryId: "cat-home",
    title: "Toilet Running or Leaking",
    slug: "toilet-running-leaking",
    description: "Your toilet keeps running, won't stop filling, or leaks around the base.",
    symptoms: ["Toilet runs constantly", "Water around toilet base", "Hissing sound from toilet", "Water level too high or low"],
    safetyLevel: "SAFE",
    metaTitle: "Toilet Running/Leaking - Fix | Why Isn't It Working",
    metaDescription: "Find out why your toilet is running or leaking. Easy diagnostic guide.",
  },
];

export const homeCauses: Cause[] = [
  // Leaking Faucet
  { id: "cause-lf-1", problemId: "prob-leaking-faucet", title: "Worn Out Washer", description: "The rubber washer inside the faucet has worn out and no longer seals properly.", safetyLevel: "SAFE", recommendation: "Turn off water supply, disassemble faucet, and replace the washer. Parts are inexpensive at hardware stores.", professionalHelp: false },
  { id: "cause-lf-2", problemId: "prob-leaking-faucet", title: "Loose O-Ring", description: "The O-ring around the valve stem has become loose or damaged.", safetyLevel: "SAFE", recommendation: "Tighten or replace the O-ring. Turn off water supply before working on the faucet.", professionalHelp: false },
  { id: "cause-lf-3", problemId: "prob-leaking-faucet", title: "Corroded Valve Seat", description: "The valve seat has corroded, preventing a tight seal.", safetyLevel: "CAUTION", recommendation: "The valve seat may need professional resurfacing or replacement.", professionalHelp: true },
  { id: "cause-lf-4", problemId: "prob-leaking-faucet", title: "Cartridge Issue", description: "The cartridge inside the faucet is damaged or worn.", safetyLevel: "SAFE", recommendation: "Replace the cartridge. Match the brand and model when buying a replacement.", professionalHelp: false },
  { id: "cause-lf-5", problemId: "prob-leaking-faucet", title: "High Water Pressure", description: "Excessively high water pressure is causing the faucet to leak.", safetyLevel: "CAUTION", recommendation: "Have a plumber check your water pressure and install a pressure regulator if needed.", professionalHelp: true },

  // Clogged Drain
  { id: "cause-cd-1", problemId: "prob-clogged-drain", title: "Hair Buildup", description: "Hair has accumulated in the drain, blocking water flow.", safetyLevel: "SAFE", recommendation: "Use a drain snake or remove the drain cover to pull out the hair. Baking soda and vinegar can help dissolve buildup.", professionalHelp: false },
  { id: "cause-cd-2", problemId: "prob-clogged-drain", title: "Grease Buildup", description: "Cooking grease has solidified in the drain pipes.", safetyLevel: "SAFE", recommendation: "Pour boiling water down the drain. Use a grease-cutting drain cleaner. Avoid pouring grease down drains in the future.", professionalHelp: false },
  { id: "cause-cd-3", problemId: "prob-clogged-drain", title: "Foreign Object", description: "An object is stuck in the drain pipe.", safetyLevel: "CAUTION", recommendation: "Try using a plunger or drain snake. If the object is deep, a plumber may need to use specialized tools.", professionalHelp: false },
  { id: "cause-cd-4", problemId: "prob-clogged-drain", title: "Main Sewer Line Blockage", description: "The main sewer line is blocked, affecting multiple drains.", safetyLevel: "HIGH", recommendation: "This requires professional plumbing service. Multiple drains being slow is a sign of a main line issue.", professionalHelp: true },
  { id: "cause-cd-5", problemId: "prob-clogged-drain", title: "Pipe Damage", description: "The drain pipe may be cracked, collapsed, or damaged.", safetyLevel: "HIGH", recommendation: "Professional inspection needed. A plumber can use a camera to inspect the pipe.", professionalHelp: true },

  // Door Won't Lock
  { id: "cause-dl-1", problemId: "prob-door-wont-lock", title: "Misaligned Strike Plate", description: "The strike plate on the door frame is not aligned with the lock bolt.", safetyLevel: "SAFE", recommendation: "Check if the door is hanging properly. Adjust the strike plate position or enlarge the hole slightly.", professionalHelp: false },
  { id: "cause-dl-2", problemId: "prob-door-wont-lock", title: "Key Worn Out", description: "The key has worn down and no longer operates the lock properly.", safetyLevel: "SAFE", recommendation: "Try a spare key. If it works, get a new copy made from the spare.", professionalHelp: false },
  { id: "cause-dl-3", problemId: "prob-door-wont-lock", title: "Lock Mechanism Jammed", description: "The internal lock mechanism is jammed with debris or is rusty.", safetyLevel: "CAUTION", recommendation: "Try lubricating the lock with graphite powder or WD-40. Insert the key and gently work it back and forth.", professionalHelp: false },
  { id: "cause-dl-4", problemId: "prob-door-wont-lock", title: "Door Warped", description: "The door has warped due to humidity or age, preventing proper alignment.", safetyLevel: "CAUTION", recommendation: "Check if the door rubs against the frame. Planing or shimming may be needed.", professionalHelp: false },
  { id: "cause-dl-5", problemId: "prob-door-wont-lock", title: "Broken Lock Assembly", description: "The lock mechanism itself is broken and needs replacement.", safetyLevel: "CAUTION", recommendation: "Replace the lock assembly. Choose a quality lock for security.", professionalHelp: false },

  // Circuit Breaker Tripping
  { id: "cause-cb-1", problemId: "prob-circuit-breaker-tripping", title: "Overloaded Circuit", description: "Too many devices are drawing power from the same circuit.", safetyLevel: "SAFE", recommendation: "Unplug some devices and try resetting the breaker. Distribute high-power devices across different circuits.", professionalHelp: false },
  { id: "cause-cb-2", problemId: "prob-circuit-breaker-tripping", title: "Short Circuit", description: "A short circuit in a device or wiring is causing the breaker to trip.", safetyLevel: "HIGH", recommendation: "Unplug all devices on that circuit. Reset the breaker. Plug devices back in one at a time to find the culprit.", professionalHelp: true },
  { id: "cause-cb-3", problemId: "prob-circuit-breaker-tripping", title: "Ground Fault", description: "A ground fault is occurring, which is a safety hazard.", safetyLevel: "STOP", recommendation: "Do not reset the breaker repeatedly. Contact a licensed electrician immediately.", professionalHelp: true },
  { id: "cause-cb-4", problemId: "prob-circuit-breaker-tripping", title: "Faulty Breaker", description: "The circuit breaker itself may be defective.", safetyLevel: "HIGH", recommendation: "A licensed electrician should test and replace the breaker if needed.", professionalHelp: true },
  { id: "cause-cb-5", problemId: "prob-circuit-breaker-tripping", title: "Old Wiring", description: "The home's wiring may be outdated and unable to handle modern electrical loads.", safetyLevel: "STOP", recommendation: "Have a licensed electrician inspect your wiring. Old wiring can be a fire hazard.", professionalHelp: true },

  // Toilet Running/Leaking
  { id: "cause-tr-1", problemId: "prob-toilet-running-leaking", title: "Flapper Valve Issue", description: "The flapper valve inside the tank is not sealing properly.", safetyLevel: "SAFE", recommendation: "Replace the flapper valve. It's an inexpensive and easy DIY fix.", professionalHelp: false },
  { id: "cause-tr-2", problemId: "prob-toilet-running-leaking", title: "Fill Valve Malfunction", description: "The fill valve is not shutting off when the tank is full.", safetyLevel: "SAFE", recommendation: "Adjust or replace the fill valve. Check the float mechanism.", professionalHelp: false },
  { id: "cause-tr-3", problemId: "prob-toilet-running-leaking", title: "Wax Ring Seal Broken", description: "The wax ring under the toilet has deteriorated, causing leaks at the base.", safetyLevel: "CAUTION", recommendation: "The toilet needs to be removed and the wax ring replaced. This is a moderate DIY project.", professionalHelp: false },
  { id: "cause-tr-4", problemId: "prob-toilet-running-leaking", title: "Cracked Tank or Bowl", description: "The toilet tank or bowl has a crack causing water to leak.", safetyLevel: "CAUTION", recommendation: "Small cracks can be temporarily sealed, but replacement is usually needed.", professionalHelp: false },
  { id: "cause-tr-5", problemId: "prob-toilet-running-leaking", title: "Water Supply Line Leak", description: "The line connecting the toilet to the wall is leaking.", safetyLevel: "SAFE", recommendation: "Tighten the connection or replace the supply line. Turn off the water valve before working.", professionalHelp: false },
];

export const homeNodes: DiagnosticNode[] = [
  // Leaking Faucet
  {
    id: "root", problemId: "prob-leaking-faucet",
    question: "Where is the water leaking from?",
    answers: [
      { id: "lf-a1-spout", nodeId: "root", text: "From the spout (where water comes out)", nextNodeId: "node-spout-leak", causeScores: [{ causeId: "cause-lf-1", points: 3 }, { causeId: "cause-lf-4", points: 2 }] },
      { id: "lf-a1-base", nodeId: "root", text: "From the base of the faucet", nextNodeId: "node-base-leak", causeScores: [{ causeId: "cause-lf-2", points: 3 }] },
      { id: "lf-a1-handle", nodeId: "root", text: "From around the handle", nextNodeId: null, causeScores: [{ causeId: "cause-lf-2", points: 3 }, { causeId: "cause-lf-4", points: 2 }] },
    ],
  },
  {
    id: "node-spout-leak", problemId: "prob-leaking-faucet",
    question: "Does it leak even when the faucet is fully off?",
    answers: [
      { id: "lf-a2-yes", nodeId: "node-spout-leak", text: "Yes, it drips constantly", nextNodeId: null, causeScores: [{ causeId: "cause-lf-1", points: 4 }] },
      { id: "lf-a2-no", nodeId: "node-spout-leak", text: "Only when I turn it on", nextNodeId: null, causeScores: [{ causeId: "cause-lf-3", points: 3 }] },
    ],
  },
  {
    id: "node-base-leak", problemId: "prob-leaking-faucet",
    question: "Is the leak getting worse over time?",
    answers: [
      { id: "lf-a3-yes", nodeId: "node-base-leak", text: "Yes, it's getting worse", nextNodeId: null, causeScores: [{ causeId: "cause-lf-2", points: 4 }] },
      { id: "lf-a3-no", nodeId: "node-base-leak", text: "It's about the same", nextNodeId: null, causeScores: [{ causeId: "cause-lf-4", points: 3 }] },
    ],
  },

  // Clogged Drain
  {
    id: "root", problemId: "prob-clogged-drain",
    question: "Which drain is affected?",
    answers: [
      { id: "cd-a1-kitchen", nodeId: "root", text: "Kitchen sink", nextNodeId: "node-kitchen-drain", causeScores: [{ causeId: "cause-cd-2", points: 3 }] },
      { id: "cd-a1-bathroom", nodeId: "root", text: "Bathroom sink or shower", nextNodeId: "node-bathroom-drain", causeScores: [{ causeId: "cause-cd-1", points: 3 }] },
      { id: "cd-a1-toilet", nodeId: "root", text: "Toilet", nextNodeId: null, causeScores: [{ causeId: "cause-cd-3", points: 2 }] },
      { id: "cd-a1-multiple", nodeId: "root", text: "Multiple drains in the house", nextNodeId: null, causeScores: [{ causeId: "cause-cd-4", points: 4 }] },
    ],
  },
  {
    id: "node-kitchen-drain", problemId: "prob-clogged-drain",
    question: "How long has the drain been slow?",
    answers: [
      { id: "cd-a2-recent", nodeId: "node-kitchen-drain", text: "Just started recently", nextNodeId: null, causeScores: [{ causeId: "cause-cd-2", points: 4 }] },
      { id: "cd-a2-long", nodeId: "node-kitchen-drain", text: "It's been getting worse over time", nextNodeId: null, causeScores: [{ causeId: "cause-cd-2", points: 3 }, { causeId: "cause-cd-4", points: 2 }] },
    ],
  },
  {
    id: "node-bathroom-drain", problemId: "prob-clogged-drain",
    question: "Do you see hair around the drain opening?",
    answers: [
      { id: "cd-a3-yes", nodeId: "node-bathroom-drain", text: "Yes, there's visible hair", nextNodeId: null, causeScores: [{ causeId: "cause-cd-1", points: 4 }] },
      { id: "cd-a3-no", nodeId: "node-bathroom-drain", text: "No, it looks clear", nextNodeId: null, causeScores: [{ causeId: "cause-cd-3", points: 3 }] },
    ],
  },

  // Door Won't Lock
  {
    id: "root", problemId: "prob-door-wont-lock",
    question: "What's happening when you try to lock the door?",
    answers: [
      { id: "dl-a1-key", nodeId: "root", text: "The key won't turn", nextNodeId: "node-key-wont-turn", causeScores: [{ causeId: "cause-dl-2", points: 2 }, { causeId: "cause-dl-3", points: 3 }] },
      { id: "dl-a1-latch", nodeId: "root", text: "The latch won't engage", nextNodeId: "node-latch-issue", causeScores: [{ causeId: "cause-dl-1", points: 3 }] },
      { id: "dl-a1-spin", nodeId: "root", text: "The lock spins freely", nextNodeId: null, causeScores: [{ causeId: "cause-dl-5", points: 4 }] },
    ],
  },
  {
    id: "node-key-wont-turn", problemId: "prob-door-wont-lock",
    question: "Does the key work on other locks?",
    answers: [
      { id: "dl-a2-yes", nodeId: "node-key-wont-turn", text: "Yes, other locks work fine", nextNodeId: null, causeScores: [{ causeId: "cause-dl-3", points: 3 }, { causeId: "cause-dl-4", points: 2 }] },
      { id: "dl-a2-no", nodeId: "node-key-wont-turn", text: "No, the key is worn", nextNodeId: null, causeScores: [{ causeId: "cause-dl-2", points: 4 }] },
    ],
  },
  {
    id: "node-latch-issue", problemId: "prob-door-wont-lock",
    question: "Does the door close properly against the frame?",
    answers: [
      { id: "dl-a3-yes", nodeId: "node-latch-issue", text: "Yes, it closes flush", nextNodeId: null, causeScores: [{ causeId: "cause-dl-1", points: 4 }] },
      { id: "dl-a3-no", nodeId: "node-latch-issue", text: "No, it's crooked or doesn't close fully", nextNodeId: null, causeScores: [{ causeId: "cause-dl-4", points: 4 }] },
    ],
  },

  // Circuit Breaker Tripping
  {
    id: "root", problemId: "prob-circuit-breaker-tripping",
    question: "When does the breaker trip?",
    answers: [
      { id: "cb-a1-loads", nodeId: "root", text: "When I turn on multiple appliances", nextNodeId: null, causeScores: [{ causeId: "cause-cb-1", points: 4 }] },
      { id: "cb-a1-specific", nodeId: "root", text: "When I use a specific appliance", nextNodeId: "node-specific-appliance", causeScores: [{ causeId: "cause-cb-2", points: 3 }] },
      { id: "cb-a1-random", nodeId: "root", text: "Randomly, without reason", nextNodeId: "node-random-trip", causeScores: [{ causeId: "cause-cb-3", points: 2 }, { causeId: "cause-cb-4", points: 2 }] },
      { id: "cb-a1-reset", nodeId: "root", text: "Immediately when I try to reset it", nextNodeId: null, causeScores: [{ causeId: "cause-cb-3", points: 4 }] },
    ],
  },
  {
    id: "node-specific-appliance", problemId: "prob-circuit-breaker-tripping",
    question: "What appliance causes the trip?",
    answers: [
      { id: "cb-a2-heavy", nodeId: "node-specific-appliance", text: "High-power device (heater, dryer, AC)", nextNodeId: null, causeScores: [{ causeId: "cause-cb-1", points: 3 }, { causeId: "cause-cb-2", points: 2 }] },
      { id: "cb-a2-small", nodeId: "node-specific-appliance", text: "Small device (lamp, charger)", nextNodeId: null, causeScores: [{ causeId: "cause-cb-2", points: 4 }] },
    ],
  },
  {
    id: "node-random-trip", problemId: "prob-circuit-breaker-tripping",
    question: "How old is the home's wiring?",
    answers: [
      { id: "cb-a3-new", nodeId: "node-random-trip", text: "Less than 20 years", nextNodeId: null, causeScores: [{ causeId: "cause-cb-4", points: 3 }] },
      { id: "cb-a3-old", nodeId: "node-random-trip", text: "More than 30 years", nextNodeId: null, causeScores: [{ causeId: "cause-cb-5", points: 4 }] },
    ],
  },

  // Toilet Running/Leaking
  {
    id: "root", problemId: "prob-toilet-running-leaking",
    question: "What's the issue with the toilet?",
    answers: [
      { id: "tr-a1-run", nodeId: "root", text: "It keeps running (water never stops)", nextNodeId: "node-toilet-running", causeScores: [{ causeId: "cause-tr-1", points: 3 }] },
      { id: "tr-a1-leak", nodeId: "root", text: "Water pooling around the base", nextNodeId: "node-toilet-leak", causeScores: [{ causeId: "cause-tr-3", points: 3 }] },
      { id: "tr-a1-sound", nodeId: "root", text: "Hissing or running sound from tank", nextNodeId: null, causeScores: [{ causeId: "cause-tr-2", points: 4 }] },
    ],
  },
  {
    id: "node-toilet-running", problemId: "prob-toilet-running-leaking",
    question: "Can you see water running into the bowl?",
    answers: [
      { id: "tr-a2-yes", nodeId: "node-toilet-running", text: "Yes, I can see water flowing", nextNodeId: null, causeScores: [{ causeId: "cause-tr-1", points: 4 }] },
      { id: "tr-a2-no", nodeId: "node-toilet-running", text: "No, but I hear the tank filling", nextNodeId: null, causeScores: [{ causeId: "cause-tr-2", points: 4 }] },
    ],
  },
  {
    id: "node-toilet-leak", problemId: "prob-toilet-running-leaking",
    question: "Does the leak happen only when flushing?",
    answers: [
      { id: "tr-a3-yes", nodeId: "node-toilet-leak", text: "Yes, only when I flush", nextNodeId: null, causeScores: [{ causeId: "cause-tr-3", points: 4 }] },
      { id: "tr-a3-no", nodeId: "node-toilet-leak", text: "No, it leaks all the time", nextNodeId: null, causeScores: [{ causeId: "cause-tr-4", points: 3 }, { causeId: "cause-tr-5", points: 2 }] },
    ],
  },
];
