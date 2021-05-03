import setUp from "./setUpEditor.js";
import setEditorValue from "./startupEditorContent.js";
import previewController from "./preview.js";
import statusBarConf from "./statusBar.js";
import writeCode from "./onWriteCode.js";
import downloadCode from "./download.js";

// SETUP
setUp();
setEditorValue();
previewController();
statusBarConf();
writeCode(document.querySelector("#editor"));

const editor = ace.edit("editor");

const downloadBtn = document.querySelector("#downloadBtn");
downloadBtn.addEventListener('click', () => {
    const code = editor.getValue();
    localStorage.setItem("TEST", code)
    const fileName = "index.html";
    downloadCode(code, fileName);
});