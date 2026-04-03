// Rust.macro_railroad_ext.then(function(main) {
//     main.load();
// });

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});

// chrome.browserAction.onClicked.addListener(function () {
//     chrome.tabs.executeScript(null, { file: "services/content.js" });
// });
