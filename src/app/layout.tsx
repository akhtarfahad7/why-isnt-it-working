import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://why-isnt-it-working.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Why Isn't It Working? - Tech Diagnostic & Troubleshooting Tool",
    template: "%s | Why Isn't It Working?",
  },
  description:
    "Tell us what's not working and we'll help you figure out why. Free diagnostic tool for laptops, phones, WiFi, cars, appliances, and more.",
  keywords: [
    "troubleshooting",
    "diagnostic tool",
    "tech support",
    "why isn't it working",
    "how to fix",
    "repair guide",
    "laptop not charging",
    "phone overheating",
    "wifi disconnecting",
    "car won't start",
    "ac not cooling",
    "computer running slow",
  ],
  authors: [{ name: "Why Isn't It Working?" }],
  creator: "Why Isn't It Working?",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Why Isn't It Working?",
    title: "Why Isn't It Working? - Tech Diagnostic & Troubleshooting Tool",
    description: "Tell us what's not working and we'll help you figure out why. Free diagnostic tool for laptops, phones, WiFi, cars, appliances, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Isn't It Working? - Tech Diagnostic & Troubleshooting Tool",
    description: "Tell us what's not working and we'll help you figure out why. Free diagnostic tool for laptops, phones, WiFi, cars, appliances, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/problems", label: "Problems" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Why Isn&apos;t It Working?
            </Link>
            <nav className="hidden sm:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Why Isn&apos;t It Working?
              </p>
              <nav className="flex gap-4 text-sm text-gray-500">
                <Link href="/about" className="hover:text-gray-900">
                  About
                </Link>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
                <Link href="/faq" className="hover:text-gray-900">
                  FAQ
                </Link>
                <Link href="/privacy" className="hover:text-gray-900">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-gray-900">
                  Terms
                </Link>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
