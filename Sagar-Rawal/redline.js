class Redline {
    constructor(x, y) {
      this.apart = 20;
      this.mid = createVector(x, y);
      this.north = createVector(x - this.apart, y);
      this.south = createVector(x + this.apart, y);
      this.nr = createVector(x - this.apart, y);
      this.sr = createVector(x + this.apart, y);
      this.angle = 0;
      this.thickness = 1;
    }
  
    draw() {
      this.update();
      push();
      stroke(255, 0, 0);
      strokeWeight(this.thickness);
      line(this.nr.x, this.nr.y, this.sr.x, this.sr.y);
      pop();
    }
  
    update() {
      this.nr = rotateVector(this.north, this.mid, this.angle);
      this.sr = rotateVector(this.south, this.mid, this.angle);
    }
  }