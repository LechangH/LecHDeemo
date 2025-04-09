function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("theGame")


  background(20)

}

function draw() {
// background(220);

  ellipse(mouseX, mouseY, 30);
}
