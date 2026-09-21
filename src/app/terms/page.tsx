import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using our service.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-4">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Acceptance of Terms
        </h2>
        <p className="text-gray-600 mb-4">
          By using this website, you agree to these terms of service. If you do
          not agree, please do not use the service.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Use of Service
        </h2>
        <p className="text-gray-600 mb-4">
          This service is provided for informational purposes only. The diagnostic
          information provided is general in nature and may not apply to your
          specific situation.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-4">
          We are not liable for any damages or losses resulting from the use of
          this service. Always consult a qualified professional for repairs and
          maintenance.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Intellectual Property
        </h2>
        <p className="text-gray-600 mb-4">
          All content on this website, including text, graphics, logos, and
          software, is the property of Why Isn&apos;t It Working? and is protected
          by copyright laws.
        </p>
      </div>
    </div>
  );
}
