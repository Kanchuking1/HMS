# HMS - Cheat Sheet Generator

Chrome extension + Go backend project to extract study content from documents and generate structured exam cheat sheets using an LLM pipeline.

## Repository Structure

- `chrome-extension/`: React + Vite + TypeScript extension app (Manifest v3)
- `backend/`: Go API and summarization pipeline
- `docs/`: Architecture and API notes
- `PLAN.md`: 8-day sprint execution plan

## Planned API

- `POST /summarize`

Request:

```json
{
  "documents": ["text1", "text2"]
}
```

Response:

```json
{
  "cheat_sheet": "..."
}
```

## Next Setup Steps

1. Add OpenAI/Claude provider keys in local `.env`.
2. Implement chunking and LLM provider integration.
3. Wire popup request flow to backend `/summarize`.

## Run Locally

### Backend

```bash
cd backend
go run ./cmd/server
```

API runs on `http://localhost:8080`.

### Chrome Extension Build

```bash
cd chrome-extension
npm install
npm run build
```

Then load `chrome-extension/dist` as an unpacked extension in Chrome.

**Day 1:** popup-only extension (no host permissions). **Day 2** adds the content script and related manifest fields.
