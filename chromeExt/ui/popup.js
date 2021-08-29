// When the button is clicked, inject addPageItems into current page
// To user's Curb_Watcher
addItem.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var tab = tabs[0];
        var url = tab.url;
        chrome.storage.sync.set({ url });
    });

    chrome.scripting.executeScript({
        // target: { tabId: tab.id },
        function: addPageItems(url),
    });
});

'use strict';

let GetURL = document.getElementById('GetURL');
GetURL.onclick = function (element) {
    getCurrentTabUrl();
};
document.getElementById('getText').onclick = function (element) {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString();"
    }, function (selection) {
        document.getElementById("selectedtext").innerHTML = selection[0];
    });
};
function modifyDOM() {
    //You can play with your DOM here or check URL against your regex  
    console.log('Tab script:');
    console.log(document.body);
    document.body.style.background = "blue"
    return true;
}
document.getElementById('colorChange').onclick = function (element) {
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code  
    }, function (selection) {
        alert(selection);
    });
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

// The body of this function will be executed as a content script inside the
// current page
function addPageItems(url) {
    // Run teh rust webscraping scraping script
    // chrome.storage.sync.get("color", ({ color }) => {
    //     document.body.style.backgroundColor = color;
    // });
}


// https://stackoverflow.com/questions/54727191/chrome-extension-passing-variables-from-html-file-to-js-file
// https://www.c-sharpcorner.com/article/create-chrome-extension-and-implement-basic-use-cases/
