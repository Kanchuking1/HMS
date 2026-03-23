import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState("Idle");

  const handleGenerate = async () => {
    setStatus("Extracting text...");

    // Placeholder workflow for day-wise implementation:
    // 1) Ask content script for extracted text
    // 2) Send text to backend /summarize
    // 3) Render response in structured sections
    setTimeout(() => {
      setStatus("Ready for backend integration");
    }, 600);
  };

  return (
    <main className="w-80 p-3 font-sans">
      <h1 className="m-0 text-base font-semibold text-slate-900">HMS Cheat Sheet</h1>
      <p className="mt-2 text-sm text-slate-700">
        Extract content and generate exam-ready notes.
      </p>
      <button
        onClick={handleGenerate}
        className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
      >
        Generate Cheat Sheet
      </button>
      <p className="mt-2 text-xs text-slate-600">Status: {status}</p>
    </main>
  );
}
