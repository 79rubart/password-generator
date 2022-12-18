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
var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');

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

function drawMeter(strength, cor1, cor2, cor3, cor4) {
  pincel.font='30px Kanit';
  pincel.fillStyle='white';
  pincel.fillText(strength, 50, 0);

  pincel.fillStyle = cor1;
  pincel.fillRect(100, 0, 15, 30);
  pincel.strokeStyle = 'white';
  pincel.strokeRect(100, 0, 15, 30);

  pincel.fillStyle = cor2;
  pincel.fillRect(125, 0, 15, 30);
  pincel.strokeStyle = 'white';
  pincel.strokeRect(125, 0, 15, 30);

  pincel.fillStyle = cor3;
  pincel.fillRect(150, 0, 15, 30);
  pincel.strokeStyle = 'white';
  pincel.strokeRect(150, 0, 15, 30);

  pincel.fillStyle = cor4;
  pincel.fillRect(175, 0, 15, 30);
  pincel.strokeStyle = 'white';
  pincel.strokeRect(175, 0, 15, 30);
}

drawMeter('weak','#18171f','#18171f','#18171f','#18171f');

generateBtn.addEventListener('click', function(){
    generate();
});

copyButton.addEventListener('click', function(){
  copyFunction();
});