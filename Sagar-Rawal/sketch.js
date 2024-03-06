let magnet;
let particles = [];
let redlines = [];
let con = 1;
let width1 = 300;
let height1 = 300;
let width2 = 325;
let height2 = 250;
let redAngle = 0;
let graph;
let scl = 10;
let cols;
let compass;
let alignX = 0;
let diff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  slider1 = createSlider(0, 360, 0, 0);
  slider1.position(25, height1 + 50 + height2 + 25);
  slider1.size(width2 - 25);
  slider2 = createSlider(0, 360, 0, 0);
  slider2.position(25, height1 + 50 + height2 + 25 + 25);
  slider2.size(width2 - 25);

  magnet = new Dipole(width2 / 2, height1 + 50 + height2 / 2 + 20);

  for (let i = 0; i < 1000; i++) {
    particles.push(
      new Particle(
        random(25, width2),
        random(height1 + 30, height1 + 50 + height2)
      )
    );
  }

  cols = floor(width2 / scl) - 2;
  for (let i = 0; i < cols; i++) {
    //redlines.push(new Redline(25 + i * scl, height1 + 50 + 50));
    particles.push(new Particle(25 + i * scl, height1 + 50 + 50, true));
  }

  graph = new Graph(25, 5, width1, height1);
  compass = new Compass(width1 - 2, 33);
}

function draw() {
  background(255);

  move(); //magnet mover

  push();
  noStroke();
  fill(0, 190, 0); //grass color
  rect(25, height1 + 50 + 50, width2 - 25, 10); //grass
  fill(205, 92, 8); //earth color
  rect(25, height1 + 50 + 50 + 10, width2 - 25, height2 - 50); //earth
  pop();

  for (let particle of particles) { //particle effect
    particle.influence_by(magnet);
    particle.update(magnet);
    particle.draw();
  }

  redAngle = slider2.value();
  magnet.angle = slider1.value();

  magnet.draw();
  graph.update(particles);
  graph.draw();
  compass.angle = redAngle;
  compass.draw();

  strokeWeight(1);
  textSize(20);
  fill(0);
  //diff = abs(magnet.angle - redAngle);
  //text(`${floor(diff)}\u00B0`, 30, 30);
}
function rotateVector(vec, mid, a) {
  return createVector(
    mid.x + (vec.x - mid.x) * cos(a) - (vec.y - mid.y) * sin(a),
    mid.y + (vec.x - mid.x) * sin(a) + (vec.y - mid.y) * cos(a)
  );
}
function windowResized() {
  resizeCanvas(windowWidth - 4, windowHeight - 4);
}

function move() {
  if (
    mouseIsPressed &&
    mouseX > 25 &&
    mouseX < width2 &&
    mouseY > height1 + 110 &&
    mouseY < height1 + height2 + 50
  ) {
    cursor("grab");
    magnet.center.x = mouseX;
    magnet.center.y = mouseY;
  } else {
    cursor();
  }
}
