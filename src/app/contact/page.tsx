import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-4">
          Have questions, suggestions, or feedback? We&apos;d love to hear from you.
        </p>
        <p className="text-gray-600 mb-4">
          You can reach us at:{" "}
          <a
            href="mailto:hello@whyisntitworking.com"
            className="text-blue-600 hover:underline"
          >
            hello@whyisntitworking.com
          </a>
        </p>
        <p className="text-gray-600">
          We aim to respond within 48 hours.
        </p>
      </div>
    </div>
  );
}
