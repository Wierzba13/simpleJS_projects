let passInp = document.querySelector('#pass');
let passLengthInp = document.querySelector('#passLength');
let numbers = document.querySelector('#numbers');
let specialCharsCheck = document.querySelector('#specialChars');
let generateBtn = document.querySelector('#generate');
let numbersChars = '1234567890';
let special = '!@#$%().;';
let allChars = 'abcdefghijklmnoprstuwxyzABCDEFGHIJKLMNOPRSTUWXYZ1234567890!@#$%().;';

numbers.addEventListener('change', () => {
    if(numbers.checked) {
        allChars = allChars.concat(numbersChars);
    } else {
        allChars = allChars.replace(`${numbersChars}`, '');
    }
});
specialCharsCheck.addEventListener('change', () => {
    if(specialCharsCheck.checked) {
        allChars = allChars.concat(special);
    } else {
        allChars = allChars.replace(`${special}`, '');
    }
});

let generatePass = () => {
    let pass = '';
    for(let i = 0; i < passLengthInp.value ; i++) {
        let char = Math.floor(Math.random() * allChars.length);
        pass += allChars.substring(char, char + 1);
    }
    passInp.value = pass;
    passInp.disabled = false;
}
generateBtn.addEventListener('click', generatePass);
passInp.addEventListener('click', () => {
    passInp.select();
    document.execCommand('copy');
});