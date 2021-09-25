// https://stackoverflow.com/questions/8499376/chrome-extension-get-entire-text-content-of-the-current-tab#8499444

function getText() {
    return document.body.innerText
}
function getHTML() {
    return document.body.outerHTML
}
console.log(getText());             //Gives you all the text on the page
console.log(getHTML());             //Gives you the whole HTML of the page
