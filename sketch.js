var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(128,28,186);
}

function draw() {
  d= random(10,60);
  fill(255,random(55,200));
  ellipse(mouseX,mouseY,d,d);
}