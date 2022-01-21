function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255)
  noStroke();
  fill('rgba(255, 0, 0, 0.25)')
  circle(200, 150, 150)
  fill('rgba(0, 0, 255, 0.25)')
  circle(160, 230, 150)
  fill('rgba(0, 255, 0, 0.25)')
  circle(240, 230, 150)
}