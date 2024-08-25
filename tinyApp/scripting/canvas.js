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
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  /************************************* */
  // now to test a shape... this draws a triangle
  //   context.translate(canvasWidth / 2, canvasHeight / 2);

  //   context.fillStyle = "blue";
  //   context.beginPath();
  //   context.moveTo(25, 25);
  //   context.lineTo(105, 25);
  //   context.lineTo(25, 105);
  //   context.fill();

  /****************************************** */
  // some testing with "points" you cant just make a point though so these are rectangles
  context.translate(canvasWidth / 2, canvasHeight / 2);

  //   context.fillStyle = "red";

  //   const numPoints = 50;
  //   const pointSize = 5;
  //   const radius = 150;

  //   for (let i = 0; i <= numPoints; i++) {
  //     console.log(i);
  //     let x = radius * Math.cos((Math.PI / numPoints) * i * 2);
  //     let y = radius * Math.sin((Math.PI / numPoints) * i * 2);
  //     context.fillRect(x, y, pointSize, pointSize);
  //   }

  /***************************************************** */
  // animation attempts
  context.fillStyle = "red";
  //   context.fillRect(0, 0, canvasWidth, canvasHeight);

  context.fillStyle = "red";
  const pointSize = 2;
  let n = 4.4;
  let d = 124;

  function drawIt() {
    window.requestAnimFrame(drawIt);
    context.fillStyle = "gray";
    context.fillRect(
      -canvasWidth / 2,
      -canvasHeight / 2,
      canvasWidth,
      canvasHeight
    );

    context.fillStyle = "red";
    context.beginPath();

    for (let i = 1; i < 2000; i += 1) {
      let k = i * d;

      let r = 250 * Math.sin(n * k);
      let x = r * Math.cos(k) * 2;
      let y = 2 * r * Math.sin(k);
      //   context.moveTo(x, y);
      context.lineTo(x, y);
    }
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
    d += 0.000005;
    n += 0.0000005;
  }
  window.requestAnimFrame(drawIt);
}
