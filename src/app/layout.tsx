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

export const metadata: Metadata = {
  title: {
    default: "Why Isn't It Working? - Tech Diagnostic Tool",
    template: "%s | Why Isn't It Working?",
  },
  description:
    "Tell us what's not working. We'll help you figure out why. Diagnostic tool for laptops, Wi-Fi, vehicles, and more.",
  keywords: [
    "tech support",
    "diagnostic tool",
    "troubleshooting",
    "laptop won't charge",
    "wifi disconnecting",
    "car won't start",
  ],
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/problems", label: "Problems" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/safety", label: "Safety" },
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
                <Link href="/safety" className="hover:text-gray-900">
                  Safety
                </Link>
                <Link href="/privacy" className="hover:text-gray-900">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-gray-900">
                  Terms
                </Link>
                <Link href="/disclaimer" className="hover:text-gray-900">
                  Disclaimer
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
