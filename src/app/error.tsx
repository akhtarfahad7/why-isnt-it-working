"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 text-center">
      <div className="rounded-lg bg-red-50 border border-red-200 p-8 max-w-md mx-auto">
        <div className="text-red-600 text-4xl mb-4">!</div>
        <h2 className="text-xl font-semibold text-red-800 mb-2">
          Something went wrong
        </h2>
        <p className="text-sm text-red-700 mb-6">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="rounded-lg bg-red-600 px-4 py-2 text-white text-sm font-medium hover:bg-red-700"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-lg bg-gray-200 px-4 py-2 text-gray-800 text-sm font-medium hover:bg-gray-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
