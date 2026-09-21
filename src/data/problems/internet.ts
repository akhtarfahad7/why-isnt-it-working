import type { Problem, DiagnosticNode, Cause } from "@/lib/db/types";

export const internetProblems: Problem[] = [
  {
    id: "prob-internet-not-working",
    categoryId: "cat-internet",
    title: "Internet Not Working",
    slug: "internet-not-working",
    description: "Your internet connection is down, not connecting, or very slow.",
    symptoms: ["Can't load any websites", "No internet connection icon", "Pages timeout or fail to load", "Wi-Fi connected but no internet"],
    safetyLevel: "SAFE",
    metaTitle: "Internet Not Working - Fix | Why Isn't It Working",
    metaDescription: "Diagnose why your internet is not working. Step-by-step troubleshooting.",
  },
  {
    id: "prob-browser-not-loading-pages",
    categoryId: "cat-internet",
    title: "Browser Not Loading Pages",
    slug: "browser-not-loading-pages",
    description: "Your web browser can't load websites, shows blank pages, or keeps loading forever.",
    symptoms: ["Browser shows blank white page", "Loading spinner never stops", "Some sites work, others don't", "Browser error messages"],
    safetyLevel: "SAFE",
    metaTitle: "Browser Not Loading Pages - Fix | Why Isn't It Working",
    metaDescription: "Fix browser page loading issues. Diagnostic tool and solutions.",
  },
  {
    id: "prob-email-not-sending-receiving",
    categoryId: "cat-internet",
    title: "Email Not Sending or Receiving",
    slug: "email-not-sending-receiving",
    description: "Your email won't send messages, isn't receiving new emails, or shows sync errors.",
    symptoms: ["Emails stuck in outbox", "Not receiving new emails", "Sync error message", "Can't connect to mail server"],
    safetyLevel: "SAFE",
    metaTitle: "Email Not Working - Fix | Why Isn't It Working",
    metaDescription: "Fix email sending/receiving issues. Diagnostic guide inside.",
  },
  {
    id: "prob-video-streaming-buffering",
    categoryId: "cat-internet",
    title: "Video Streaming Buffering",
    slug: "video-streaming-buffering",
    description: "Videos on YouTube, Netflix, or other platforms keep buffering or play in low quality.",
    symptoms: ["Video keeps pausing to buffer", "Quality drops to lowest setting", "Audio out of sync with video", "Loading circle never stops"],
    safetyLevel: "SAFE",
    metaTitle: "Video Streaming Buffering - Fix | Why Isn't It Working",
    metaDescription: "Stop video buffering. Find the cause and fix streaming issues.",
  },
  {
    id: "prob-vpn-not-connecting",
    categoryId: "cat-internet",
    title: "VPN Not Connecting",
    slug: "vpn-not-connecting",
    description: "Your VPN won't connect, keeps disconnecting, or shows connection errors.",
    symptoms: ["VPN stuck on connecting", "Connection drops frequently", "Error message when connecting", "Can't access VPN server"],
    safetyLevel: "SAFE",
    metaTitle: "VPN Not Connecting - Fix | Why Isn't It Working",
    metaDescription: "Fix VPN connection issues. Diagnostic tool for common problems.",
  },
];

export const internetCauses: Cause[] = [
  // Internet Not Working
  { id: "cause-iw-1", problemId: "prob-internet-not-working", title: "Router Needs Restart", description: "The router needs a simple restart to clear temporary issues.", safetyLevel: "SAFE", recommendation: "Unplug the router for 30 seconds, then plug it back in. Wait 2 minutes for it to fully restart.", professionalHelp: false },
  { id: "cause-iw-2", problemId: "prob-internet-not-working", title: "ISP Outage", description: "Your Internet Service Provider may be experiencing an outage in your area.", safetyLevel: "SAFE", recommendation: "Check your ISP's website or app for outage information. Call their support line.", professionalHelp: false },
  { id: "cause-iw-3", problemId: "prob-internet-not-working", title: "Loose Cable Connection", description: "The Ethernet cable or coaxial cable may be loose.", safetyLevel: "SAFE", recommendation: "Check all cable connections from the wall to the router and modem. Reconnect any loose cables.", professionalHelp: false },
  { id: "cause-iw-4", problemId: "prob-internet-not-working", title: "DNS Issue", description: "The DNS server settings may be incorrect or the DNS server is down.", safetyLevel: "SAFE", recommendation: "Try changing DNS to Google (8.8.8.8) or Cloudflare (1.1.1.1) in your network settings.", professionalHelp: false },
  { id: "cause-iw-5", problemId: "prob-internet-not-working", title: "Modem/Router Hardware Failure", description: "The modem or router hardware may have failed.", safetyLevel: "CAUTION", recommendation: "Contact your ISP to test the connection remotely. If hardware is faulty, it may need replacement.", professionalHelp: false },

  // Browser Not Loading Pages
  { id: "cause-bp-1", problemId: "prob-browser-not-loading-pages", title: "Browser Cache Issue", description: "Corrupted browser cache is preventing pages from loading.", safetyLevel: "SAFE", recommendation: "Clear browser cache and cookies. Try Ctrl+Shift+Delete to open the clear browsing data dialog.", professionalHelp: false },
  { id: "cause-bp-2", problemId: "prob-browser-not-loading-pages", title: "Browser Extensions Interfering", description: "A browser extension is blocking or interfering with page loading.", safetyLevel: "SAFE", recommendation: "Try disabling extensions one by one, or open the browser in Incognito/Private mode.", professionalHelp: false },
  { id: "cause-bp-3", problemId: "prob-browser-not-loading-pages", title: "Firewall Blocking", description: "The firewall is blocking certain websites or the browser.", safetyLevel: "SAFE", recommendation: "Check firewall settings and make sure your browser is allowed through. Temporarily disable to test.", professionalHelp: false },
  { id: "cause-bp-4", problemId: "prob-browser-not-loading-pages", title: "DNS Resolution Failure", description: "The browser can't resolve domain names to IP addresses.", safetyLevel: "SAFE", recommendation: "Try flushing DNS cache (ipconfig /flushdns) and restarting the browser.", professionalHelp: false },
  { id: "cause-bp-5", problemId: "prob-browser-not-loading-pages", title: "Browser Outdated", description: "The browser version is outdated and may have compatibility issues.", safetyLevel: "SAFE", recommendation: "Update your browser to the latest version from the official website.", professionalHelp: false },

  // Email Not Sending/Receiving
  { id: "cause-em-1", problemId: "prob-email-not-sending-receiving", title: "Wrong Password", description: "The email password may have changed or be incorrect.", safetyLevel: "SAFE", recommendation: "Re-enter your email password. If you've changed it recently, update it in your email client.", professionalHelp: false },
  { id: "cause-em-2", problemId: "prob-email-not-sending-receiving", title: "Server Settings Wrong", description: "The incoming/outgoing server settings are incorrect.", safetyLevel: "SAFE", recommendation: "Check your email provider's settings for the correct IMAP/POP3 and SMTP server addresses.", professionalHelp: false },
  { id: "cause-em-3", problemId: "prob-email-not-sending-receiving", title: "Storage Full", description: "Your email storage is full, preventing new emails.", safetyLevel: "SAFE", recommendation: "Delete old emails, especially those with large attachments. Empty the trash/spam folders.", professionalHelp: false },
  { id: "cause-em-4", problemId: "prob-email-not-sending-receiving", title: "Connection Timeout", description: "The email client can't connect to the mail server.", safetyLevel: "SAFE", recommendation: "Check your internet connection. Try accessing your email through a web browser instead.", professionalHelp: false },
  { id: "cause-em-5", problemId: "prob-email-not-sending-receiving", title: "Email Account Locked", description: "The email account may be locked due to suspicious activity.", safetyLevel: "SAFE", recommendation: "Check your email provider's security settings. You may need to verify your identity.", professionalHelp: false },

  // Video Streaming Buffering
  { id: "cause-vb-1", problemId: "prob-video-streaming-buffering", title: "Slow Internet Speed", description: "Your internet speed is too slow for the video quality.", safetyLevel: "SAFE", recommendation: "Run a speed test. For HD streaming, you need at least 5 Mbps. For 4K, at least 25 Mbps.", professionalHelp: false },
  { id: "cause-vb-2", problemId: "prob-video-streaming-buffering", title: "Too Many Devices on Network", description: "Too many devices are using the bandwidth simultaneously.", safetyLevel: "SAFE", recommendation: "Disconnect other devices or ask others to reduce their usage during streaming.", professionalHelp: false },
  { id: "cause-vb-3", problemId: "prob-video-streaming-buffering", title: "Wi-Fi Signal Weak", description: "The Wi-Fi signal is too weak in your location.", safetyLevel: "SAFE", recommendation: "Move closer to the router. Consider a Wi-Fi extender or mesh network for better coverage.", professionalHelp: false },
  { id: "cause-vb-4", problemId: "prob-video-streaming-buffering", title: "Server-Side Issue", description: "The streaming service's servers may be overloaded.", safetyLevel: "SAFE", recommendation: "Try a different streaming service. Check if the service is down using sites like DownDetector.", professionalHelp: false },
  { id: "cause-vb-5", problemId: "prob-video-streaming-buffering", title: "Browser Cache Full", description: "The browser cache is full, affecting streaming performance.", safetyLevel: "SAFE", recommendation: "Clear browser cache. Try a different browser. Restart the browser.", professionalHelp: false },

  // VPN Not Connecting
  { id: "cause-vp-1", problemId: "prob-vpn-not-connecting", title: "Wrong Credentials", description: "The VPN username or password is incorrect.", safetyLevel: "SAFE", recommendation: "Double-check your VPN credentials. Reset password if needed.", professionalHelp: false },
  { id: "cause-vp-2", problemId: "prob-vpn-not-connecting", title: "Server Down", description: "The VPN server you're trying to connect to may be down.", safetyLevel: "SAFE", recommendation: "Try connecting to a different VPN server location.", professionalHelp: false },
  { id: "cause-vp-3", problemId: "prob-vpn-not-connecting", title: "Firewall Blocking VPN", description: "Your firewall or antivirus is blocking the VPN connection.", safetyLevel: "SAFE", recommendation: "Add the VPN app to your firewall's exception list. Temporarily disable antivirus to test.", professionalHelp: false },
  { id: "cause-vp-4", problemId: "prob-vpn-not-connecting", title: "VPN Protocol Issue", description: "The VPN protocol may not be compatible with your network.", safetyLevel: "SAFE", recommendation: "Try switching between protocols (OpenVPN, WireGuard, IKEv2) in VPN settings.", professionalHelp: false },
  { id: "cause-vp-5", problemId: "prob-vpn-not-connecting", title: "Network Restrictions", description: "Your network (school, work, public Wi-Fi) may block VPN connections.", safetyLevel: "SAFE", recommendation: "Try using a different network. Some networks actively block VPN ports.", professionalHelp: false },
];

export const internetNodes: DiagnosticNode[] = [
  // Internet Not Working
  {
    id: "root", problemId: "prob-internet-not-working",
    question: "What does the Wi-Fi/Ethernet icon show?",
    answers: [
      { id: "iw-a1-connected", nodeId: "root", text: "Connected but no internet", nextNodeId: "node-connected-no-internet", causeScores: [{ causeId: "cause-iw-4", points: 3 }] },
      { id: "iw-a1-disconnected", nodeId: "root", text: "Disconnected / No connection", nextNodeId: "node-disconnected", causeScores: [{ causeId: "cause-iw-3", points: 3 }] },
      { id: "iw-a1-error", nodeId: "root", text: "Yellow triangle / Error icon", nextNodeId: null, causeScores: [{ causeId: "cause-iw-1", points: 3 }, { causeId: "cause-iw-2", points: 2 }] },
    ],
  },
  {
    id: "node-connected-no-internet", problemId: "prob-internet-not-working",
    question: "Can other devices connect to the internet on the same network?",
    answers: [
      { id: "iw-a2-yes", nodeId: "node-connected-no-internet", text: "Yes, other devices work", nextNodeId: null, causeScores: [{ causeId: "cause-iw-4", points: 3 }, { causeId: "cause-iw-3", points: 2 }] },
      { id: "iw-a2-no", nodeId: "node-connected-no-internet", text: "No, all devices are down", nextNodeId: null, causeScores: [{ causeId: "cause-iw-1", points: 3 }, { causeId: "cause-iw-2", points: 3 }] },
    ],
  },
  {
    id: "node-disconnected", problemId: "prob-internet-not-working",
    question: "Can you see your Wi-Fi network in the list?",
    answers: [
      { id: "iw-a3-yes", nodeId: "node-disconnected", text: "Yes, but it won't connect", nextNodeId: null, causeScores: [{ causeId: "cause-iw-1", points: 3 }] },
      { id: "iw-a3-no", nodeId: "node-disconnected", text: "No, I can't see any networks", nextNodeId: null, causeScores: [{ causeId: "cause-iw-5", points: 3 }] },
    ],
  },

  // Browser Not Loading Pages
  {
    id: "root", problemId: "prob-browser-not-loading-pages",
    question: "Do other browsers work?",
    answers: [
      { id: "bp-a1-yes", nodeId: "root", text: "Yes, other browsers load fine", nextNodeId: null, causeScores: [{ causeId: "cause-bp-1", points: 3 }, { causeId: "cause-bp-2", points: 2 }] },
      { id: "bp-a1-no", nodeId: "root", text: "No, no browser works", nextNodeId: "node-no-browser", causeScores: [{ causeId: "cause-bp-4", points: 3 }] },
    ],
  },
  {
    id: "node-no-browser", problemId: "prob-browser-not-loading-pages",
    question: "Can you ping a website? (Try: ping google.com in Command Prompt)",
    answers: [
      { id: "bp-a2-yes", nodeId: "node-no-browser", text: "Yes, ping works", nextNodeId: null, causeScores: [{ causeId: "cause-bp-3", points: 3 }] },
      { id: "bp-a2-no", nodeId: "node-no-browser", text: "No, ping fails", nextNodeId: null, causeScores: [{ causeId: "cause-bp-4", points: 4 }] },
    ],
  },

  // Email Not Sending/Receiving
  {
    id: "root", problemId: "prob-email-not-sending-receiving",
    question: "What's the email issue?",
    answers: [
      { id: "em-a1-send", nodeId: "root", text: "Can't send emails", nextNodeId: "node-cant-send", causeScores: [{ causeId: "cause-em-2", points: 2 }] },
      { id: "em-a1-receive", nodeId: "root", text: "Not receiving emails", nextNodeId: "node-not-receiving", causeScores: [{ causeId: "cause-em-3", points: 2 }] },
      { id: "em-a1-both", nodeId: "root", text: "Both sending and receiving fail", nextNodeId: null, causeScores: [{ causeId: "cause-em-1", points: 3 }, { causeId: "cause-em-4", points: 2 }] },
    ],
  },
  {
    id: "node-cant-send", problemId: "prob-email-not-sending-receiving",
    question: "Do you get an error message when sending?",
    answers: [
      { id: "em-a2-auth", nodeId: "node-cant-send", text: "Authentication error", nextNodeId: null, causeScores: [{ causeId: "cause-em-1", points: 4 }] },
      { id: "em-a2-server", nodeId: "node-cant-send", text: "Server connection error", nextNodeId: null, causeScores: [{ causeId: "cause-em-2", points: 4 }] },
      { id: "em-a2-timeout", nodeId: "node-cant-send", text: "Connection timeout", nextNodeId: null, causeScores: [{ causeId: "cause-em-4", points: 3 }] },
    ],
  },
  {
    id: "node-not-receiving", problemId: "prob-email-not-sending-receiving",
    question: "When did you last receive an email?",
    answers: [
      { id: "em-a3-recent", nodeId: "node-not-receiving", text: "Today or yesterday", nextNodeId: null, causeScores: [{ causeId: "cause-em-3", points: 3 }] },
      { id: "em-a3-long", nodeId: "node-not-receiving", text: "A while ago", nextNodeId: null, causeScores: [{ causeId: "cause-em-5", points: 3 }, { causeId: "cause-em-4", points: 2 }] },
    ],
  },

  // Video Streaming Buffering
  {
    id: "root", problemId: "prob-video-streaming-buffering",
    question: "Does this happen on all streaming services or just one?",
    answers: [
      { id: "vb-a1-all", nodeId: "root", text: "All services", nextNodeId: "node-all-buffer", causeScores: [{ causeId: "cause-vb-1", points: 3 }] },
      { id: "vb-a1-one", nodeId: "root", text: "Just one service", nextNodeId: null, causeScores: [{ causeId: "cause-vb-4", points: 4 }] },
    ],
  },
  {
    id: "node-all-buffer", problemId: "prob-video-streaming-buffering",
    question: "Are you using Wi-Fi or Ethernet?",
    answers: [
      { id: "vb-a2-wifi", nodeId: "node-all-buffer", text: "Wi-Fi", nextNodeId: "node-wifi-buffer", causeScores: [{ causeId: "cause-vb-3", points: 3 }] },
      { id: "vb-a2-ethernet", nodeId: "node-all-buffer", text: "Ethernet (wired)", nextNodeId: null, causeScores: [{ causeId: "cause-vb-2", points: 3 }] },
    ],
  },
  {
    id: "node-wifi-buffer", problemId: "prob-video-streaming-buffering",
    question: "How far are you from the router?",
    answers: [
      { id: "vb-a3-close", nodeId: "node-wifi-buffer", text: "Same room / very close", nextNodeId: null, causeScores: [{ causeId: "cause-vb-2", points: 3 }] },
      { id: "vb-a3-far", nodeId: "node-wifi-buffer", text: "Different room / far away", nextNodeId: null, causeScores: [{ causeId: "cause-vb-3", points: 4 }] },
    ],
  },

  // VPN Not Connecting
  {
    id: "root", problemId: "prob-vpn-not-connecting",
    question: "What happens when you try to connect?",
    answers: [
      { id: "vp-a1-stuck", nodeId: "root", text: "Stuck on 'Connecting...'", nextNodeId: "node-stuck-connect", causeScores: [{ causeId: "cause-vp-4", points: 2 }] },
      { id: "vp-a1-error", nodeId: "root", text: "Shows error message", nextNodeId: "node-vpn-error", causeScores: [{ causeId: "cause-vp-1", points: 3 }] },
      { id: "vp-a1-connects", nodeId: "root", text: "Connects but then disconnects", nextNodeId: null, causeScores: [{ causeId: "cause-vp-3", points: 3 }] },
    ],
  },
  {
    id: "node-stuck-connect", problemId: "prob-vpn-not-connecting",
    question: "Does your internet work without VPN?",
    answers: [
      { id: "vp-a2-yes", nodeId: "node-stuck-connect", text: "Yes, internet works fine", nextNodeId: null, causeScores: [{ causeId: "cause-vp-2", points: 3 }, { causeId: "cause-vp-4", points: 2 }] },
      { id: "vp-a2-no", nodeId: "node-stuck-connect", text: "No, internet is also down", nextNodeId: null, causeScores: [{ causeId: "cause-vp-5", points: 3 }] },
    ],
  },
  {
    id: "node-vpn-error", problemId: "prob-vpn-not-connecting",
    question: "What does the error message say?",
    answers: [
      { id: "vp-a3-auth", nodeId: "node-vpn-error", text: "Authentication failed / Invalid credentials", nextNodeId: null, causeScores: [{ causeId: "cause-vp-1", points: 4 }] },
      { id: "vp-a3-server", nodeId: "node-vpn-error", text: "Server not found / Connection refused", nextNodeId: null, causeScores: [{ causeId: "cause-vp-2", points: 4 }] },
      { id: "vp-a3-other", nodeId: "node-vpn-error", text: "Other error message", nextNodeId: null, causeScores: [{ causeId: "cause-vp-4", points: 3 }] },
    ],
  },
];
