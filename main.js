let passwordOutput = document.querySelector('.password-output');
let copyPaste = document.querySelector('.copy-paste');
let characterLength = document.getElementById('characterlength').value;
let includeUpper = document.querySelector('.include-uppercase');
let includeLower = document.querySelector('.include-lowercase');
let includeNumbers = document.querySelector('.include-numbers');
let includeSymbols = document.querySelector('.include-symbols');
let generateBtn = document.querySelector('.generate');
let rangeSlider = document.getElementById('rangeslider');

function generate(){
    passwordOutput.value = '';

    if (includeUpper.checked == false && includeLower.checked == false && includeNumbers.checked == false && includeSymbols.checked == false){
        $(includeLower).click();
    }
    if (includeLower.checked == true) {
        var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        lowerLetters.push.apply(lowerLetters);
    }
    if (includeUpper.checked == true) {
        var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        upperLetters.push.apply(upperLetters);
    }
    if (includeNumbers.checked == true) {
        var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        numbers.push.apply(numbers);
    }
    if (includeSymbols.checked == true) {
        var symbols = ["?", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "+", "=", "[", "]", "{", "}", ";", ":", "<", ">"];
        symbols.push.apply(symbols);
    }
    for (var i = 0; i < length; i++) {
        let char = lowerLetters[Math.floor(Math.random() * lowerLetters.characterLength)];
        passwordOutput.value = passwordOutput.value + char;
    }
}

generateBtn.addEventListener('click', function(){
    generate();
});