# 📘 PLAN.md HMS — Chrome Extension Cheat Sheet Generator (8-Day Sprint)

## 🎯 Goal

Build a Chrome extension that extracts content from multiple documents (e.g., Google Docs), processes them using an LLM backend (Go), and generates a structured exam cheat sheet.

---

# 🧱 Tech Stack Overview

## Frontend (Chrome Extension)

* React + Vite
* TailwindCSS
* Chrome Extension Manifest v3

## Backend (Go)

* Go (Gin or Fiber)
* REST API
* Goroutines for parallel processing

## LLM Layer

* OpenAI API (or Claude)

## Optional

* Redis (caching)
* FAISS (vector search for RAG later)

---

# 🗓️ 8-Day Execution Plan

## ✅ Day 1: Chrome Extension Setup

### Goals

* Create extension skeleton
* Add popup UI

### Tasks

* Initialize project with Vite + React
* Create `manifest.json`
* Setup popup UI with:

  * Button: "Generate Cheat Sheet"

### Tools

* Vite
* React
* Chrome Extension APIs

### Deliverable

* Clickable extension with basic UI

---

## ✅ Day 2: Content Extraction (Google Docs)

### Goals

* Extract document text from active tab

### Tasks

* Add content script
* Scrape page text using:

  ```js
  document.body.innerText
  ```
* Send extracted text to popup

### Tools

* Chrome content scripts

### Deliverable

* Ability to capture raw text from a doc

---

## ✅ Day 3: Go Backend Setup

### Goals

* Build backend API

### Tasks

* Initialize Go module
* Setup server using Gin or Fiber
* Create endpoint:

  * POST /summarize

### Tools

* Go
* Gin (recommended) or Fiber

### Deliverable

* Running backend with test endpoint

---

## ✅ Day 4: Chunking + Parallel Processing

### Goals

* Handle large documents

### Tasks

* Implement chunking logic:

  * Chunk size: ~1000 tokens (~750 words)
  * Overlap: ~100 tokens
* Use goroutines to process chunks in parallel

### Tools

* Go concurrency (goroutines, channels)

### Deliverable

* Backend can split and process multiple chunks

---

## ✅ Day 5: LLM Integration

### Goals

* Summarize chunks using LLM

### Tasks

* Integrate OpenAI API
* Write structured prompt
* Process each chunk → summary

### Example Prompt

```
You are helping a student prepare for exams.
Extract key concepts, definitions, and formulas.
Return structured bullet points.
```

### Tools

* OpenAI Go SDK (or HTTP calls)

### Deliverable

* Chunk summaries returned from LLM

---

## ✅ Day 6: Multi-Document Merge + Final Summary

### Goals

* Combine summaries into final cheat sheet

### Tasks

* Merge all chunk summaries
* Run second-pass summarization
* Deduplicate repeated concepts

### Tools

* Go
* LLM for final summarization

### Deliverable

* Clean final cheat sheet output

---

## ✅ Day 7: UI Integration + Display

### Goals

* Show results in extension

### Tasks

* Send API response to frontend
* Build UI sections:

  * Key Concepts
  * Definitions
  * Formulas
* Add loading states

### Tools

* React
* TailwindCSS

### Deliverable

* End-to-end working system

---

## ✅ Day 8: Polish + Advanced Features

### Goals

* Improve UX and add standout features

### Tasks

* Add export options:

  * Markdown
  * PDF
* Add "Likely Exam Questions" generation
* Improve formatting
* Add caching (Redis)

### Optional Advanced

* Add RAG with FAISS
* Add flashcard generation

### Deliverable

* Production-ready MVP

---

# 🧠 Backend Design (Go)

## API Design

### POST /summarize

Request:

```
{
  "documents": ["text1", "text2"]
}
```

Response:

```
{
  "cheat_sheet": "..."
}
```

---

## Core Pipeline

1. Receive documents
2. Clean text
3. Chunk documents
4. Parallel summarization (goroutines)
5. Merge summaries
6. Final LLM pass
7. Return structured output

---

# ⚠️ Risks & Mitigation

| Risk               | Solution              |
| ------------------ | --------------------- |
| Large input size   | Chunking + map-reduce |
| High latency       | Parallel processing   |
| API cost           | Cache responses       |
| Messy scraped text | Preprocess + clean    |

---

# 🚀 Future Improvements

* Google Docs API integration (OAuth)
* Notion export
* Vector search (FAISS)
* Custom prompts per subject
* Offline/local LLM support

---

# 💡 Resume Positioning

Built a Chrome extension that performs multi-document semantic summarization using a Go-based concurrent backend and LLM-driven map-reduce pipelines to generate structured exam cheat sheets.

---

# ✅ Final Outcome

A polished Chrome extension that:

* Extracts document content
* Processes multiple inputs
* Generates structured cheat sheets
* Demonstrates strong backend + LLM + product skills

---

Let's build 🚀
