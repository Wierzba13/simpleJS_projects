let fontSize = document.querySelector('#fontSize');
let fontColor = document.querySelector('#fontColor');
let bgColor = document.querySelector('#bgColor');
let font = document.querySelector('#font');
let bold = document.querySelector('#bold');
let italic = document.querySelector('#italic');
let importNote = document.querySelector('#importNote');
let download = document.querySelector('#download');
let note = document.querySelector('.note')
let edit = document.querySelector('#edit');
let main = note.querySelector('#main');
let textArea = note.querySelector('#noteArea');
let textAreaStyle = document.querySelector('.noteArea');
const menuTrigger = document.querySelector('#menu');
const navbar = document.querySelector("#navbar");

// Menu
menuTrigger.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
    document.querySelector(".fa-bars").classList.toggle("fa-times");
    if(!navbar.classList.contains("hidden")) {
        note.style.height = "calc(100vh - "+  navbar.offsetHeight +"px)";
        console.log(navbar.offsetHeight)
    } else { 
        note.style.height = 100 + "vh";
    }
});


if(localStorage['noteContent']) {
    textArea.textContent = localStorage.getItem('noteContent');
} else {
    localStorage.setItem('noteContent', textArea.value);
}
if(localStorage['fontSize']) {
    fontSize.value = localStorage.getItem('fontSize');
    textAreaStyle.style.fontSize = fontSize.value + 'px';
} else {
    localStorage.setItem('fontSize', fontSize.value);
}
if(localStorage['font']) {
    font.value = localStorage.getItem('font');
    textAreaStyle.style.fontFamily = "'" + font.value + "'";
} else {
    localStorage.setItem('font', font.value);
}
if(localStorage['fontColor']) {
    fontColor.value = localStorage.getItem('fontColor');
    textAreaStyle.style.color = fontColor.value;
} else {
    localStorage.setItem('fontColor', fontColor.value);
}
if(localStorage['bgColor']) {
    bgColor.value = localStorage.getItem('bgColor')
    textAreaStyle.style.backgroundColor = bgColor.value;
} else {
    localStorage.setItem('bgColor', bgColor.value);
}


fontSize.addEventListener('change', function() {
    textAreaStyle.style.fontSize = fontSize.value + 'px';
    localStorage.setItem('fontSize', fontSize.value);
});
font.addEventListener('change', function() {
    textAreaStyle.style.fontFamily = "'" + font.value + "'";
    localStorage.setItem('font', font.value);
});
fontColor.addEventListener('change', function() {
    textAreaStyle.style.color = this.value;
    menuTrigger.style.backgroundColor = textArea.style.color;
    localStorage.setItem('fontColor', fontColor.value);
});
bgColor.addEventListener('change', function() {
    textAreaStyle.style.backgroundColor = this.value;
    menuTrigger.style.color = textArea.style.backgroundColor;
    localStorage.setItem('bgColor', bgColor.value);
});


let makeBold = function() {
    if(this.classList.contains('clickBtn')) {
        textArea.style.fontWeight = 'normal';
        this.classList.remove('clickBtn');
    } else {
        textArea.style.fontWeight = 'bold';
        this.classList.add('clickBtn');
    }
}
bold.addEventListener('click', makeBold);
let makeItalic = function() {
    if(this.classList.contains('clickBtn')) {
        textArea.style.fontStyle = 'normal';
        this.classList.remove('clickBtn');
    } else {
        textArea.style.fontStyle = 'italic';
        this.classList.add('clickBtn');
    }
}
italic.addEventListener('click', makeItalic);

// Import file 
let file = document.querySelector('#importFile');
let importFileWindow = document.querySelector('#importFileWindow');

document.querySelector("#closeImportFileWindow").addEventListener("click", () => {
    importFileWindow.classList.add('hidden');
});

let importNoteFunc = function() {
    importFileWindow.classList.toggle('hidden');
}
importNote.addEventListener('click', importNoteFunc);
file.addEventListener('change', function() {
    let fr = new FileReader(); 
    fr.onload = function() { 
       textArea.textContent = fr.result; 
       localStorage.setItem('noteContent', textArea.value);
    } 
    fr.readAsText(this.files[0]); 
    importFileWindow.classList.add('hidden');
});

function downloadNote(textVal, fileName) {
    let el = document.createElement('a');
    el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textVal));
    el.setAttribute('download', fileName);
    el.style.display = 'none';
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
}
download.addEventListener('click', function() {
    let noteContent = textArea.value;
    let fileName = 'note.txt';
    downloadNote(noteContent, fileName);
});

let insertMode = true;
let editFunc = () => {
    if(edit.classList.contains('clickBtn')) {
        edit.classList.remove('clickBtn');
        insertMode = false;
    } else {
        edit.classList.add('clickBtn');
        insertMode = true;
    }
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
}
edit.addEventListener('click', function() {
    editFunc();
});

textArea.addEventListener('input', (e) => {
    let { value } = e.target;
    main.innerHTML = marked(value);
    localStorage.setItem('noteContent', textArea.value);
});
if(localStorage.getItem('noteContent')) {
    let txt = localStorage.getItem('noteContent');
    main.innerHTML = marked(txt);
}
textArea.addEventListener("keydown", function(e) {
    if (e.key == "Tab") {
        e.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;
    
        // set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) +"\t" + this.value.substring(end);
    
        // put caret at right position again
        this.selectionStart =
        this.selectionEnd = start + 1;
    }
});

// Setting the cursor position, because when we've data from localstorage it must be positioned after the text
if(textArea.value.length > 0) {
    textArea.selectionStart = textArea.SelectionEnd = textArea.value.length;
}

// After all operation settings 'main' colors like textArea
main.style.backgroundColor = textArea.style.backgroundColor;
main.style.color = textArea.style.color;
menuTrigger.style.backgroundColor = textArea.style.color;
menuTrigger.style.color = textArea.style.backgroundColor;
