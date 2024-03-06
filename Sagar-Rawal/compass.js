class Compass {
  constructor(x, y) {
    this.r = 20;
    this.apart = this.r;
    this.center = createVector(x, y);
    this.north = createVector(x - this.apart, y);
    this.south = createVector(x + this.apart, y);
    this.nr = this.north;
    this.sr = this.south;
    this.angle = 0;
  }
  draw() {
    push();
    noFill();
    strokeWeight(1.5);
    circle(this.center.x, this.center.y, this.r * 2);
    pop();
    push();
    strokeWeight(2.2);
    stroke(255, 0, 0);
    translate(this.center.x, this.center.y);
    rotate(this.angle);
    line(0, 0, -this.r + 3, 0);
    fill(255, 0, 0);
    triangle(-this.r + 3, 0, -this.r + 4.5, -1.5, -this.r + 4.5, 1.5);
    stroke(0)
    strokeWeight(1.5)
    fill(255)
    circle(0,0,5)
    pop();
  }
}
