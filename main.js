function onClickMenu(info) {
    let text = info.selectionText;
    try {
        let decodedText = atob(text);
        chrome.tabs.create({url: decodedText});
    }
    catch(err) {
        console.log(err);
    }
}

function isBase64(text) {
    let reBase64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
    return reBase64.test(text);
}

chrome.contextMenus.remove('base64decode', () => {
    chrome.contextMenus.create({
        title: "복호화하기",
        id: "base64decode",
        contexts: ["selection"]
    })
})

chrome.contextMenus.onClicked.addListener(onClickMenu)