import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-4">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We collect diagnostic session data to improve our service. This includes
          the problems you search for and the answers you provide during diagnosis.
          We do not collect personally identifying information unless you
          voluntarily provide it.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          How We Use Information
        </h2>
        <p className="text-gray-600 mb-4">
          We use collected information to improve our diagnostic trees, add new
          problems, and enhance the user experience. All data is anonymized
          before analysis.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Data Security
        </h2>
        <p className="text-gray-600 mb-4">
          We implement appropriate security measures to protect your data. However,
          no method of transmission over the Internet is 100% secure.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Third-Party Services
        </h2>
        <p className="text-gray-600 mb-4">
          We may use third-party services for hosting and analytics. These services
          may collect information as part of their normal operation.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Changes to This Policy
        </h2>
        <p className="text-gray-600 mb-4">
          We may update this privacy policy from time to time. Changes will be
          posted on this page.
        </p>
      </div>
    </div>
  );
}
