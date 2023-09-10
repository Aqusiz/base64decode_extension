const base64RE = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

function isBase64(text) {
    console.log(text);
    console.log(base64RE.test(text));
    return base64RE.test(text);
}

document.addEventListener('selectionchange', () => {
    let selectedText = window.getSelection().toString().trim();
    if(isBase64(selectedText)) {
        chrome.runtime.sendMessage({
            request: 'updateContextMenu',
            selection: selectedText
        })
    }
});