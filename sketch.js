var centerY;
var earthDiameter = 50
var distanceFromSun = 50
function setup() {
  createCanvas(5000, 5000);
  centerY = height/2;
}

function draw() {
  background(0);

  // sun
  stroke(250, 225, 0);
  strokeWeight(50);
  line(0, 0, 0, height);

  noStroke();

  // mercury
  fill(125);
  ellipse(200, centerY, earthDiameter* 0.4, earthDiameter* 0.4);

  // venus
  fill(220, 155, 100);
  ellipse(400, centerY, earthDiameter* 0.9, earthDiameter* 0.9);

  // earth
  fill(0, 100, 200);
  ellipse(600*1, centerY, earthDiameter, earthDiameter);

  // mars
  fill(200, 50, 0);
  ellipse(800*1.5, centerY, earthDiameter* 0.5, earthDiameter* 0.5);

  // jupiter
  fill(195, 160, 140);
  ellipse(1000, centerY, earthDiameter* 11.2, earthDiameter* 11.2);

  // saturn
  fill(240, 215, 160);
  ellipse(1200, centerY, earthDiameter* 9.5, earthDiameter* 9.5);

  // uranus
  fill(150, 250, 250);
  ellipse(1400, centerY, earthDiameter* 4.0, earthDiameter* 4.0);

  // neptune
  fill(55, 130, 250);
  ellipse(1600, centerY, earthDiameter* 3.9, earthDiameter* 3.9);

  // pluto
  fill(250, 200, 160);
  ellipse(1800, centerY, earthDiameter* 0.2, earthDiameter* 0.2);

}