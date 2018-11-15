var angle = 0;
// var ball;
// var ball2;
// var smile;
var projection;
var rightWing;
var leftWing;
var rightLegs;

var mic;

function preload() {
  projection = loadImage('/assets/projection1.png');
  rightWing = loadImage('/assets/wings.png');
  leftWing = loadImage('/assets/wings-left.png');
  legUpperright = loadImage('/assets/leg-upper-right.png');
  legUpperleft = loadImage('/assets/leg-upper-left.png');
  legMiddleright = loadImage('/assets/leg-middle-right.png');
  legMiddleleft = loadImage('/assets/leg-middle-left.png');
  legBottomright = loadImage('/assets/leg-bottom-right.png');
  legBottomleft = loadImage('/assets/leg-bottom-left.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  mic = new p5.AudioIn();
  mic.start();
  // fft = new p5.FFT();
  // fft.setInput(mic);
}

function draw() {
  // var spectrum = fft.analyze();

  background(255);

  strokeWeight(2);
  stroke(0);

  micLevel = mic.getLevel();

  directionalLight(210, 190, 30, 40, frameCount * 2, frameCount * .2);

  ambientLight(80);

  // PROJECTION 1
  // push();
  // for (var i = 0; i < spectrum.length/5; i += 2) {
  //   var x = map(i, 0, spectrum.length, 0, width);
  //   var h = -height + map(spectrum[i], 0, 255, height, 0);
  //   // rect(x, height, width/spectrum.length, h);
  // }
  // pop();

  push();
  strokeWeight(0);
  translate(0, constrain(height/900-micLevel*height*.001, 1, height), 0);
  rotateX(0);
  rotateY(0);
  rotateZ(0);
  scale(constrain(width/1500-micLevel*width*.001,1, width), 1, 1);
  texture(projection);
  plane(700);
  pop();

  push();
  strokeWeight(0);
  translate(-500, constrain(width/900-micLevel*width*.001, 1, width), 0);
  rotateX(0);
  rotateY(0);
  rotateZ(0);
  scale(constrain(width/1300-micLevel*width*.001, 1, width), 1, 1);
  texture(leftWing);
  plane(500);
  pop();

  push();
  strokeWeight(0);
  translate(500, constrain(height/900-micLevel*height*.001, 1, height), 0);
  rotateX(0);
  rotateY(0);
  rotateZ(0);
  scale(constrain(width/1500-micLevel*width*.001, 1, width), 1, 1);
  texture(rightWing);
  plane(500);
  pop();

  push();
  strokeWeight(0);
  translate(-400, constrain(height/900-micLevel*height*.001, 100, width), 0);
  rotateX(0);
  rotateY(0);
  rotateZ(-micLevel*height*.001);
  scale(constrain(width/1500-micLevel*width*.01, 1, width), 1, 1);
  texture(legUpperleft);
  plane(400);
  pop();

  push();
  strokeWeight(0);
  translate(400, constrain(height/900-micLevel*height*.001, 100, width), 0);
  rotateX(0);
  rotateY(0);
  rotateZ(micLevel*height*.001);
  scale(constrain(width/1500-micLevel*width*.01, 1, width), 1, 1);
  texture(legUpperright);
  plane(400);
  pop();

  push();
  strokeWeight(0);
  translate(-350, constrain(height/900-micLevel*height*.001, 200, width), 0);
  rotateX(0);
  rotateY(0);
  rotateZ(-micLevel*height*.0015);
  scale(constrain(width/2000-micLevel*width*.01, 1, width), 1, 1);
  texture(legMiddleleft);
  plane(350);
  pop();

  push();
  strokeWeight(0);
  translate(350, constrain(height/900-micLevel*height*.001, 200, width), 0);
  rotateX(0);
  rotateY(0);
  rotateZ(micLevel*height*.0015);
  scale(constrain(width/2000-micLevel*width*.01, 1, width), 1, 1);
  texture(legMiddleright);
  plane(350);
  pop();

  push();
  strokeWeight(0);
  translate(-300, constrain(height/900-micLevel*height*.001, 300, width), 0);
  rotateX(0);
  rotateY(0);
  rotateZ(-micLevel*height*.002);
  scale(constrain(width/2500-micLevel*width*.01, 1, width), 1, 1);
  texture(legBottomleft);
  plane(300);
  pop();

  push();
  strokeWeight(0);
  translate(300, constrain(height/900-micLevel*height*.001, 300, width), 0);
  rotateX(0);
  rotateY(0);
  rotateZ(micLevel*height*.002);
  scale(constrain(width/2500-micLevel*width*.01, 1, width), 1, 1);
  texture(legBottomright);
  plane(300);
  pop();


  if (keyIsPressed == true) {
    if (key == ' ') {
      background(240);
    }
  }
}

function keyPressed() {
  if (key == 's') {
    saveCanvas('test', 'png')
  }
}
