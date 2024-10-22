let img; 
let topImg;

function preload() {
  img = loadImage('data/istockphoto-1306202050-612x612.jpg'); // tonearm image
  topImg = loadImage('data/pngimg.comvinyl_PNG18.png'); // record image
}

let dragging = false; 
let resizing = false; 
let rollover = false; 

let x, y, w, h; 
let offsetX, offsetY; 
let resizeMargin = 10; 

let squareSize = 100;
let currentPage = 0;

let squares = [
  { x: 1300, y: 750, page: 1 },
  { x: 1300, y: 600, page: 2 },
  { x: 1300, y: 450, page: 3 },
];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

 
  x = 100;
  y = 150;

 
  w = 612; 
  h = 320;
}

function draw() {
  background('white');

  if (currentPage === 0) {
    
    drawMainPage();
  } else {
   
    drawPage(currentPage);
  }
}

function drawMainPage() {
 
  let topImgScale = 1.8; 
  let topImgWidth = topImg.width * topImgScale;
  let topImgHeight = topImg.height * topImgScale;
  let topImgX = (width - topImgWidth) / 2;
  let topImgY = -topImgHeight * 0.6;

  image(topImg, topImgX, topImgY, topImgWidth, topImgHeight);

  rollover = (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h);

  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  
  stroke(0);
  fill(255);
  image(img, x, y, w, h);

  fill(255, 0, 0);
  rect(x + w - resizeMargin, y + h - resizeMargin, resizeMargin, resizeMargin);

  for (let square of squares) {
    fill(0, 0, 255);
    rect(square.x, square.y, squareSize, squareSize);
  }
}

function drawPage(pageNumber) {
  background(220);

  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(`Page ${pageNumber}`, width / 2, height / 2);

  fill(255, 0, 0);
  rect(50, 50, 100, 50);
  fill(255);
  textSize(20);
  text('Back', 100, 75);
}

function mousePressed() {
  if (currentPage === 0) {
    if (mouseX > x + w - resizeMargin && mouseY > y + h - resizeMargin) {
      resizing = true; 
    } else if (rollover) {
      dragging = true; 
      offsetX = x - mouseX;
      offsetY = y - mouseY;
    } else {
      for (let square of squares) {
        if (mouseX > square.x && mouseX < square.x + squareSize && 
            mouseY > square.y && mouseY < square.y + squareSize) {
          currentPage = square.page; 
        }
      }
    }
  } else {
    if (mouseX > 50 && mouseX < 150 && mouseY > 50 && mouseY < 100) {
      currentPage = 0; 
    }
  }
}

function mouseReleased() {
  dragging = false;
  resizing = false;
}

function keyTyped() {
  if (key === 'a') {
    save('image.png');
  }
}
