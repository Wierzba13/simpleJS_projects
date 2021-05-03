const setUp = () => {
    const editor = ace.edit("editor");
    editor.setOptions({
        theme: `ace/theme/${localStorage.getItem("themeName")}`,
        fontFamily: `${localStorage.getItem("fontFamily")}`,
        fontSize: `${localStorage.getItem("fontSize")}px`,
        enableEmmet: localStorage.getItem("emmet") == "true"
    });
    editor.getSession().setUseWrapMode(true); // row wrap
    editor.getSession().setMode("ace/mode/html");
    editor.setShowPrintMargin(true);
    editor.setKeyboardHandler(`ace/keyboard/${localStorage.getItem("keybinding")}`);
    ace.config.loadModule("ace/ext/language_tools", function() {
    editor.setOptions({
        enableBasicAutocompletion: localStorage.getItem("snippets") == "true",
        enableSnippets: localStorage.getItem("snippets") == "true"
        })
    });
}
export default setUp;