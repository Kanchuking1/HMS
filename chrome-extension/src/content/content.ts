type ExtractTextMessage = { type: "HMS_EXTRACT_TEXT" };

function isExtractTextMessage(msg: unknown): msg is ExtractTextMessage {
  return (
    typeof msg === "object" &&
    msg !== null &&
    "type" in msg &&
    (msg as ExtractTextMessage).type === "HMS_EXTRACT_TEXT"
  );
}

function extractPageText(): string {
  return document.body?.innerText ?? "";
}

chrome.runtime.onMessage.addListener(
  (message: unknown, _sender, sendResponse: (response: { text: string }) => void) => {
    if (isExtractTextMessage(message)) {
      sendResponse({ text: extractPageText() });
    }
  }
);
