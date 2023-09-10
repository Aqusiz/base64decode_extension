const id = "base64decode"
const title = "Decode and Go"

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

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if(msg.request === "updateContextMenu") {
        chrome.contextMenus.removeAll(() => {
            chrome.contextMenus.create({
                id: id,
                title: title,
                contexts: ["selection"]
            }, () => {
                if(chrome.runtime.lastError) {
                    console.log("Error");
                }
            });
        });
    }
});

chrome.contextMenus.onClicked.addListener(onClickMenu)