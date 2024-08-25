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

  const canvas = document.getElementById("canvas");

  const context = canvas.getContext("2d");

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  /***************************************************** */
  // animation attempts
  context.translate(canvasWidth / 2, canvasHeight / 2 - 30);

  //   context.fillRect(0, 0, canvasWidth, canvasHeight);

  let n = 8.727;
  let d = 98.274;
  let frameCount = 1;

  const gradient = context.createLinearGradient(-400, 0, 700, 0);
  gradient.addColorStop(0, "white");

  gradient.addColorStop(1, "black");

  function drawIt() {
    window.requestAnimFrame(drawIt);

    //reset the background at the start of each frame

    context.fillStyle = gradient;
    context.fillRect(
      -canvasWidth / 2,
      -canvasHeight / 2,
      canvasWidth,
      canvasHeight
    );

    context.beginPath();

    for (let i = 1; i < 700; i += 1) {
      let k = i * d;

      let r = 230 * Math.sin(n * k);
      let x = r * Math.cos(k) * 2;
      let y = 2 * r * Math.sin(k);

      context.strokeStyle = `rgb(${i},18,29)`;
      context.lineTo(x, y);
    }

    context.lineWidth = 1;

    context.stroke();

    /*********************** */
    //text

    context.fillStyle = "black";
    context.font = "italic " + 20 + "pt Arial ";
    context.fillText(`n=${n}`, -canvasWidth / 2 + 20, canvasHeight / 2 - 35);
    context.fillText(`d=${d}`, -canvasWidth / 2 + 20, canvasHeight / 2 - 8);
    context.fillStyle = "white";
    context.fillText(
      `framecount =${frameCount}`,
      -canvasWidth / 2 + 550,
      canvasHeight / 2 - 8
    );

    frameCount++;
    d += 0.000005;
    n += 0.0000005;
  }
  window.requestAnimFrame(drawIt);
}
