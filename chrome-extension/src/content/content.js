(() => {
  const extractPageText = () => {
    return document.body?.innerText || "";
  };

  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message?.type === "HMS_EXTRACT_TEXT") {
      sendResponse({ text: extractPageText() });
    }
  });
})();
