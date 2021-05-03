const downloadCode = (textVal, fileName) => {
    let el = document.createElement("a");
    el.setAttribute("href", "data:html;charset=utf-8," + encodeURIComponent(textVal));
    el.setAttribute("download", fileName);
    el.style.display = "none";
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
}
export default downloadCode;