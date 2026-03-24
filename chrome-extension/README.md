# Chrome Extension (Frontend)

This folder contains the extension UI and browser-side scripts.

## Sprint progress

- **Day 1 (done):** Vite + React + TypeScript popup, Manifest v3, primary action **Generate Cheat Sheet**. Load `dist/` unpacked — no extra permissions yet.
- **Day 2 (next):** Content script, tab text extraction, messaging; expand `manifest.json` and Vite inputs for `content` + `background` bundles.

## Planned Components

- `public/manifest.json`: Manifest v3 configuration
- `src/popup/`: Popup React UI
- `src/content/`: Content scripts (document extraction) — wired in Day 2
- `src/background/`: Service worker/background scripts — wired in Day 2

## Commands

```bash
npm install
npm run typecheck
npm run build
```

Load `dist/` as an unpacked extension in Chrome.

Stack: **React + Vite + TypeScript + Tailwind CSS**.
