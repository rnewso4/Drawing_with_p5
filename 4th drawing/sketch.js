function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#053480');
  fill('#058009')
  circle(200, 200, 150)
  fill(255,0,0)
  stroke(255)
  strokeWeight(4)
  star(200, 200, 30, 70, 5, PI / 1.43);
}

function star(x, y, radius1, radius2, npoints, rotation) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a + rotation) * radius2;
    let sy = y + sin(a + rotation) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle + rotation) * radius1;
    sy = y + sin(a + halfAngle + rotation) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
