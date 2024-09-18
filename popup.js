document.getElementById('start').addEventListener('click', () => {
    const startPage = parseInt(document.getElementById('startPage').value, 10);
    
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: (startPage) => {
                window.startPage = startPage; // Set the startPage variable in the context of run.js
            },
            args: [startPage]
        });

        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ['run.js']
        });
    });
});
