const command = document.querySelector("#command");
const txt = [
    "Example text to display",
    "Have a nice day!",
    "Write by github/Wierzba13",
    "Raul Wierzbinski"
];
let index = 0;
let txtIndex = 0;
let char = 0;
let waiting = true;

const wait = (millisecond) => {
    return new Promise(resolve => setTimeout(resolve, millisecond));
}

const writing = async () => {
    command.textContent += txt[index][char];
    char++;
    if(char >= txt[index].length) {
        char = 0;
        index++;
        await wait(5000);

        command.textContent = "";
    }
    if(index === txt.length) {
        index = 0; // Wypisywanie w kolko
        // return; // Wypisanie kazdego tekstu tylko raz
    }
    setTimeout(writing, 100);
}
writing();