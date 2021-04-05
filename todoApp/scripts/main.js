let taskAdd = document.querySelector('#taskAdd');
let taskDelete = document.querySelectorAll('.taskDelete');
let taskEdit = document.querySelectorAll('.taskEdit');
let taskList = document.querySelector('#taskList');
let taskCtx = document.querySelector('#newTaskCtx');
let time = document.querySelector('#time');
let date = document.querySelector('#date');
let ls = 0;
if(localStorage.getItem('ls') > 0) {
    ls = localStorage.getItem('ls');
} else {
    ls = 0;
    localStorage.setItem('ls', ls);
}


function getTime() {
    let accDate = new Date;
    let h = accDate.getHours();
    let m = accDate.getMinutes();
    let s = accDate.getSeconds();
    time.innerHTML = `${h}:${m}:${s}`;
    if(h < 10) {
        time.innerHTML = `0${h}:${m}:${s}`;
    } else if(m < 10) {
        time.innerHTML = `${h}:0${m}:${s}`;
    } else if(s < 10) {
        time.innerHTML = `${h}:${m}:0${s}`;
    } else {
        time.innerHTML = `${h}:${m}:${s}`;
    }
}
const setTime = setInterval(() => {
    getTime();
}, 1000);
function getDate() {
    let accDate = new Date;
    let w = accDate.getDay();
    let d = accDate.getDate();
    let m = accDate.getMonth() + 1;
    let y = accDate.getFullYear();
    if(d < 10) {
        date.innerHTML = `0${d}.${m}.${y}`;
    } else if(m < 10) {
        date.innerHTML = `${d}.0${m}.${y}`;
    } else {
        date.innerHTML = `${d}.${m}.${y}`;
    }
}
const setDate = setInterval(() => {
    getDate();
}, 1000);



function createTask(taskCtx, count) {
    let el = document.createElement('div');
    let span = document.createElement('span');
    let trashIcon = document.createElement('i');
    let editIcon = document.createElement('i');
    el.classList.add('task');
    el.dataset.ls = count;
    span.textContent = taskCtx;
    trashIcon.classList.add('fas');
    trashIcon.classList.add('fa-trash');
    trashIcon.classList.add('taskDelete');
    editIcon.classList.add('far');
    editIcon.classList.add('fa-edit');
    editIcon.classList.add('taskEdit');
    taskList.appendChild(el);
    el.appendChild(span);
    span.appendChild(trashIcon);
    span.appendChild(editIcon);
}
function saveToLS(ctx) {
    localStorage.setItem(`task-${ls}`, ctx);
    ls++;
    localStorage.setItem('ls', ls);
}
(function getFromLS() {
    for(let i = 0; i < ls; i++) {
        if(localStorage.getItem(`task-${i}`) != null) {
            let tsk = localStorage.getItem(`task-${i}`);
            let c = `${i}`;
            createTask(tsk, c);
        }
    }
})();
let newTask = function(ctx) {
    if(taskCtx.value != '') {
        createTask(ctx, localStorage.getItem('ls'));
        saveToLS(taskCtx.value);
    }
    taskCtx.value = '';
}


taskAdd.addEventListener('click', () => newTask(taskCtx.value));
taskCtx.addEventListener('keydown', e => 
{if(e.keyCode == 13) newTask(taskCtx.value);});
taskList.addEventListener("click", e => {
    if (e.target.classList.contains("taskDelete")) {
        let child = e.target.parentElement;
        let el = child.parentElement;
        let t = el.getAttribute('data-ls');
        localStorage.removeItem(`task-${t}`);
        // e.target.closest('.task').remove();
        el.remove();
    }

    if (e.target.classList.contains("taskEdit")) {
        let child = e.target.parentElement;
        let el = child.parentElement;
        let t = el.getAttribute('data-ls');
        
        let taskNewContent = prompt("Zmien tresc taska: ", localStorage.getItem(`task-${t}`));
        if(taskNewContent.length > 0) {
            localStorage.setItem(`task-${t}`, taskNewContent);
            createTask(taskNewContent, localStorage.getItem('ls'));
            el.remove();
            console.log(taskNewContent);
        } else {
            alert("Nie mozna dodac pustego zadania!");
        }
    }
});