const base64RE = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

function isBase64(text) {
    return text !== "" && base64RE.test(text);
}

const pList = document.querySelectorAll("p");
for(let p of pList) {
    const text = p.textContent;
    if(isBase64(text)) {
        let link = document.createElement("a");
        link.innerText = text;
        link.href = atob(text);
        link.target = "_blank";

        p.parentNode.replaceChild(link, p);
    }
}