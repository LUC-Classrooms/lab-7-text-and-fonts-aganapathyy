/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Arial");
}

function draw() {
  background(200);
  textSize(18);
  if (mouseIsPressed) {
    text("but then i forget :(", 20, 60);
  } else {
    text("sometimes i think...", 20, 60);
  }

}
