/* AUTOMATICALLY GENERATED GRID */

// Initialise variables 
const row = 19;     // Number of shapes in a row
const col = 30;     // Number of shapes in a col
const pad = 5;      // Padding between shapes 
let sWidth, sHeight;
let words = [ "Blue", "Circles", "Are", "Fun"]  
let rgba = [87,101,255,100];     

function setup() {
    createCanvas(windowWidth, windowHeight); // canvas width/height
    sWidth = (width/col)-(pad+(pad/col));
    sHeight = (height/row)-(pad+(pad/row));
    rectMode(CENTER); // Rectangle coords from the center
    noStroke(1000);
    textSize(50);
  textAlign(CENTER);
// The text diplay

 
}

function draw(){
  background(255,255,0); 
  // Loop through Y values
  for(let i=0; i<row; i++){
    // Loop through X values
    for(let ii=0; ii<col; ii++){
      let x = pad+(ii*sWidth)+(pad*ii)+(sWidth/2);
      let y = pad+(i*sHeight)+(pad*i)+(sHeight/2);
      fill(rgba); 
      circle(x, y, sWidth, sHeight); 
         triangle( x, y, sWidth, sHeight);
      // Rotate the rects
      push();
        angleMode(DEGREES)
        translate(x, y);
        rotate(i*5); 
        rotate(millis() / 20 * PI / 2);
        ellipse(0, 0, sWidth, sHeight); 
      pop(); 
    }
  }
}