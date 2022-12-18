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
    var pswd = [];

    if (lower.checked == true) {
      var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      lowers.push.apply(pswd, lowers);
    }
    if (symbol.checked == true) {
      var symbols = ["?", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "+", "=", "[", "]", "{", "}", ";", ":", "<", ">"];
      symbols.push.apply(pswd, symbols);
    }
    if (number.checked == true) {
      var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
      numbers.push.apply(pswd, numbers);
    }
    if (upper.checked == true) {
      var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      uppers.push.apply(pswd, uppers);
    }
    for (var i = 0; i < length; i++) {
      let char = pswd[Math.floor(Math.random() * pswd.length)];
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

function drawMeter(strength, color1, color2, color3, color4) {
  pincel.font='20px Kanit';
  pincel.fillStyle='white';
  pincel.fillText(strength, 0, 25);

  pincel.fillStyle = color1;
  pincel.fillRect(100, 0, 15, 30);
  pincel.strokeStyle = 'white';
  pincel.strokeRect(100, 0, 15, 30);

  pincel.fillStyle = color2;
  pincel.fillRect(125, 0, 15, 30);
  pincel.strokeStyle = 'white';
  pincel.strokeRect(125, 0, 15, 30);

  pincel.fillStyle = color3;
  pincel.fillRect(150, 0, 15, 30);
  pincel.strokeStyle = 'white';
  pincel.strokeRect(150, 0, 15, 30);

  pincel.fillStyle = color4;
  pincel.fillRect(175, 0, 15, 30);
  pincel.strokeStyle = 'white';
  pincel.strokeRect(175, 0, 15, 30);
}

function calculateStrength(){
  if (length <= 5){
    drawMeter('Very Weak', '#facb67','#18171f','#18171f','#18171f');
  }
  if (length > 5 && length <= 10){
    drawMeter('Weak', '#facb67','#facb67','#18171f','#18171f');
  }
  if (length > 10 && length <= 15){
    drawMeter('Medium', '#facb67','#facb67','#facb67','#18171f');
  }
  if (length > 15 && length <= 20){
    drawMeter('Strong', '#facb67','#facb67','#facb67','#facb67');
  }
}

drawMeter('','#18171f','#18171f','#18171f','#18171f');

generateBtn.addEventListener('click', function(){
  if (lower.checked == false && symbol.checked == false && number.checked == false && upper.checked == false){
    drawMeter('','#18171f','#18171f','#18171f','#18171f');
    alert("Please include at least one type of character!");
    pincel.fillStyle = '#18171f';
    pincel.fillRect(0, 0, 100, 30);
    output.value = '';
  } else {
    generate();
    pincel.fillStyle = '#18171f';
    pincel.fillRect(0, 0, 100, 30);
    calculateStrength();
  }
});

copyButton.addEventListener('click', function(){
  copyFunction();
});