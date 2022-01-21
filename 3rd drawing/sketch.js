function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill('#fdff00')
  circle(100, 200, 150)
  fill(0)
  noStroke()
  triangle(20, 140, 100, 200, 20, 260)
  fill('#d03e19')
  rect(220, 125, 150, 150, 100, 100, 0, 0)
  fill(255)
  circle(260, 200, 40)
  circle(330, 200, 40)
  fill(0, 0, 255)
  circle(260, 200, 20)
  circle(330, 200, 20)
}