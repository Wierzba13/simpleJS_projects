const writeCode = (editor) => {
    const codeController = () => {
        const editor = ace.edit("editor");
        let code = editor.getValue();
        localStorage.setItem("editorCtx", code);
    }
    editor.addEventListener("input", codeController);
    editor.addEventListener("keydown", codeController);
}
export default writeCode;