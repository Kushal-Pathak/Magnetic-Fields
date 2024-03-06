class Dipole {
  constructor(x, y) {
    this.apart = 50;
    this.angle = 0;
    this.r = 15;
    this.center = createVector(x, y);
    this.north = createVector(this.center.x - this.apart, y);
    this.south = createVector(this.center.x + this.apart, y);
    this.nr = this.north;
    this.sr = this.south;
  }

  draw() {
    this.update();
    push();
    strokeWeight(2);
    fill(255, 0, 0);
    push();
    translate(this.center.x, this.center.y);
    rotate(this.angle);
    rect(-this.apart, -this.r, this.apart, this.r * 2);
    fill(255);
    noStroke()
    textSize(30)
    text(`N`, -this.apart + 10, this.r / 2 + 2);
    pop();
    //circle(this.nr.x, this.nr.y, this.r);
    fill(0, 0, 255);
    push();
    translate(this.center.x, this.center.y);
    rotate(this.angle);
    rect(0, -this.r, this.apart, this.r * 2);
    fill(255);
    noStroke()
    textSize(30)
    text(`S`, this.apart - 25, this.r / 2 + 2);
    pop();
    //circle(this.sr.x, this.sr.y, this.r);
    fill(255);
    circle(this.center.x, this.center.y, 5);
    pop();
  }

  update() {
    this.north = createVector(this.center.x - this.apart, this.center.y);
    this.south = createVector(this.center.x + this.apart, this.center.y);
    this.nr = rotateVector(this.north, this.center, this.angle);
    this.sr = rotateVector(this.south, this.center, this.angle);
  }
}
