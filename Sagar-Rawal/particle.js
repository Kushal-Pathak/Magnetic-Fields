class Particle {
  constructor(x, y, special = false) {
    this.pos = createVector(x, y);
    this.dir = createVector(0, 1);
    this.a = createVector(0, 0);
    this.v = createVector(0, 0);
    this.len = 15;
    this.thickness = 0.7;
    this.special = special;
  }

  influence_by(dipole) {
    let repel = p5.Vector.sub(this.pos, dipole.nr);
    let r1 = p5.Vector.dist(dipole.nr, this.pos);
    repel.normalize();
    repel.mult(con / pow(r1, 2));
    let attract = p5.Vector.sub(dipole.sr, this.pos);
    let r2 = p5.Vector.dist(dipole.sr, this.pos);
    attract.normalize();
    attract.mult(con / pow(r2, 2));
    let combined = p5.Vector.add(repel, attract);
    this.dir = combined.copy();
  }

  draw() {
    push();
    stroke(0);
    strokeWeight(this.thickness);
    translate(this.pos.x, this.pos.y);
    rotate(this.dir.heading());
    if (this.special) {
      stroke(0, 0, 255);
      strokeWeight(2);
      fill(0, 0, 255);
      triangle(this.len, 2, this.len, -2, this.len + 5, 0);
    }
    line(0, 0, this.len, 0);
    pop();
  }

  update(dipole) {
    if (this.special) {
      let acosine = abs(this.dir.heading() - redAngle);
      let cosine = cos(acosine);
      this.cosine = cosine;
      //console.log(this.cosine)
      if (round(abs(this.cosine), 1) == 0.9){
        console.log("yes")
        diff = acosine;
      }
    }
  }
}
