export function treeRender() {
  const canvas = document.getElementById("tree-canvas");
  console.log("%c canvas log>", "color:blue; font-size: 26px", canvas);

  const context = canvas.getContext("2d");

  const gradient = context.createRadialGradient(
    canvas.width / 2,
    canvas.height / 1.2,
    4,
    canvas.width / 2,
    canvas.height / 1.2,
    700
  );
  gradient.addColorStop(0, "white");

  gradient.addColorStop(1, "black");

  let angleInputField = document.querySelector("#angle");
  let skewInputField = document.querySelector("#angle-modifier");
  console.log("inputFIeld", angleInputField);

  context.lineWidth = 1;
  context.strokeStyle = `rgb(255, 0, 0)`; // Red

  function drawTree() {
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.save();

    context.translate(canvas.width * 0.5, canvas.height);
    branch(300);
    context.restore();
  }

  function branch(length) {
    let angle = (Math.PI / 500) * angleInputField.value;
    let skewangle = (Math.PI / 500) * skewInputField.value;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -length); // Draw the branch line
    context.stroke();
    if (length > 2) {
      // Continue branching if the length is greater than 2
      context.translate(0, -length);
      context.save();
      context.rotate(angle - skewangle); // Rotate right
      branch(length * 0.7); // Recursive call for the right branch
      context.restore();

      context.save();
      context.rotate(-angle - skewangle); // Rotate left
      branch(length * 0.7); // Recursive call for the left branch
      context.restore();
    }
  }
  angleInputField.addEventListener("input", drawTree);
  skewInputField.addEventListener("input", drawTree);

  drawTree();
}
