const previewController = () => {
    const editor = ace.edit("editor");
    const previewContent = document.querySelector("#preview").contentWindow.document;
    const updatePreview = () => {
        previewContent.open();
        previewContent.write(editor.getValue());
        previewContent.close();
    }
    // updatePreview()
    editor.addEventListener("input", updatePreview);
}
export default previewController;