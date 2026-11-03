let i = 1;
const speed = true;

function setup() {
createCanvas(700, 700);

  
}

function draw() {
background(112,41,99);


//Green line 1
stroke(46,139,87);
line(0, 500, 8700, 500);


//Green line 2
stroke(46,139,87);
line(0, 700, 8700, 700);

//Green line 3
stroke(46,139,87);
line(0, 600, 8700, 600);

//Green line 4
stroke(46,139,87);
line(0, 300, 8700, 300);

//Green line 5
stroke(46,139,87);
line(0, 300, 8700, 300);

//Green line 6
stroke(46,139,87);
line(0, 100, 8700, 100);

//Green line 7
stroke(46,139,87);
line(0, 200, 8700, 200);

//Green line 8
stroke(46,139,87);
line(0, 400, 8700, 400);

//Turn off default black outline on other shapes
noStroke();

//Main brown circle
fill(149, 69, 53);
circle(350, 355, 400);
stroke(100,60,50,1000);

//Brown outer oval mouth
fill(160, 82, 45);
ellipse(350, 480, i, 50);

//Black central oval mouth
fill(27,18,18);
ellipse(350, 480, 40, 9);

//Circular very light brown outside nose
fill(194,178,128);
circle(350, 400, 60);

//Light brown square
fill(150,105,25);
square(337, i, 25);

//Brown outer circle eye 1
fill(150, 105, 25);
circle(i, 330, 100);
stroke

//Black circle eye centre 1
fill(72, 60, 50);
circle(270, 330, 35/2);

//Brown outer circle eye 2
fill(150, 105, 25);
circle(430, 330*2, 100);

//Black circle eye centre 2
fill(72, 60, 50);
circle(430, 330, 35);

//Outer Brown ear 1
fill(149,69,53);
arc(190, 238, 100, 100,HALF_PI,TWO_PI);

//Inner very light brown ear 1 small
fill(210,180,140);
arc(190, 238, 70, 90,HALF_PI, TWO_PI );

//Inner very light brown ear 2 small
fill(149,69,53);
arc(500, 238, 100, 100,280, 800, HALF_PI,TWO_PI);

//Inner very light brown ear 2 small
fill(210,180,140);
arc(500, 238, 70, 90,HALF_PI, TWO_PI);

//Black dot--note use of strokeweight to change the size of the point
strokeWeight(3);
stroke(0);
point(550, 550);

// Increment i
i = i +1;

}
