# Chrome Extension (Frontend)

This folder contains the extension UI and browser-side scripts.

## Planned Components

- `public/manifest.json`: Manifest v3 configuration
- `src/popup/`: Popup React UI
- `src/content/`: Content scripts (document extraction)
- `src/background/`: Service worker/background scripts

## Commands

```bash
npm install
npm run typecheck
npm run build
```

Load `dist/` as an unpacked extension in Chrome.

Stack: **React + Vite + TypeScript + Tailwind CSS**.
