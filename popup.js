document.getElementById('start').addEventListener('click', () => {
    const startPage = parseInt(document.getElementById('startPage').value, 10);
    const autoClearConsole = document.getElementById('autoClearConsole').checked;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: (startPage, autoClearConsole) => {
                window.startPage = startPage;
                window.autoClearConsole = autoClearConsole;
            },
            args: [startPage, autoClearConsole]
        });

        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['run.js']
        });
    });
});
