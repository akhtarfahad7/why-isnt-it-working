import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimer about our diagnostic service.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h1>
      <div className="prose prose-gray max-w-none">
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6 mb-8">
          <p className="text-yellow-800 font-semibold text-lg">
            This tool is for informational purposes only and is not a substitute
            for professional diagnosis or repair.
          </p>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          No Professional Advice
        </h2>
        <p className="text-gray-600 mb-4">
          The information provided by this diagnostic tool is general in nature
          and is not intended to be a substitute for professional advice from a
          qualified technician, electrician, mechanic, or other professional.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Accuracy of Information
        </h2>
        <p className="text-gray-600 mb-4">
          While we strive to provide accurate and up-to-date information, we make
          no representations or warranties of any kind about the completeness,
          accuracy, or reliability of the information provided.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Your Responsibility
        </h2>
        <p className="text-gray-600 mb-4">
          You are responsible for your own safety when performing any
          troubleshooting or repair steps. Always follow proper safety procedures
          and consult a professional when in doubt.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          External Links
        </h2>
        <p className="text-gray-600 mb-4">
          This website may contain links to external sites. We are not responsible
          for the content or practices of these sites.
        </p>
      </div>
    </div>
  );
}
