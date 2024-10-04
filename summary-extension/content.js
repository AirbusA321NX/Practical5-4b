// content.js

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "summarize") {
        // Get all the text content from the body
        let paragraphs = document.body.getElementsByTagName('p');
        let summary = '';

        // Grab text from the first few paragraphs as a summary
        for (let i = 0; i < Math.min(paragraphs.length, 3); i++) {
            summary += paragraphs[i].innerText + "\n";
        }

        // Send the summary back to the popup.js script
        sendResponse({summary: summary || "No content found on this page."});
    }
});
