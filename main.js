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

chrome.contextMenus.remove('base64decode', () => {
    chrome.contextMenus.create({
        title: "복호화하기",
        id: "base64decode",
        contexts: ["selection"]
    })
})

chrome.contextMenus.onClicked.addListener(onClickMenu)