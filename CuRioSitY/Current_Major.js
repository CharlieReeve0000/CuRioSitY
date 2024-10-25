let arr_i = 0;
let arr = ["C", "c", "Ç", "C", "Ç", "©"];
let arr2 = ["Ú", "u", "Ü", "U", "u", "v"];
let arr3 = ["r", "R", "r", "r", "R", "R"];
let arr4 = ["í", "I", "1", "i", "1", "i"];
let arr5 = ["O", "o", "8", "ö", "0", "ó"];
let arr6 = ["s", "§", "s", "S", "$", "S"];
let arr7 = ["i", "!", "i", "1", "I", "í"];
let arr8 = ["t", "T", "t", "T", "t", "T"];
let arr9 = ["y", "Y", "ý", "y", "Y", "ý"];
let SLOW_DELAY = 800;
let FAST_DELAY = 8000;
let DELAY_INCREMENT = 20;
let delay = SLOW_DELAY;
let nextTime;
let state = 1;
let clickedLetter = false;
let bellFont, drukFont, uchenFont, lemonFont, copperFont, pixFont, misokaFont, akzFont, albas;
let positions = []; 

function preload() {
  bellFont = loadFont('data/Bell_MT.ttf'); // for 'o'
  drukFont = loadFont('data/DrukWide-Heavy-Trial.otf'); // for 'u'
  uchenFont = loadFont('data/Uchen-Regular.ttf'); // for 'r'
  lemonFont = loadFont('data/LEMONMILK-LightItalic.otf'); // for 'i'
  pixFont = loadFont('data/Pixellari.ttf'); // for 's'
  misokaFont = loadFont('data/Misoka.ttf'); // for 'i' 2
  akzFont = loadFont('data/Akzidenz-grotesk-roman.ttf'); // for 't'
  albasFont = loadFont('data/ALBAS___.TTF'); // for 'y'
  copperFont = loadFont('data/Copperplate_Gothic_Bold_Regular.ttf'); // for 'c'
}

function setup() {
  createCanvas(1910, 919);
  calculateLetterPositions();
  nextTime = millis() + delay;
}

function draw() {
  if (clickedLetter) {
    background('black'); 
    fill('#0f0'); 
    textSize(20); 
    textFont(pixFont); 
    textAlign(LEFT, TOP); 
    text("you have been hacked", 10, 10); 
    text("codewords", 1805, 10);
    fill('#0f0');
    textSize(20);
    textFont(pixFont);
    textAlign(RIGHT, TOP);
    return;
  }

  background('white');

  if (millis() > nextTime && state != 0) {
    if (state == 1) {
      if (delay > FAST_DELAY) {
        delay -= DELAY_INCREMENT;
      }
    } else if (state == 2) {
      delay += DELAY_INCREMENT;
      if (delay > SLOW_DELAY) {
        state = 0;
      }
    }

    arr_i++; 
    arr_i %= arr.length;
    nextTime = millis() + delay;
  }

  textAlign(CENTER, CENTER);
  textSize(100);
  noStroke();
  fill("black");

  let patterns = [arr, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];
  
  for (let i = 0; i < patterns.length; i++) {
    let char = patterns[i][arr_i];
    applyFontForChar(char, i); 
    text(char, positions[i], height / 2);
  }
}

function applyFontForChar(char, index) {
  if (char.toLowerCase() === 'c') {
    textFont(copperFont); // for 'c'
  } else if (char.toLowerCase() === 'o') {
    textFont(bellFont); // for 'o'
  } else if (char.toLowerCase() === 'u') {
    textFont(drukFont); // for 'u'
  } else if (char.toLowerCase() === 'r') {
    textFont(uchenFont); // for 'r'
  } else if (char.toLowerCase() === 's') {
    textFont(pixFont); // for 's'
  } else if (char.toLowerCase() === 't') {
    textFont(akzFont); // for 't'
  } else if (char.toLowerCase() === 'y') {
    textFont(albasFont); // for 'y'
  } else if (char.toLowerCase() === 'i') {
    if (index === 0) {
      textFont(lemonFont); // for 'i'
    } else {
      textFont(misokaFont); // for 'i' 2
    }
  } else {
    textFont(bellFont);
  }
}

function calculateLetterPositions() {
  let totalWidth = 0;
  let patterns = [arr, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];
  let widths = [];
  for (let i = 0; i < patterns.length; i++) {
    let char = patterns[i][0]; 
    applyFontForChar(char, i); 
    let charWidth = textWidth(char);
    widths.push(charWidth); 
    totalWidth += charWidth; 
  }

 
  let xOffset = (width - totalWidth) / (patterns.length + 1); 
  let startX = xOffset;

  for (let i = 0; i < patterns.length; i++) {
    positions[i] = startX + xOffset * i + widths[i] * i;
  }
}

function mousePressed() {
  let patterns = [arr, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];

  for (let i = 0; i < patterns.length; i++) {
    let charX = positions[i];
    let charY = height / 2;
    let charWidth = textWidth(patterns[i][arr_i]);
    
    
    if (mouseX > charX - charWidth / 2 && mouseX < charX + charWidth / 2 &&
        mouseY > charY - 50 && mouseY < charY + 50) { 
      clickedLetter = true;
    }
  }
}
