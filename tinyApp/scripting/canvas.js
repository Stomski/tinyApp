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

  const canvas = document.getElementById("canvas");

  const context = canvas.getContext("2d");

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  /***************************************************** */
  // animation attempts
  context.translate(canvasWidth / 2, canvasHeight / 2 - 30);

  let n = 6.324;
  let d = 74.238;
  let frameCount = 1;

  const gradient = context.createRadialGradient(0, 0, 450, 0, 0, 700);
  gradient.addColorStop(0, "white");

  gradient.addColorStop(1, "black");

  function hsbToRgb(h, s, b) {
    let r, g, bl;
    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = b * (1 - s);
    let q = b * (1 - f * s);
    let t = b * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0:
        r = b;
        g = t;
        bl = p;
        break;
      case 1:
        r = q;
        g = b;
        bl = p;
        break;
      case 2:
        r = p;
        g = b;
        bl = t;
        break;
      case 3:
        r = p;
        g = q;
        bl = b;
        break;
      case 4:
        r = t;
        g = p;
        bl = b;
        break;
      case 5:
        r = b;
        g = p;
        bl = q;
        break;
    }

    return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(bl * 255)];
  }

  let numPoints = 3000;

  let flag = "up";
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
    if (numPoints > 2500) {
      flag = "down";
    }
    if (numPoints < 4) {
      flag = "up";
    }

    let pointObj = {};

    for (let i = 1; i < numPoints; i += 1) {
      let k = i * d;

      let r = 220 * Math.sin(n * k);
      let x = r * Math.cos(k) * 2;
      let y = 2 * r * Math.sin(k);
      pointObj[i] = [x, y];
    }

    for (let i = 1; i < numPoints - 1; i += 1) {
      let hue = i / 699; // Hue varies from 0 to 1 across the loop
      let saturation = 1; // Full saturation
      let brightness = 1; // Full brightness

      let [red, green, blue] = hsbToRgb(hue, saturation, brightness);

      let [currX, currY] = pointObj[i];
      let [nextX, nextY] = pointObj[i + 1];
      context.beginPath();
      context.moveTo(currX, currY);
      context.lineTo(nextX, nextY);

      context.lineWidth = 1;
      context.strokeStyle = `rgb(${red}, ${green}, ${blue})`;
      if (numPoints < 300) {
        context.strokeStyle = "rgb(255,0,0)";
      }
      context.stroke();
    }

    /*********************** */
    //text

    context.fillStyle = "white";
    context.font = "italic " + 20 + "pt Arial ";
    context.fillText(`n=${n}`, -canvasWidth / 2 + 20, canvasHeight / 2 - 35);
    context.fillText(`d=${d}`, -canvasWidth / 2 + 20, canvasHeight / 2 - 8);
    context.fillStyle = "white";
    context.fillText(
      `framecount =${frameCount}`,
      -canvasWidth / 2 + 650,
      canvasHeight / 2 - 8
    );
    context.fillText(
      `numPoints =${numPoints}`,
      -canvasWidth / 2 + 650,
      canvasHeight / 2 - 35
    );
    if (flag === "down") {
      numPoints--;
      console.log("flag pos", flag, frameCount, "framecount");
    } else if (flag === "up") {
      console.log("flag neg", flag);
      numPoints++;
    }
    frameCount++;
    d += 0.0000005;
    n += 0.00000005;
  }
  window.requestAnimFrame(drawIt);
}
