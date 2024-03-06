class Graph {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.origin = createVector(this.x, this.y + this.h / 2);
    this.plot = [];
    this.apart = (this.h - 140) / 2;
  }
  draw() {
    noFill();
    //graph body
    push();
    stroke(0);
    strokeWeight(6);
    point(this.origin.x, this.origin.y);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h);
    line(this.origin.x, this.origin.y, this.origin.x + this.w, this.origin.y);
    for (let i = -1; i <= 1; i += 0.1) {
      let x1 = this.origin.x - 3;
      let x2 = this.origin.x + 3;
      let y = map(
        i,
        -1,
        1,
        this.origin.y - this.apart,
        this.origin.y + this.apart
      );
      strokeWeight(1);
      line(x1, y, x2, y);
    }
    pop();

    //drawing curve
    beginShape();
    strokeWeight(2);
    let i = 0;
    for (let p of this.plot) {
      vertex(map(i, 0, cols - 1, this.origin.x, this.origin.x + this.w), p);
      i++;
    }
    endShape();

    //plotting points
    i = 0;
    push();
    for (let p of this.plot) {
      stroke(255, 0, 0);
      strokeWeight(5);
      point(map(i, 0, cols - 1, this.origin.x, this.origin.x + this.w), p);
      i++;
    }
    pop();
  }

  update(particles) {
    this.plot = [];
    for (let particle of particles) {
      if (particle.special) {
        let cosine = particle.cosine;
        cosine = map(
          cosine,
          -1,
          1,
          this.origin.y - this.apart,
          this.origin.y + this.apart
        );
        this.plot.push(cosine);
      }
    }
  }
}
