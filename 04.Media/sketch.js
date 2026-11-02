let img;

function preload() {
  img = loadImage("f1259d691b1d12ff4cb489eb5eedd697.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

//Draw the image. 
image (img, 0, 0)
}
