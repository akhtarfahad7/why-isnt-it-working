import type { Problem, DiagnosticNode, Cause } from "@/lib/db/types";

export const softwareProblems: Problem[] = [
  {
    id: "prob-computer-running-slow",
    categoryId: "cat-software",
    title: "Computer Running Slow",
    slug: "computer-running-slow",
    description: "Your computer is slow to respond, takes forever to boot, or lags during use.",
    symptoms: ["Slow boot time", "Programs take long to open", "Mouse stutters or freezes", "Computer feels sluggish"],
    safetyLevel: "SAFE",
    metaTitle: "Computer Running Slow - Fix | Why Isn't It Working",
    metaDescription: "Find out why your computer is running slow. Diagnostic tool with solutions.",
  },
  {
    id: "prob-blue-screen-of-death",
    categoryId: "cat-software",
    title: "Blue Screen of Death (BSOD)",
    slug: "blue-screen-of-death",
    description: "Your computer shows a blue error screen and restarts unexpectedly.",
    symptoms: ["Blue screen with error message", "Computer restarts randomly", "Error code displayed", "Crashes during startup"],
    safetyLevel: "CAUTION",
    metaTitle: "Blue Screen of Death - Fix & Diagnosis | Why Isn't It Working",
    metaDescription: "Diagnose blue screen errors. Find the cause and get solutions.",
  },
  {
    id: "prob-app-crashing",
    categoryId: "cat-software",
    title: "App Crashing",
    slug: "app-crashing",
    description: "A specific application keeps crashing, freezing, or showing error messages.",
    symptoms: ["App closes unexpectedly", "App freezes and becomes unresponsive", "Error message when opening app", "App won't open at all"],
    safetyLevel: "SAFE",
    metaTitle: "App Crashing - Fix & Diagnosis | Why Isn't It Working",
    metaDescription: "Fix crashing apps. Diagnostic tool to identify the cause.",
  },
  {
    id: "prob-computer-not-turning-on",
    categoryId: "cat-software",
    title: "Computer Not Turning On",
    slug: "computer-not-turning-on",
    description: "Your desktop or laptop won't power on, shows no lights, or is completely dead.",
    symptoms: ["No power light", "No fans spinning", "Screen stays black", "No sounds when pressing power"],
    safetyLevel: "SAFE",
    metaTitle: "Computer Not Turning On - Fix | Why Isn't It Working",
    metaDescription: "Find out why your computer won't turn on. Step-by-step diagnosis.",
  },
  {
    id: "prob-sound-not-working",
    categoryId: "cat-software",
    title: "Sound Not Working",
    slug: "sound-not-working",
    description: "Your computer has no sound, distorted audio, or sound only works through some apps.",
    symptoms: ["No sound from speakers", "Audio is distorted", "Volume slider doesn't work", "Sound only works in some apps"],
    safetyLevel: "SAFE",
    metaTitle: "Sound Not Working - Fix & Diagnosis | Why Isn't It Working",
    metaDescription: "Diagnose why your computer has no sound. Easy fix guide.",
  },
  {
    id: "prob-webcam-not-working",
    categoryId: "cat-software",
    title: "Webcam Not Working",
    slug: "webcam-not-working",
    description: "Your webcam won't turn on, shows a black screen, or isn't detected by apps.",
    symptoms: ["Webcam light doesn't turn on", "Black screen in video calls", "Camera not detected", "Apps can't access camera"],
    safetyLevel: "SAFE",
    metaTitle: "Webcam Not Working - Fix | Why Isn't It Working",
    metaDescription: "Fix your webcam issues. Diagnostic tool and solutions.",
  },
];

export const softwareCauses: Cause[] = [
  // Computer Running Slow
  { id: "cause-cs-1", problemId: "prob-computer-running-slow", title: "Too Many Startup Programs", description: "Many programs are set to start automatically, slowing down boot and performance.", safetyLevel: "SAFE", recommendation: "Open Task Manager > Startup tab. Disable unnecessary startup programs.", professionalHelp: false },
  { id: "cause-cs-2", problemId: "prob-computer-running-slow", title: "Low Disk Space", description: "Your hard drive is nearly full, which slows down the system.", safetyLevel: "SAFE", recommendation: "Free up disk space by deleting unnecessary files, emptying recycle bin, and uninstalling unused programs.", professionalHelp: false },
  { id: "cause-cs-3", problemId: "prob-computer-running-slow", title: "Too Many Background Processes", description: "Too many programs running in the background are using up RAM and CPU.", safetyLevel: "SAFE", recommendation: "Open Task Manager and end unnecessary processes. Consider upgrading RAM if consistently high.", professionalHelp: false },
  { id: "cause-cs-4", problemId: "prob-computer-running-slow", title: "Malware or Virus", description: "Malicious software is running in the background, consuming resources.", safetyLevel: "CAUTION", recommendation: "Run a full system scan with Windows Defender or a trusted antivirus program.", professionalHelp: false },
  { id: "cause-cs-5", problemId: "prob-computer-running-slow", title: "Hard Drive Failing", description: "The hard drive may be failing, causing slow read/write speeds.", safetyLevel: "CAUTION", recommendation: "Back up your data immediately. Run disk health check (chkdsk). Consider replacing with SSD.", professionalHelp: false },

  // Blue Screen of Death
  { id: "cause-bs-1", problemId: "prob-blue-screen-of-death", title: "Driver Conflict", description: "A recently installed or updated driver is causing conflicts.", safetyLevel: "SAFE", recommendation: "Boot into Safe Mode and uninstall recently updated drivers. Use Device Manager to roll back drivers.", professionalHelp: false },
  { id: "cause-bs-2", problemId: "prob-blue-screen-of-death", title: "Faulty RAM", description: "The computer's RAM may be failing or incompatible.", safetyLevel: "CAUTION", recommendation: "Run Windows Memory Diagnostic tool. If errors are found, replace the RAM module.", professionalHelp: false },
  { id: "cause-bs-3", problemId: "prob-blue-screen-of-death", title: "Overheating", description: "The CPU or GPU is overheating, causing system instability.", safetyLevel: "CAUTION", recommendation: "Clean dust from fans and vents. Ensure proper ventilation. Check temperatures with monitoring software.", professionalHelp: false },
  { id: "cause-bs-4", problemId: "prob-blue-screen-of-death", title: "Corrupted Windows Files", description: "Critical Windows system files have become corrupted.", safetyLevel: "SAFE", recommendation: "Run System File Checker: open Command Prompt as admin and type 'sfc /scannow'.", professionalHelp: false },
  { id: "cause-bs-5", problemId: "prob-blue-screen-of-death", title: "Hardware Failure", description: "A hardware component (motherboard, PSU, GPU) is failing.", safetyLevel: "HIGH", recommendation: "Professional diagnosis needed. Note the error code displayed on the blue screen.", professionalHelp: true },

  // App Crashing
  { id: "cause-ac-1", problemId: "prob-app-crashing", title: "Outdated App Version", description: "The app version is outdated and may have known bugs.", safetyLevel: "SAFE", recommendation: "Check for app updates in the app store or developer's website.", professionalHelp: false },
  { id: "cause-ac-2", problemId: "prob-app-crashing", title: "Insufficient Resources", description: "The app needs more RAM or CPU than available.", safetyLevel: "SAFE", recommendation: "Close other programs to free up resources. Check the app's system requirements.", professionalHelp: false },
  { id: "cause-ac-3", problemId: "prob-app-crashing", title: "Corrupted App Files", description: "The app's installation files have become corrupted.", safetyLevel: "SAFE", recommendation: "Uninstall and reinstall the app. Clear app cache/data before reinstalling.", professionalHelp: false },
  { id: "cause-ac-4", problemId: "prob-app-crashing", title: "Compatibility Issue", description: "The app is not compatible with your operating system version.", safetyLevel: "SAFE", recommendation: "Check the app's compatibility requirements. Try running in compatibility mode.", professionalHelp: false },
  { id: "cause-ac-5", problemId: "prob-app-crashing", title: "Conflicting Software", description: "Another program or security software is interfering with the app.", safetyLevel: "SAFE", recommendation: "Temporarily disable antivirus/firewall and test. Check for conflicting background apps.", professionalHelp: false },

  // Computer Not Turning On
  { id: "cause-cn-1", problemId: "prob-computer-not-turning-on", title: "Power Cable Issue", description: "The power cable is loose, disconnected, or damaged.", safetyLevel: "SAFE", recommendation: "Check that the power cable is firmly plugged in at both ends. Try a different outlet.", professionalHelp: false },
  { id: "cause-cn-2", problemId: "prob-computer-not-turning-on", title: "Power Supply Failure", description: "The power supply unit (PSU) has failed.", safetyLevel: "HIGH", recommendation: "The PSU needs to be tested and likely replaced. Contact a technician.", professionalHelp: true },
  { id: "cause-cn-3", problemId: "prob-computer-not-turning-on", title: "Power Button Issue", description: "The power button or its connection to the motherboard is faulty.", safetyLevel: "CAUTION", recommendation: "Try shorting the power button pins on the motherboard to test. If it works, the button is faulty.", professionalHelp: false },
  { id: "cause-cn-4", problemId: "prob-computer-not-turning-on", title: "Motherboard Failure", description: "The motherboard has failed and needs replacement.", safetyLevel: "HIGH", recommendation: "Professional diagnosis needed. The motherboard may need to be replaced.", professionalHelp: true },
  { id: "cause-cn-5", problemId: "prob-computer-not-turning-on", title: "RAM Not Seated Properly", description: "The RAM modules are not properly inserted in their slots.", safetyLevel: "SAFE", recommendation: "Power off, unplug, open the case, and reseat the RAM modules firmly.", professionalHelp: false },

  // Sound Not Working
  { id: "cause-sn-1", problemId: "prob-sound-not-working", title: "Muted or Low Volume", description: "The system or app volume is muted or set very low.", safetyLevel: "SAFE", recommendation: "Check the volume icon in the taskbar. Make sure it's not muted and set to a reasonable level.", professionalHelp: false },
  { id: "cause-sn-2", problemId: "prob-sound-not-working", title: "Wrong Audio Output", description: "The system is sending audio to the wrong output device.", safetyLevel: "SAFE", recommendation: "Click the volume icon and select the correct output device from the list.", professionalHelp: false },
  { id: "cause-sn-3", problemId: "prob-sound-not-working", title: "Audio Driver Issue", description: "The audio driver is corrupted or outdated.", safetyLevel: "SAFE", recommendation: "Update or reinstall the audio driver from Device Manager or manufacturer website.", professionalHelp: false },
  { id: "cause-sn-4", problemId: "prob-sound-not-working", title: "Audio Service Stopped", description: "The Windows Audio service is not running.", safetyLevel: "SAFE", recommendation: "Open Services (services.msc), find 'Windows Audio', and start it. Set to Automatic.", professionalHelp: false },
  { id: "cause-sn-5", problemId: "prob-sound-not-working", title: "Hardware Issue", description: "The speakers, headphones, or audio jack may be faulty.", safetyLevel: "SAFE", recommendation: "Test with different speakers/headphones. Try a different audio jack if available.", professionalHelp: false },

  // Webcam Not Working
  { id: "cause-wc-1", problemId: "prob-webcam-not-working", title: "Privacy Setting Blocked", description: "Windows privacy settings are blocking apps from accessing the camera.", safetyLevel: "SAFE", recommendation: "Go to Settings > Privacy > Camera. Enable 'Allow apps to access your camera'.", professionalHelp: false },
  { id: "cause-wc-2", problemId: "prob-webcam-not-working", title: "Camera Driver Issue", description: "The webcam driver is missing, corrupted, or outdated.", safetyLevel: "SAFE", recommendation: "Update or reinstall the camera driver from Device Manager.", professionalHelp: false },
  { id: "cause-wc-3", problemId: "prob-webcam-not-working", title: "Camera Disabled in Device Manager", description: "The webcam has been disabled in Device Manager.", safetyLevel: "SAFE", recommendation: "Open Device Manager, find the camera, right-click and enable it.", professionalHelp: false },
  { id: "cause-wc-4", problemId: "prob-webcam-not-working", title: "Physical Camera Cover", description: "Your laptop may have a physical privacy cover over the camera.", safetyLevel: "SAFE", recommendation: "Check if there's a physical slider or cover over the camera lens.", professionalHelp: false },
  { id: "cause-wc-5", problemId: "prob-webcam-not-working", title: "Hardware Failure", description: "The webcam hardware itself has failed.", safetyLevel: "HIGH", recommendation: "Try an external USB webcam to confirm. If it works, the built-in camera needs repair.", professionalHelp: true },
];

export const softwareNodes: DiagnosticNode[] = [
  // Computer Running Slow
  {
    id: "root", problemId: "prob-computer-running-slow",
    question: "When did the slowness start?",
    answers: [
      { id: "cs-a1-recent", nodeId: "root", text: "Recently (after an update or install)", nextNodeId: "node-recent-slow", causeScores: [{ causeId: "cause-cs-1", points: 3 }] },
      { id: "cs-a1-gradual", nodeId: "root", text: "It's been gradual over time", nextNodeId: "node-gradual-slow", causeScores: [{ causeId: "cause-cs-2", points: 3 }, { causeId: "cause-cs-3", points: 2 }] },
      { id: "cs-a1-sudden", nodeId: "root", text: "Suddenly, all at once", nextNodeId: "node-sudden-slow", causeScores: [{ causeId: "cause-cs-4", points: 3 }] },
    ],
  },
  {
    id: "node-recent-slow", problemId: "prob-computer-running-slow",
    question: "Did you recently install new software or updates?",
    answers: [
      { id: "cs-a2-yes", nodeId: "node-recent-slow", text: "Yes", nextNodeId: null, causeScores: [{ causeId: "cause-cs-1", points: 4 }] },
      { id: "cs-a2-no", nodeId: "node-recent-slow", text: "No", nextNodeId: null, causeScores: [{ causeId: "cause-cs-3", points: 3 }] },
    ],
  },
  {
    id: "node-gradual-slow", problemId: "prob-computer-running-slow",
    question: "How much free disk space do you have?",
    answers: [
      { id: "cs-a3-low", nodeId: "node-gradual-slow", text: "Less than 10%", nextNodeId: null, causeScores: [{ causeId: "cause-cs-2", points: 4 }] },
      { id: "cs-a3-ok", nodeId: "node-gradual-slow", text: "More than 20%", nextNodeId: null, causeScores: [{ causeId: "cause-cs-3", points: 3 }] },
    ],
  },
  {
    id: "node-sudden-slow", problemId: "prob-computer-running-slow",
    question: "Is your antivirus software up to date?",
    answers: [
      { id: "cs-a4-yes", nodeId: "node-sudden-slow", text: "Yes, it's current", nextNodeId: null, causeScores: [{ causeId: "cause-cs-5", points: 3 }] },
      { id: "cs-a4-no", nodeId: "node-sudden-slow", text: "No, or I don't have one", nextNodeId: null, causeScores: [{ causeId: "cause-cs-4", points: 4 }] },
    ],
  },

  // Blue Screen of Death
  {
    id: "root", problemId: "prob-blue-screen-of-death",
    question: "When does the blue screen appear?",
    answers: [
      { id: "bs-a1-boot", nodeId: "root", text: "During startup/boot", nextNodeId: "node-boot-bsod", causeScores: [{ causeId: "cause-bs-1", points: 3 }] },
      { id: "bs-a1-use", nodeId: "root", text: "While using the computer", nextNodeId: "node-use-bsod", causeScores: [{ causeId: "cause-bs-3", points: 2 }] },
      { id: "bs-a1-random", nodeId: "root", text: "Randomly, anytime", nextNodeId: null, causeScores: [{ causeId: "cause-bs-2", points: 3 }] },
    ],
  },
  {
    id: "node-boot-bsod", problemId: "prob-blue-screen-of-death",
    question: "Did you recently install new hardware or drivers?",
    answers: [
      { id: "bs-a2-yes", nodeId: "node-boot-bsod", text: "Yes", nextNodeId: null, causeScores: [{ causeId: "cause-bs-1", points: 4 }] },
      { id: "bs-a2-no", nodeId: "node-boot-bsod", text: "No", nextNodeId: null, causeScores: [{ causeId: "cause-bs-4", points: 3 }] },
    ],
  },
  {
    id: "node-use-bsod", problemId: "prob-blue-screen-of-death",
    question: "Does it happen during a specific activity (gaming, video editing)?",
    answers: [
      { id: "bs-a3-yes", nodeId: "node-use-bsod", text: "Yes, during heavy use", nextNodeId: null, causeScores: [{ causeId: "cause-bs-3", points: 4 }] },
      { id: "bs-a3-no", nodeId: "node-use-bsod", text: "No, even during light use", nextNodeId: null, causeScores: [{ causeId: "cause-bs-2", points: 3 }, { causeId: "cause-bs-5", points: 2 }] },
    ],
  },

  // App Crashing
  {
    id: "root", problemId: "prob-app-crashing",
    question: "When does the app crash?",
    answers: [
      { id: "ac-a1-open", nodeId: "root", text: "Immediately when I open it", nextNodeId: "node-crash-open", causeScores: [{ causeId: "cause-ac-3", points: 3 }] },
      { id: "ac-a1-use", nodeId: "root", text: "While I'm using it", nextNodeId: "node-crash-use", causeScores: [{ causeId: "cause-ac-2", points: 3 }] },
      { id: "ac-a1-specific", nodeId: "root", text: "When I do a specific action", nextNodeId: null, causeScores: [{ causeId: "cause-ac-1", points: 3 }] },
    ],
  },
  {
    id: "node-crash-open", problemId: "prob-app-crashing",
    question: "Did you recently update the app or your OS?",
    answers: [
      { id: "ac-a2-yes", nodeId: "node-crash-open", text: "Yes", nextNodeId: null, causeScores: [{ causeId: "cause-ac-4", points: 3 }] },
      { id: "ac-a2-no", nodeId: "node-crash-open", text: "No", nextNodeId: null, causeScores: [{ causeId: "cause-ac-3", points: 4 }] },
    ],
  },
  {
    id: "node-crash-use", problemId: "prob-app-crashing",
    question: "Does the crash happen when the app is doing something specific?",
    answers: [
      { id: "ac-a3-yes", nodeId: "node-crash-use", text: "Yes, like saving or exporting", nextNodeId: null, causeScores: [{ causeId: "cause-ac-2", points: 3 }, { causeId: "cause-ac-3", points: 2 }] },
      { id: "ac-a3-no", nodeId: "node-crash-use", text: "No, it seems random", nextNodeId: null, causeScores: [{ causeId: "cause-ac-5", points: 3 }] },
    ],
  },

  // Computer Not Turning On
  {
    id: "root", problemId: "prob-computer-not-turning-on",
    question: "What happens when you press the power button?",
    answers: [
      { id: "cn-a1-nothing", nodeId: "root", text: "Absolutely nothing - no lights, no sounds", nextNodeId: "node-totally-dead", causeScores: [{ causeId: "cause-cn-1", points: 3 }] },
      { id: "cn-a1-fans", nodeId: "root", text: "Fans spin briefly then stop", nextNodeId: "node-fans-spin", causeScores: [{ causeId: "cause-cn-2", points: 3 }] },
      { id: "cn-a1-lights", nodeId: "root", text: "Lights come on but no display", nextNodeId: null, causeScores: [{ causeId: "cause-cn-5", points: 3 }] },
    ],
  },
  {
    id: "node-totally-dead", problemId: "prob-computer-not-turning-on",
    question: "Is the power cable firmly connected at both ends?",
    answers: [
      { id: "cn-a2-yes", nodeId: "node-totally-dead", text: "Yes, it's secure", nextNodeId: null, causeScores: [{ causeId: "cause-cn-2", points: 3 }, { causeId: "cause-cn-4", points: 2 }] },
      { id: "cn-a2-no", nodeId: "node-totally-dead", text: "I'll check", nextNodeId: null, causeScores: [{ causeId: "cause-cn-1", points: 4 }] },
    ],
  },
  {
    id: "node-fans-spin", problemId: "prob-computer-not-turning-on",
    question: "Do you hear any beeps when trying to start?",
    answers: [
      { id: "cn-a3-yes", nodeId: "node-fans-spin", text: "Yes, I hear beep codes", nextNodeId: null, causeScores: [{ causeId: "cause-cn-5", points: 4 }] },
      { id: "cn-a3-no", nodeId: "node-fans-spin", text: "No, just fans", nextNodeId: null, causeScores: [{ causeId: "cause-cn-2", points: 3 }] },
    ],
  },

  // Sound Not Working
  {
    id: "root", problemId: "prob-sound-not-working",
    question: "Is the volume icon showing as muted in the taskbar?",
    answers: [
      { id: "sn-a1-yes", nodeId: "root", text: "Yes, it shows muted", nextNodeId: null, causeScores: [{ causeId: "cause-sn-1", points: 4 }] },
      { id: "sn-a1-no", nodeId: "root", text: "No, it's not muted", nextNodeId: "node-not-muted", causeScores: [{ causeId: "cause-sn-2", points: 2 }] },
    ],
  },
  {
    id: "node-not-muted", problemId: "prob-sound-not-working",
    question: "Are you using speakers, headphones, or built-in audio?",
    answers: [
      { id: "sn-a2-speakers", nodeId: "node-not-muted", text: "External speakers", nextNodeId: null, causeScores: [{ causeId: "cause-sn-5", points: 3 }, { causeId: "cause-sn-2", points: 2 }] },
      { id: "sn-a2-headphones", nodeId: "node-not-muted", text: "Headphones", nextNodeId: null, causeScores: [{ causeId: "cause-sn-5", points: 2 }, { causeId: "cause-sn-2", points: 3 }] },
      { id: "sn-a2-built", nodeId: "node-not-muted", text: "Built-in speakers", nextNodeId: null, causeScores: [{ causeId: "cause-sn-3", points: 3 }] },
    ],
  },

  // Webcam Not Working
  {
    id: "root", problemId: "prob-webcam-not-working",
    question: "Does the webcam light turn on at all?",
    answers: [
      { id: "wc-a1-yes", nodeId: "root", text: "Yes, the light turns on", nextNodeId: "node-light-on", causeScores: [{ causeId: "cause-wc-1", points: 3 }] },
      { id: "wc-a1-no", nodeId: "root", text: "No, nothing happens", nextNodeId: "node-light-off", causeScores: [{ causeId: "cause-wc-2", points: 3 }] },
    ],
  },
  {
    id: "node-light-on", problemId: "prob-webcam-not-working",
    question: "Does the camera show a black screen or work in some apps?",
    answers: [
      { id: "wc-a2-black", nodeId: "node-light-on", text: "Black screen in all apps", nextNodeId: null, causeScores: [{ causeId: "cause-wc-1", points: 4 }] },
      { id: "wc-a2-some", nodeId: "node-light-on", text: "Works in some apps but not others", nextNodeId: null, causeScores: [{ causeId: "cause-wc-1", points: 3 }] },
    ],
  },
  {
    id: "node-light-off", problemId: "prob-webcam-not-working",
    question: "Is this a built-in laptop camera or USB webcam?",
    answers: [
      { id: "wc-a3-built", nodeId: "node-light-off", text: "Built-in laptop camera", nextNodeId: null, causeScores: [{ causeId: "cause-wc-3", points: 3 }, { causeId: "cause-wc-5", points: 2 }] },
      { id: "wc-a3-usb", nodeId: "node-light-off", text: "USB webcam", nextNodeId: null, causeScores: [{ causeId: "cause-wc-4", points: 3 }] },
    ],
  },
];
