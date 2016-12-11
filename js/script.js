var width = 700;
var height = 700;

var canvas = document.getElementById("grid");
var context = canvas.getContext("2d");

function drawGrid(){
  for (var x = 0; x <= width; x += 50) {
    context.moveTo(0.5 + x, 0);
    context.lineTo(0.5 + x, height);
  }
  for (var x = 0; x <= height; x += 50) {
    context.moveTo(0, 0.5 + x);
    context.lineTo(width, 0.5 + x);
  }
  context.strokeStyle = "black";
  context.stroke();
}

drawGrid();
