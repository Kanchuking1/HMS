# HMS Architecture

## Flow

1. Extension popup triggers extraction request.
2. Content script returns `document.body.innerText`.
3. Frontend sends documents to backend `POST /summarize`.
4. Backend chunks content and summarizes chunks in parallel.
5. Backend merges summaries and returns final cheat sheet.

## Directories

- `chrome-extension/`: Browser UI + extraction
- `backend/cmd/server/`: API entrypoint
- `backend/internal/pipeline/`: chunking + map-reduce logic
- `backend/internal/llm/`: provider abstraction
