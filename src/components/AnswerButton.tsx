"use client";

interface AnswerButtonProps {
  text: string;
  onClick: () => void;
}

export function AnswerButton({ text, onClick }: AnswerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg border border-gray-300 bg-white px-6 py-4 text-left text-base font-medium text-gray-900 transition-colors hover:bg-blue-50 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-100"
    >
      {text}
    </button>
  );
}
