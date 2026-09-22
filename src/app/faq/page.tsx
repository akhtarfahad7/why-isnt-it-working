import type { Metadata } from "next";
import Link from "next/link";
import { FAQStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Get answers to common questions about troubleshooting tech, appliances, and vehicle problems. Why isn't it working? We have the answers.",
  keywords: ["faq", "frequently asked questions", "troubleshooting", "tech support", "why isn't it working"],
  openGraph: {
    title: "FAQ | Why Isn't It Working?",
    description: "Get answers to common questions about troubleshooting tech, appliances, and vehicle problems.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "What is Why Isn't It Working?",
    answer: "Why Isn't It Working? is a free diagnostic tool that helps you figure out why your tech, appliances, or vehicles aren't working. We provide step-by-step troubleshooting guides powered by AI and curated by experts.",
  },
  {
    question: "How does the diagnostic tool work?",
    answer: "Our diagnostic tool asks you a series of questions about your problem. Based on your answers, it identifies the most likely causes and provides recommendations. You can also use AI to generate custom diagnostic trees for any problem.",
  },
  {
    question: "Is the diagnostic tool free?",
    answer: "Yes, the diagnostic tool is completely free to use. You can run unlimited diagnostic checks without creating an account or paying any fees.",
  },
  {
    question: "Why isn't my laptop charging?",
    answer: "The most common reasons for a laptop not charging are: a faulty charger or cable, a dead or degraded battery, driver issues, or overheating protection. Start by checking your charger cable for damage, then try a hard reset by unplugging the charger and holding the power button for 30 seconds.",
  },
  {
    question: "Why isn't my phone connecting to WiFi?",
    answer: "Common reasons include: WiFi is turned off, incorrect password, router issues, outdated software, or network congestion. Try restarting your phone and router, forgetting and reconnecting to the network, and updating your phone's software.",
  },
  {
    question: "Why won't my car start?",
    answer: "The most common reasons a car won't start are: dead battery (most common), bad alternator, faulty starter motor, empty fuel tank, or clogged fuel filter. Try jump-starting the car first to rule out a dead battery.",
  },
  {
    question: "Why isn't my AC cooling?",
    answer: "AC not cooling is usually caused by: dirty air filter (most common), low refrigerant, dirty condenser coils, thermostat issues, or duct leaks. Start by replacing the air filter, as this fixes most cooling problems.",
  },
  {
    question: "Why does my WiFi keep disconnecting?",
    answer: "WiFi disconnections can be caused by: router overheating, outdated drivers, network congestion, distance from router, interference from other electronics, or power management settings. Try restarting your router and updating your WiFi drivers first.",
  },
  {
    question: "Why is my computer running slow?",
    answer: "A slow computer is often caused by: too many startup programs, insufficient RAM, full hard drive, malware, or outdated hardware. Disable unnecessary startup programs, upgrade to an SSD, or add more RAM for significant improvements.",
  },
  {
    question: "Can I use AI to diagnose any problem?",
    answer: "Yes! Our AI diagnostic tool can generate custom diagnostic trees for any problem you describe. Simply type your problem in the search box and click 'Generate AI Diagnostic' for a personalized troubleshooting guide.",
  },
  {
    question: "Are the diagnostic results accurate?",
    answer: "Our diagnostic results are based on curated data from experts and AI-powered analysis. While they provide highly accurate guidance, they're meant to supplement — not replace — professional advice for critical issues.",
  },
  {
    question: "How often is the content updated?",
    answer: "We regularly update our diagnostic database and blog articles to reflect new products, common issues, and the latest troubleshooting techniques. New content is added weekly.",
  },
  {
    question: "Can I suggest a problem to add?",
    answer: "Absolutely! We're always looking to expand our diagnostic database. Use the contact page to suggest new problems you'd like us to cover.",
  },
  {
    question: "Is this site safe to use?",
    answer: "Yes, Why Isn't It Working? is completely safe. We don't collect personal data, don't require registration, and all diagnostic tools work entirely in your browser. Our safety ratings help you know when to attempt a fix yourself vs. when to call a professional.",
  },
  {
    question: "Why isn't my microwave heating?",
    answer: "A microwave that runs but doesn't heat is usually caused by: a faulty door switch, failed magnetron, broken high voltage diode, or capacitor issues. Check that the door closes completely and latches firmly first. Internal repairs require a qualified technician due to high-voltage components.",
  },
];

export default function FAQPage() {
  return (
    <>
      <FAQStructuredData items={faqItems} />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">FAQ</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-gray-600">
            Get answers to common questions about our diagnostic tool and troubleshooting everyday problems.
          </p>
        </header>

        <div className="space-y-6">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 bg-white p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {item.question}
              </h2>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>

        <section className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don&apos;t see your question here?
          </p>
          <Link
            href="/search"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
          >
            Search for Your Problem →
          </Link>
        </section>
      </div>
    </>
  );
}
