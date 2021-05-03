import setDefaultVal from "./editorConf-setDefaultVal.js";

const themeInp = document.querySelector("#theme");
const fontFamilyInp = document.querySelector("#fontfamily");
const fontSizeInp = document.querySelector("#fontsize");
const snippetsInp = document.querySelector("#snippets");
const emmetInp = document.querySelector("#emmet");
const keybindingsInp = document.querySelector("#keybinds");


setDefaultVal("themeName", "monokai");
setDefaultVal("fontFamily", "Cascadia Code");
setDefaultVal("fontSize", 16);
setDefaultVal("snippets", true);
setDefaultVal("emmet", true);
setDefaultVal("keybinding", "vscode");

// Setting values
themeInp.value = localStorage.getItem("themeName");
fontFamilyInp.value = localStorage.getItem("fontFamily");
fontSizeInp.value = localStorage.getItem("fontSize");
snippetsInp.checked  = localStorage.getItem("snippets") == "true";
emmetInp.checked  = localStorage.getItem("emmet") == "true";
keybindingsInp.value  = localStorage.getItem("keybinding");



// Input controllers

themeInp.addEventListener("change", () => {
    localStorage.setItem("themeName", themeInp.value);
})
fontFamilyInp.addEventListener("input", () => {
    localStorage.setItem("fontFamily", fontFamilyInp.value)
});
fontSizeInp.addEventListener("input", () => {
    localStorage.setItem("fontSize", fontSizeInp.value)
});
snippetsInp.addEventListener("change", () => {
    localStorage.setItem("snippets", snippetsInp.checked);
})
emmetInp.addEventListener("change", () => {
    localStorage.setItem("emmet", emmetInp.checked);
})
keybindingsInp.addEventListener("change", () => {
    localStorage.setItem("keybinding", keybindingsInp.value);
})