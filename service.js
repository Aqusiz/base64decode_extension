const cmId = "base64decode";
const cmTitle = "복호화하기";

function onClickMenu(info) {
    const text = info.selectionText;
    const decodedText = atob(text);

    chrome.tabs.create({url: decodedText});
};

chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
        id: cmId,
        title: cmTitle,
        contexts: ["selection"]
    }, () => {
        if(chrome.runtime.lastError) {
            
        }
    });
});

chrome.contextMenus.onClicked.addListener(onClickMenu);