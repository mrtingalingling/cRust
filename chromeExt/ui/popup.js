// When the button is clicked, inject addPageItems into current page
// To user's Curb_Watcher
addItem.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var tab = tabs[0];
        var url = tab.url;
    }, chrome.scripting.executeScript({
        // target: { tabId: tab.id },
        function: addPageItems(url),
    })
    );
});

// The body of this function will be executed as a content script inside the
// current page
function addPageItems(url) {
    // Run teh rust webscraping scraping script
    // chrome.storage.sync.get("color", ({ color }) => {
    //     document.body.style.backgroundColor = color;
    // });
}