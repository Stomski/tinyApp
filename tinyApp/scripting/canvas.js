export function canvasBuild() {
  /********************************************** */
  /*
below is what i found for a shimming function that will make sure my request animation frame works through every browser, according to some dude on the internet
*/
  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  /***************************************** */
  //below is the establishment of the basic background canvas, and the context,
  //both get printed

  console.log("top of canvas build");
  const canvas = document.getElementById("canvas");
  console.log("canvas width>>>>", canvas.width);
  const context = canvas.getContext("2d");
  console.log("canvas context>>>", context);

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  // this fills the background gray
  context.fillStyle = "gray";
  context.fillRect(0, 0, 500, 500);

  // now to test a shape...
  context.translate(canvasWidth / 2, canvasHeight / 2);

  context.fillStyle = "blue";
  context.beginPath();
  context.moveTo(25, 25);
  context.lineTo(105, 25);
  context.lineTo(25, 105);
  context.fill();

  // some testing with "points" you cant just make a point though so these are rectangles
  context.fillStyle = "red";

  const numPoints = 50;
  const pointSize = 5;
  const radius = 150;

  for (let i = 0; i <= numPoints; i++) {
    console.log(i);
    let x = radius * Math.cos((Math.PI / numPoints) * i * 2);
    let y = radius * Math.sin((Math.PI / numPoints) * i * 2);
    context.fillRect(x, y, pointSize, pointSize);
  }
  let x = -200;
  function drawIt() {
    window.requestAnimFrame(drawIt);
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    c.fillStyle = "red";
    c.fillRect(x, 100, 200, 100);
    x += 5;
  }
  window.requestAnimFrame(drawIt);
}
