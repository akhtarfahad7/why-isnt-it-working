import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Guidelines",
  description: "Important safety information for using our diagnostic tool.",
};

export default function SafetyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Safety Guidelines</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-4">
          Your safety is our top priority. Please read these guidelines before
          performing any troubleshooting steps.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          Safety Levels
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <h3 className="font-semibold text-green-800">SAFE</h3>
            <p className="text-sm text-green-700 mt-1">
              Actions that do not expose the user to meaningful danger. You can
              proceed with standard precautions.
            </p>
          </div>
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <h3 className="font-semibold text-yellow-800">CAUTION</h3>
            <p className="text-sm text-yellow-700 mt-1">
              Actions that require reasonable care. Follow instructions carefully
              and stop if something doesn&apos;t seem right.
            </p>
          </div>
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
            <h3 className="font-semibold text-orange-800">HIGH</h3>
            <p className="text-sm text-orange-700 mt-1">
              Potentially dangerous actions that should normally be performed by
              qualified professionals. We recommend seeking professional help.
            </p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <h3 className="font-semibold text-red-800">STOP</h3>
            <p className="text-sm text-red-700 mt-1">
              Stop troubleshooting immediately and seek professional help. Do not
              attempt further diagnostics.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          General Safety Rules
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Never attempt electrical repairs if you are not qualified.</li>
          <li>Always unplug devices before inspecting internal components.</li>
          <li>Do not open gas appliances or fuel system components.</li>
          <li>Keep flammable materials away when working on vehicles.</li>
          <li>If you smell gas, leave the area immediately and call emergency services.</li>
          <li>When in doubt, stop and consult a professional.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          When to Stop
        </h2>
        <p className="text-gray-600 mb-4">
          You should stop troubleshooting and seek professional help if:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>You encounter live electrical wires or components.</li>
          <li>You smell gas or detect a fuel leak.</li>
          <li>You are unsure about any step in the process.</li>
          <li>The problem involves airbags, brake systems, or other safety-critical components.</li>
          <li>Any step is marked as HIGH or STOP safety level.</li>
        </ul>
      </div>
    </div>
  );
}
