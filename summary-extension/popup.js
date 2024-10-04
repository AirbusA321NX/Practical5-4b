// popup.js

document.getElementById('summarize-btn').addEventListener('click', function() {
    // Send a message to the content script to summarize the page
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "summarize"}, function(response) {
            if (response) {
                document.getElementById('summary').innerText = response.summary;
            } else {
                document.getElementById('summary').innerText = 'Could not summarize the page.';
            }
        });
    });
});
