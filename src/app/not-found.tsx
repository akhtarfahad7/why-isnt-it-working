import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 text-center">
      <div className="rounded-lg bg-gray-50 border border-gray-200 p-8 max-w-md mx-auto">
        <div className="text-gray-400 text-5xl font-bold mb-4">404</div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
