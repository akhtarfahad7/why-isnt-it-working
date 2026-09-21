import type { Problem, DiagnosticNode, Cause } from "@/lib/db/types";

export const moreElectronicsProblems: Problem[] = [
  {
    id: "prob-phone-screen-not-working",
    categoryId: "cat-electronics",
    title: "Phone Screen Not Working",
    slug: "phone-screen-not-working",
    description: "Your phone screen is unresponsive, black, cracked, or has display issues.",
    symptoms: ["Screen doesn't respond to touch", "Screen is black", "Display has lines or artifacts", "Screen flickering"],
    safetyLevel: "CAUTION",
    metaTitle: "Phone Screen Not Working - Fix | Why Isn't It Working",
    metaDescription: "Diagnose why your phone screen is not working. Find the cause and get solutions.",
  },
  {
    id: "prob-tablet-not-turning-on",
    categoryId: "cat-electronics",
    title: "Tablet Not Turning On",
    slug: "tablet-not-turning-on",
    description: "Your tablet won't turn on, shows a black screen, or is completely unresponsive.",
    symptoms: ["Tablet won't power on", "Black screen when pressing power", "Tablet freezes on logo", "No response at all"],
    safetyLevel: "SAFE",
    metaTitle: "Tablet Not Turning On - Fix | Why Isn't It Working",
    metaDescription: "Find out why your tablet won't turn on. Diagnostic tool and solutions.",
  },
  {
    id: "prob-monitor-no-display",
    categoryId: "cat-electronics",
    title: "Monitor No Display",
    slug: "monitor-no-display",
    description: "Your monitor is on but shows no signal, black screen, or no image.",
    symptoms: ["Monitor says no signal", "Monitor is on but screen is black", "Display flickers on and off", "Wrong colors on screen"],
    safetyLevel: "SAFE",
    metaTitle: "Monitor No Display - Fix | Why Isn't It Working",
    metaDescription: "Diagnose why your monitor has no display. Troubleshooting steps inside.",
  },
  {
    id: "prob-printer-not-printing",
    categoryId: "cat-electronics",
    title: "Printer Not Printing",
    slug: "printer-not-printing",
    description: "Your printer won't print, shows error messages, or produces blank pages.",
    symptoms: ["Printer doesn't respond to print commands", "Print jobs stuck in queue", "Pages come out blank", "Printer shows error light"],
    safetyLevel: "SAFE",
    metaTitle: "Printer Not Printing - Fix | Why Isn't It Working",
    metaDescription: "Find out why your printer is not printing. Step-by-step diagnostic guide.",
  },
  {
    id: "prob-bluetooth-not-connecting",
    categoryId: "cat-electronics",
    title: "Bluetooth Not Connecting",
    slug: "bluetooth-not-connecting",
    description: "Your device won't pair with Bluetooth devices, keeps disconnecting, or can't find devices.",
    symptoms: ["Bluetooth won't pair", "Device not found", "Connection keeps dropping", "Audio cuts out on Bluetooth"],
    safetyLevel: "SAFE",
    metaTitle: "Bluetooth Not Connecting - Fix | Why Isn't It Working",
    metaDescription: "Diagnose Bluetooth connection problems. Find the cause and fix it.",
  },
];

export const moreElectronicsCauses: Cause[] = [
  // Phone Screen
  { id: "cause-ps-1", problemId: "prob-phone-screen-not-working", title: "Screen Protector Interference", description: "A thick or damaged screen protector may interfere with touch sensitivity.", safetyLevel: "SAFE", recommendation: "Remove the screen protector and test the screen. Replace if damaged.", professionalHelp: false },
  { id: "cause-ps-2", problemId: "prob-phone-screen-not-working", title: "Software Glitch", description: "A software bug may be causing the screen to freeze or become unresponsive.", safetyLevel: "SAFE", recommendation: "Force restart your phone. If that doesn't work, try booting into safe mode.", professionalHelp: false },
  { id: "cause-ps-3", problemId: "prob-phone-screen-not-working", title: "Loose Display Cable", description: "The ribbon cable connecting the screen to the motherboard may be loose.", safetyLevel: "HIGH", recommendation: "This requires professional repair. Do not attempt to open the phone yourself.", professionalHelp: true },
  { id: "cause-ps-4", problemId: "prob-phone-screen-not-working", title: "Damaged LCD/OLED Panel", description: "The display panel itself may be physically damaged or defective.", safetyLevel: "HIGH", recommendation: "The screen needs professional replacement. Contact your phone manufacturer.", professionalHelp: true },
  { id: "cause-ps-5", problemId: "prob-phone-screen-not-working", title: "Water Damage", description: "Moisture inside the phone may be affecting the display connections.", safetyLevel: "CAUTION", recommendation: "Turn off the phone immediately. Place it in a dry area with good airflow. Do not use rice.", professionalHelp: false },

  // Tablet Not Turning On
  { id: "cause-tn-1", problemId: "prob-tablet-not-turning-on", title: "Completely Drained Battery", description: "The battery is fully depleted and needs time to charge before turning on.", safetyLevel: "SAFE", recommendation: "Connect the charger and wait 15-30 minutes before trying to turn on.", professionalHelp: false },
  { id: "cause-tn-2", problemId: "prob-tablet-not-turning-on", title: "Faulty Charger", description: "The charger or cable may not be providing power to the tablet.", safetyLevel: "SAFE", recommendation: "Try a different charger and cable. Check for damage on the charging port.", professionalHelp: false },
  { id: "cause-tn-3", problemId: "prob-tablet-not-turning-on", title: "Power Button Failure", description: "The power button mechanism may be stuck or broken.", safetyLevel: "CAUTION", recommendation: "Try connecting to charger and holding the power button for 30 seconds. If no response, contact repair service.", professionalHelp: false },
  { id: "cause-tn-4", problemId: "prob-tablet-not-turning-on", title: "Software Crash", description: "The tablet may be stuck in a crashed state.", safetyLevel: "SAFE", recommendation: "Try a force restart: hold power button + volume down for 10-15 seconds.", professionalHelp: false },
  { id: "cause-tn-5", problemId: "prob-tablet-not-turning-on", title: "Motherboard Failure", description: "The main circuit board may have failed.", safetyLevel: "HIGH", recommendation: "This requires professional diagnosis. Contact the manufacturer or repair shop.", professionalHelp: true },

  // Monitor No Display
  { id: "cause-md-1", problemId: "prob-monitor-no-display", title: "Loose Cable Connection", description: "The video cable (HDMI, DisplayPort, VGA) may be loose or disconnected.", safetyLevel: "SAFE", recommendation: "Unplug and firmly reconnect the video cable at both ends.", professionalHelp: false },
  { id: "cause-md-2", problemId: "prob-monitor-no-display", title: "Wrong Input Source", description: "The monitor may be set to the wrong input source.", safetyLevel: "SAFE", recommendation: "Use the monitor's menu buttons to select the correct input (HDMI, DisplayPort, etc.).", professionalHelp: false },
  { id: "cause-md-3", problemId: "prob-monitor-no-display", title: "Faulty Video Cable", description: "The video cable itself may be damaged.", safetyLevel: "SAFE", recommendation: "Try a different video cable. Check for bent pins or damage.", professionalHelp: false },
  { id: "cause-md-4", problemId: "prob-monitor-no-display", title: "Graphics Card Issue", description: "The computer's graphics card may not be functioning properly.", safetyLevel: "CAUTION", recommendation: "Try connecting the monitor to a different device. If it works, the issue is with your computer's graphics.", professionalHelp: false },
  { id: "cause-md-5", problemId: "prob-monitor-no-display", title: "Monitor Hardware Failure", description: "The monitor's internal components may have failed.", safetyLevel: "HIGH", recommendation: "If the monitor is under warranty, contact the manufacturer. Otherwise, consider professional repair.", professionalHelp: true },

  // Printer Not Printing
  { id: "cause-pp-1", problemId: "prob-printer-not-printing", title: "Paper Jam", description: "There may be paper stuck inside the printer.", safetyLevel: "SAFE", recommendation: "Open the printer and carefully remove any jammed paper. Check all access points.", professionalHelp: false },
  { id: "cause-pp-2", problemId: "prob-printer-not-printing", title: "Low or Empty Ink/Toner", description: "The printer may be out of ink or toner.", safetyLevel: "SAFE", recommendation: "Check ink/toner levels through the printer software or control panel.", professionalHelp: false },
  { id: "cause-pp-3", problemId: "prob-printer-not-printing", title: "Print Queue Stuck", description: "Print jobs may be stuck in the queue, blocking new prints.", safetyLevel: "SAFE", recommendation: "Clear the print queue from your computer's printer settings. Cancel all pending jobs.", professionalHelp: false },
  { id: "cause-pp-4", problemId: "prob-printer-not-printing", title: "Connection Issue", description: "The printer may not be properly connected to the computer or network.", safetyLevel: "SAFE", recommendation: "Check USB cable or Wi-Fi connection. Restart the printer and computer.", professionalHelp: false },
  { id: "cause-pp-5", problemId: "prob-printer-not-printing", title: "Driver Problem", description: "The printer driver may be corrupted or outdated.", safetyLevel: "SAFE", recommendation: "Reinstall or update the printer driver from the manufacturer's website.", professionalHelp: false },

  // Bluetooth Not Connecting
  { id: "cause-bt-1", problemId: "prob-bluetooth-not-connecting", title: "Device Not in Pairing Mode", description: "The Bluetooth device may not be in pairing mode.", safetyLevel: "SAFE", recommendation: "Check the device's manual to ensure it's in pairing mode. Usually involves holding a button.", professionalHelp: false },
  { id: "cause-bt-2", problemId: "prob-bluetooth-not-connecting", title: "Too Many Connected Devices", description: "Your device may have reached the maximum number of Bluetooth connections.", safetyLevel: "SAFE", recommendation: "Disconnect other Bluetooth devices and try again.", professionalHelp: false },
  { id: "cause-bt-3", problemId: "prob-bluetooth-not-connecting", title: "Bluetooth Driver Issue", description: "The Bluetooth driver on your device may need updating.", safetyLevel: "SAFE", recommendation: "Update Bluetooth drivers from device manager or manufacturer website.", professionalHelp: false },
  { id: "cause-bt-4", problemId: "prob-bluetooth-not-connecting", title: "Distance Too Far", description: "The devices may be too far apart for a stable connection.", safetyLevel: "SAFE", recommendation: "Move the devices closer together, ideally within 3 feet (1 meter).", professionalHelp: false },
  { id: "cause-bt-5", problemId: "prob-bluetooth-not-connecting", title: "Interference from Other Devices", description: "Other wireless devices may be causing interference.", safetyLevel: "SAFE", recommendation: "Move away from Wi-Fi routers, microwaves, and other Bluetooth devices.", professionalHelp: false },
];

export const moreElectronicsNodes: DiagnosticNode[] = [
  // Phone Screen nodes
  {
    id: "root", problemId: "prob-phone-screen-not-working",
    question: "What's happening with your phone screen?",
    answers: [
      { id: "ps-a1-touch", nodeId: "root", text: "It's on but doesn't respond to touch", nextNodeId: "node-touch-issue", causeScores: [{ causeId: "cause-ps-1", points: 3 }, { causeId: "cause-ps-2", points: 2 }] },
      { id: "ps-a1-black", nodeId: "root", text: "It's completely black/off", nextNodeId: "node-black-screen", causeScores: [{ causeId: "cause-ps-3", points: 2 }, { causeId: "cause-ps-4", points: 3 }] },
      { id: "ps-a1-lines", nodeId: "root", text: "I see lines, artifacts, or weird colors", nextNodeId: null, causeScores: [{ causeId: "cause-ps-4", points: 4 }] },
    ],
  },
  {
    id: "node-touch-issue", problemId: "prob-phone-screen-not-working",
    question: "Does the screen respond after a force restart?",
    answers: [
      { id: "ps-a2-yes", nodeId: "node-touch-issue", text: "Yes, it works now", nextNodeId: null, causeScores: [{ causeId: "cause-ps-2", points: 4 }] },
      { id: "ps-a2-no", nodeId: "node-touch-issue", text: "No, still unresponsive", nextNodeId: null, causeScores: [{ causeId: "cause-ps-3", points: 3 }, { causeId: "cause-ps-4", points: 3 }] },
    ],
  },
  {
    id: "node-black-screen", problemId: "prob-phone-screen-not-working",
    question: "Does the phone vibrate or make sounds when you press the power button?",
    answers: [
      { id: "ps-a3-yes", nodeId: "node-black-screen", text: "Yes, it vibrates or makes sounds", nextNodeId: null, causeScores: [{ causeId: "cause-ps-4", points: 4 }] },
      { id: "ps-a3-no", nodeId: "node-black-screen", text: "No, nothing happens", nextNodeId: null, causeScores: [{ causeId: "cause-ps-3", points: 2 }, { causeId: "cause-ps-5", points: 2 }] },
    ],
  },

  // Tablet Not Turning On nodes
  {
    id: "root", problemId: "prob-tablet-not-turning-on",
    question: "Have you tried charging the tablet?",
    answers: [
      { id: "tn-a1-yes", nodeId: "root", text: "Yes, but it still won't turn on", nextNodeId: "node-charged-not-on", causeScores: [{ causeId: "cause-tn-2", points: 2 }, { causeId: "cause-tn-3", points: 2 }] },
      { id: "tn-a1-no", nodeId: "root", text: "No, the battery was low", nextNodeId: null, causeScores: [{ causeId: "cause-tn-1", points: 4 }] },
      { id: "tn-a1-charging", nodeId: "root", text: "Yes, and it shows charging but won't turn on", nextNodeId: null, causeScores: [{ causeId: "cause-tn-4", points: 3 }] },
    ],
  },
  {
    id: "node-charged-not-on", problemId: "prob-tablet-not-turning-on",
    question: "Does the power button feel stuck or click normally?",
    answers: [
      { id: "tn-a2-normal", nodeId: "node-charged-not-on", text: "It clicks normally", nextNodeId: null, causeScores: [{ causeId: "cause-tn-4", points: 3 }, { causeId: "cause-tn-5", points: 2 }] },
      { id: "tn-a2-stuck", nodeId: "node-charged-not-on", text: "It feels stuck or doesn't click", nextNodeId: null, causeScores: [{ causeId: "cause-tn-3", points: 4 }] },
    ],
  },

  // Monitor No Display nodes
  {
    id: "root", problemId: "prob-monitor-no-display",
    question: "Is the monitor's power light on?",
    answers: [
      { id: "md-a1-on", nodeId: "root", text: "Yes, it's on (green or blue)", nextNodeId: "node-power-on", causeScores: [{ causeId: "cause-md-1", points: 2 }] },
      { id: "md-a1-off", nodeId: "root", text: "No, it's off or flashing", nextNodeId: null, causeScores: [{ causeId: "cause-md-5", points: 3 }] },
      { id: "md-a1-amber", nodeId: "root", text: "It's amber/orange", nextNodeId: null, causeScores: [{ causeId: "cause-md-1", points: 3 }] },
    ],
  },
  {
    id: "node-power-on", problemId: "prob-monitor-no-display",
    question: "What does the monitor screen show?",
    answers: [
      { id: "md-a2-no-signal", nodeId: "node-power-on", text: "No signal message", nextNodeId: null, causeScores: [{ causeId: "cause-md-1", points: 3 }, { causeId: "cause-md-2", points: 3 }] },
      { id: "md-a2-black", nodeId: "node-power-on", text: "Completely black", nextNodeId: null, causeScores: [{ causeId: "cause-md-3", points: 3 }, { causeId: "cause-md-5", points: 2 }] },
      { id: "md-a2-flicker", nodeId: "node-power-on", text: "Flickering or wrong colors", nextNodeId: null, causeScores: [{ causeId: "cause-md-4", points: 3 }] },
    ],
  },

  // Printer Not Printing nodes
  {
    id: "root", problemId: "prob-printer-not-printing",
    question: "What happens when you try to print?",
    answers: [
      { id: "pp-a1-nothing", nodeId: "root", text: "Nothing happens at all", nextNodeId: "node-nothing", causeScores: [{ causeId: "cause-pp-4", points: 3 }] },
      { id: "pp-a1-error", nodeId: "root", text: "I get an error message", nextNodeId: "node-error", causeScores: [{ causeId: "cause-pp-1", points: 2 }] },
      { id: "pp-a1-blank", nodeId: "root", text: "It prints blank pages", nextNodeId: null, causeScores: [{ causeId: "cause-pp-2", points: 4 }] },
      { id: "pp-a1-queue", nodeId: "root", text: "Print jobs are stuck in queue", nextNodeId: null, causeScores: [{ causeId: "cause-pp-3", points: 4 }] },
    ],
  },
  {
    id: "node-nothing", problemId: "prob-printer-not-printing",
    question: "Is the printer turned on and connected?",
    answers: [
      { id: "pp-a2-yes", nodeId: "node-nothing", text: "Yes, it's on and connected", nextNodeId: null, causeScores: [{ causeId: "cause-pp-5", points: 3 }, { causeId: "cause-pp-4", points: 2 }] },
      { id: "pp-a2-no", nodeId: "node-nothing", text: "No, or I'm not sure", nextNodeId: null, causeScores: [{ causeId: "cause-pp-4", points: 4 }] },
    ],
  },
  {
    id: "node-error", problemId: "prob-printer-not-printing",
    question: "Is there any paper jam indicator on the printer?",
    answers: [
      { id: "pp-a3-yes", nodeId: "node-error", text: "Yes, paper jam light is on", nextNodeId: null, causeScores: [{ causeId: "cause-pp-1", points: 4 }] },
      { id: "pp-a3-no", nodeId: "node-error", text: "No, no jam indicator", nextNodeId: null, causeScores: [{ causeId: "cause-pp-2", points: 3 }] },
    ],
  },

  // Bluetooth Not Connecting nodes
  {
    id: "root", problemId: "prob-bluetooth-not-connecting",
    question: "Can you see the device in the Bluetooth list?",
    answers: [
      { id: "bt-a1-yes", nodeId: "root", text: "Yes, but it won't pair", nextNodeId: "node-seen-not-pair", causeScores: [{ causeId: "cause-bt-2", points: 2 }] },
      { id: "bt-a1-no", nodeId: "root", text: "No, it doesn't appear", nextNodeId: "node-not-seen", causeScores: [{ causeId: "cause-bt-1", points: 3 }] },
      { id: "bt-a1-pairs", nodeId: "root", text: "It pairs but keeps disconnecting", nextNodeId: null, causeScores: [{ causeId: "cause-bt-4", points: 3 }, { causeId: "cause-bt-5", points: 2 }] },
    ],
  },
  {
    id: "node-seen-not-pair", problemId: "prob-bluetooth-not-connecting",
    question: "Are you getting any error message when trying to pair?",
    answers: [
      { id: "bt-a2-yes", nodeId: "node-seen-not-pair", text: "Yes, pairing failed or rejected", nextNodeId: null, causeScores: [{ causeId: "cause-bt-2", points: 3 }, { causeId: "cause-bt-3", points: 2 }] },
      { id: "bt-a2-no", nodeId: "node-seen-not-pair", text: "No, it just spins or times out", nextNodeId: null, causeScores: [{ causeId: "cause-bt-5", points: 3 }] },
    ],
  },
  {
    id: "node-not-seen", problemId: "prob-bluetooth-not-connecting",
    question: "Is the other device in pairing mode?",
    answers: [
      { id: "bt-a3-yes", nodeId: "node-not-seen", text: "Yes, I'm sure", nextNodeId: null, causeScores: [{ causeId: "cause-bt-3", points: 3 }, { causeId: "cause-bt-5", points: 2 }] },
      { id: "bt-a3-no", nodeId: "node-not-seen", text: "I'm not sure", nextNodeId: null, causeScores: [{ causeId: "cause-bt-1", points: 4 }] },
    ],
  },
];
