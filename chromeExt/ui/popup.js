// The body of this function will be executed as a content script inside the
// current page
// When the button is clicked, inject addPageItems into current page
// To user's Curb_Watcher
'use strict';
let getURL = document.getElementById('getURL');
getURL.onclick = function (element) {
    getCurrentTabUrl();
};
function getCurrentTabUrl() {
    var queryInfo = {
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(queryInfo, (tabs) => {
        var tab = tabs[0];
        var url = tab.url;
        document.getElementById('url').innerHTML = url;
    });
}

// Get selected content
// https://stackoverflow.com/questions/68542700/getting-selected-text-in-a-chrome-extension
document.getElementById('getText').onclick = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    let result;
    try {
        [{ result }] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => getSelection().toString(),
        });
    } catch (e) {
        return; // ignoring an unsupported page like chrome://extensions
    }
    document.getElementById("selectedtext").innerHTML = result;
    // document.body.append('Selection: ' + result);
};


// Save selected content
let addItem = document.getElementById("addItem");
// addItem.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({
//         active: true,
//         currentWindow: true
//     }, function (tabs) {
//         var tab = tabs[0];
//         var url = tab.url;
//         chrome.storage.sync.set({ url });
//     });

//     chrome.scripting.executeScript({
//         // target: { tabId: tab.id },
//         function: addPageItems(url),
//     });
// });
function addPageItems(url) {
    // Run the rust webscraping scraping script
    // chrome.storage.sync.get("color", ({ color }) => {
    //     document.body.style.backgroundColor = color;
    // });
}

// https://stackoverflow.com/questions/54727191/chrome-extension-passing-variables-from-html-file-to-js-file
// https://www.c-sharpcorner.com/article/create-chrome-extension-and-implement-basic-use-cases/
// https://stackoverflow.com/questions/18049576/simple-highlight-text-chrome-extension
