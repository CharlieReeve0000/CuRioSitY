let arr_i = 0;
let arr = ["C", "c", "Ç", "č", "C", "©"];
let arr2 = ["U", "u", "v", "U", "u", "u"];
let arr3 = ["r", "R", "r", "r", "R", "R"];
let arr4 = ["i", "I", "1", "i", "1", "i"];
let arr5 = ["0", "o", "8", "o", "0", "O"];
let arr6 = ["s", "S", "s", "s", "S", "s"];
let arr7 = ["i", "!", "i", "1", "I", "1"];
let arr8 = ["t", "T", "T", "T", "t", "t"];
let arr9 = ["y", "Y", "y", "y", "Y", "y"];
let SLOW_DELAY = 1000;
let FAST_DELAY = 8000;
let DELAY_INCREMENT = 20;
let delay = SLOW_DELAY;
let nextTime;
let state = 1;
let clickedOnLetter = false;


let bellFont, drukFont, robotoFont, timesNewRomanFont, copperFont, fitFont, helveticaFont, matrixFont, gtAmericaFont;
let positions = []; 

function preload() {
  bellFont = loadFont('data/Bell_MT.ttf'); // font for 'o'
  drukFont = loadFont('data/DrukWide-Heavy-Trial.otf'); // font for 'u'
  robotoFont = loadFont('data/Uchen-Regular.ttf'); // font for 'r'
  timesNewRomanFont = loadFont('data/LEMONMILK-LightItalic.otf'); // for the first 'i'
  fitFont = loadFont('data/Pixellari.ttf'); // font for 's'
  helveticaFont = loadFont('data/Misoka.ttf'); // font for the second 'i'
  matrixFont = loadFont('data/Akzidenz-grotesk-roman.ttf'); // font for 't'
  gtAmericaFont = loadFont('data/ALBAS___.TTF'); // font for 'y'
  copperFont = loadFont('data/Copperplate_Gothic_Bold_Regular.ttf'); // font for 'c'
}

function setup() {
  createCanvas(1910, 919);
  
  // Calculate positions for each letter
  calculateLetterPositions();
  
  nextTime = millis() + delay;
}

function draw() {
  if (clickedOnLetter) {
    background('black'); // Change the background to black when a letter is clicked
    fill('#0f0'); // Green text for "You have been hacked"
    textSize(20); // Set the text size
    textFont(fitFont); // Use the preloaded Pixellari font (fitFont)
    textAlign(LEFT, TOP); // Align the text to the top left
    text("you have been hacked", 10, 10); // Display the message in the top-left corner
    text("codewords", 1805, 10);
    fill('#0f0');
    textSize(20);
    textFont(fitFont);
    textAlign(RIGHT, TOP);
    return; // Stop further drawing
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

    arr_i++; // the index of next pattern
    arr_i %= arr.length; // loop back to the start when reaching the end
    nextTime = millis() + delay;
  }

  textAlign(CENTER, CENTER);
  textSize(100);
  noStroke();
  fill("black");

  // Display current patterns in a horizontal line with font switching
  let patterns = [arr, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];
  
  for (let i = 0; i < patterns.length; i++) {
    let char = patterns[i][arr_i];
    applyFontForChar(char, i); // Apply font based on the character and position
    text(char, positions[i], height / 2); // Use fixed positions
  }
}

// Function to switch between fonts based on the character
function applyFontForChar(char, index) {
  if (char.toLowerCase() === 'c') {
    textFont(copperFont); // Apply Copper font for 'c'
  } else if (char.toLowerCase() === 'o') {
    textFont(bellFont); // Apply Bell font for 'o'
  } else if (char.toLowerCase() === 'u') {
    textFont(drukFont); // Apply Druk for 'u'
  } else if (char.toLowerCase() === 'r') {
    textFont(robotoFont); // Apply Roboto for 'r'
  } else if (char.toLowerCase() === 's') {
    textFont(fitFont); // Apply Fit for 's'
  } else if (char.toLowerCase() === 't') {
    textFont(matrixFont); // Apply Matrix for 't'
  } else if (char.toLowerCase() === 'y') {
    textFont(gtAmericaFont); // Apply GT America for 'y'
  } else if (char.toLowerCase() === 'i') {
    if (index === 0) {
      textFont(timesNewRomanFont); // Apply Times New Roman for first 'i'
    } else {
      textFont(helveticaFont); // Apply Helvetica for the second 'i'
    }
  } else {
    textFont(bellFont); // Default font is Bell
  }
}

// Function to calculate fixed positions for each letter
function calculateLetterPositions() {
  let totalWidth = 0;
  let patterns = [arr, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];
  
  // Measure the width of each letter to calculate total width
  let widths = [];
  for (let i = 0; i < patterns.length; i++) {
    let char = patterns[i][0]; // Use the first character for width calculation
    applyFontForChar(char, i); // Set font for each character
    let charWidth = textWidth(char);
    widths.push(charWidth); // Store width for later use
    totalWidth += charWidth; // Sum the width of each character
  }

  // Calculate equal spacing based on total width
  let xOffset = (width - totalWidth) / (patterns.length + 1); // Extra space for equal distribution
  let startX = xOffset; // Starting position on the X-axis

  // Calculate fixed positions based on widths and offsets
  for (let i = 0; i < patterns.length; i++) {
    positions[i] = startX + xOffset * i + widths[i] * i; // Store fixed position
  }
}

function mousePressed() {
  let patterns = [arr, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];

  for (let i = 0; i < patterns.length; i++) {
    let charX = positions[i];
    let charY = height / 2;
    let charWidth = textWidth(patterns[i][arr_i]);
    
    // Check if the mouse was pressed on a character
    if (mouseX > charX - charWidth / 2 && mouseX < charX + charWidth / 2 &&
        mouseY > charY - 50 && mouseY < charY + 50) { // Assuming a text size of ~100
      clickedOnLetter = true; // Set flag to change screen to black and show message
    }
  }
}
