const cmId = "context1";
const cmId2 = "context2";
const cmTitle = "복호화하기";
const cmTitle2 = "2번 복호화하기";

function onClickMenu(info) {
    const text = info.selectionText;
    const decodedText = atob(text);

    chrome.tabs.create({url: decodedText});
};

function onClickMenu2(info) {
    const text = info.selectionText;
    const decodedTwiceText = atob(atob(text));

    chrome.tabs.create({url: decodedTwiceText});
}

chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
        id: cmId,
        title: cmTitle,
        contexts: ["selection"]
    });

    chrome.contextMenus.create({
        id: cmId2,
        title: cmTitle2,
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info) => {
    if(info.menuItemId === cmId) onClickMenu(info);
    if(info.menuItemId == cmId2) onClickMenu2(info);
});