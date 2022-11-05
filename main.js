var generateBtn = document.getElementById('generate');
var symbol = document.getElementById("include-symbols");
var number = document.getElementById("include-numbers");
var upper = document.getElementById("include-uppers");
var lower = document.getElementById("include-lowers");
var length = document.getElementById("characterlength").value;
var output = document.getElementById("password-output");
var cb = document.querySelectorAll(".cb");
var checkboxes = document.querySelectorAll('.checkbox');
var copyButton = document.getElementById("copy");
var strengthLabel = document.getElementById("strength-level").value;

function updateTextInput(val) {
  length = val;
}

function generate() {
    output.value = '';
    var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (symbol.checked == true) {
      var symbols = ["?", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "+", "=", "[", "]", "{", "}", ";", ":", "<", ">"];
      symbols.push.apply(lowers, symbols);
    }
    if (number.checked == true) {
      var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
      numbers.push.apply(lowers, numbers);
    }
    if (upper.checked == true) {
      var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      uppers.push.apply(lowers, uppers);
    }
    for (var i = 0; i < length; i++) {
      let char = lowers[Math.floor(Math.random() * lowers.length)];
      output.value = output.value + char;
    }
}

function copyFunction() {
  var copy = output;

  copy.select();
  copy.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copy.value);

  alert("Password copied to clipboard: " + copy.value);
}

generateBtn.addEventListener('click', function(){
    generate();
});

copyButton.addEventListener('click', function(){
  copyFunction();
});