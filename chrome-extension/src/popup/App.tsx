import { useState } from "react";

export default function App(): JSX.Element {
  const [busy, setBusy] = useState(false);
  const [hint, setHint] = useState<string | null>(null);

  const handleGenerate = async (): Promise<void> => {
    setBusy(true);
    setHint(null);
    await new Promise((r) => setTimeout(r, 450));
    setHint("Day 1 complete: this is the UI shell. Day 2 wires text capture from the active tab.");
    setBusy(false);
  };

  return (
    <main className="w-80 border-t-4 border-indigo-600 bg-white p-4 font-sans shadow-sm">
      <p className="m-0 text-[10px] font-semibold uppercase tracking-wide text-indigo-600">HMS</p>
      <h1 className="m-0 mt-1 text-base font-semibold text-slate-900">Cheat sheet generator</h1>
      <p className="mt-2 text-sm leading-snug text-slate-600">
        Turn long docs into a compact exam-focused outline. Open a page you want to study, then use the
        button below.
      </p>
      <button
        type="button"
        onClick={() => void handleGenerate()}
        disabled={busy}
        aria-busy={busy}
        className="mt-4 w-full rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {busy ? "Please wait…" : "Generate Cheat Sheet"}
      </button>
      {hint ? (
        <p className="mt-3 rounded-md bg-slate-50 p-2 text-xs leading-relaxed text-slate-700">{hint}</p>
      ) : null}
    </main>
  );
}
