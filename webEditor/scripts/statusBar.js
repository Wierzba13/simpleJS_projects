const statusBarConf = () => {
    const editor = ace.edit("editor");
    const StatusBar = require("ace/ext/statusbar").StatusBar;
    new StatusBar(editor, document.querySelector("#statusBar"));
    const lines = document.querySelector(".ace_status-indicator");
    if(lines.textContent.length == 0) lines.innerText = "0:0" ;
}
export default statusBarConf;