export function calculatorFunc() {
  console.log("top of calculator function");
  /***************************************************************************** */
  // SELECTORS
  // output div
  const outputDiv = document.querySelector("#output-div");

  // Selector for the enter button
  const enterButton = document.querySelector("#enter-button");

  // Selectors for number buttons
  const numberButtons = document.querySelectorAll(".number-button");

  // Selectors for function buttons (+, -, *, /)
  const functionButtons = document.querySelectorAll(".function-button");

  // Selectors for clear and memory buttons
  const clearButton = document.querySelector("#clear-button");
  const memoryButton = document.querySelector("#memory-button");

  /************************************************************************* */
  //set my variables

  let previousValue = "";
  let currentValue = "";
  let selectedFunction = "";

  /*********************************************************************** */
  //Functions to run calcs

  //UPDATE DISPLAY

  function updateDisplay(content) {
    console.log("################################", content);
    outputDiv.innerText = content;
  }

  //RUN CALCULATION

  function runCalculation() {
    if (selectedFunction === "") {
      console.log("no selected function runCalculation function");
      return;
    }

    if (selectedFunction.toString() === "+") {
      if (currentValue.toString() === "" || previousValue.toString() === "") {
        return;
      } else {
        currentValue = parseFloat(previousValue) + parseFloat(currentValue);
        updateDisplay(currentValue);
      }
    }

    if (selectedFunction.toString() === "*") {
      if (currentValue.toString() === "" || previousValue.toString() === "") {
        return;
      } else {
        currentValue = parseFloat(previousValue) * parseFloat(currentValue);
        updateDisplay(currentValue);
      }
    }
    if (selectedFunction.toString() === "/") {
      if (currentValue.toString() === "" || previousValue.toString() === "") {
        return;
      } else {
        currentValue = parseFloat(previousValue) / parseFloat(currentValue);
        updateDisplay(currentValue);
      }
    }

    if (selectedFunction.toString() === "-") {
      if (currentValue.toString() === "" || previousValue.toString() === "") {
        return;
      } else {
        currentValue = parseFloat(previousValue) - parseFloat(currentValue);
        updateDisplay(currentValue);
      }
    }
  }

  //SAVE TO MEMORY

  /******************************************************************************* */
  // Add event listeners
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(`Number ${button.textContent} clicked`);
      currentValue += button.textContent;
      updateDisplay(currentValue);
    });
  });

  functionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(`Function ${button.textContent} clicked`);
      selectedFunction = button.textContent;
      previousValue = currentValue;
      currentValue = "";
      console.log("FUNC SELECTED", selectedFunction);
    });
  });

  enterButton.addEventListener("click", () => {
    console.log("Enter button clicked");
    runCalculation();
  });

  clearButton.addEventListener("click", () => {
    console.log("Clear button clicked");
    previousValue = "";
    currentValue = "";
    selectedFunction = "";
    updateDisplay(currentValue);
  });

  // Add event listener to the memory button
  memoryButton.addEventListener("click", () => {
    console.log("Memory button clicked");
  });
}
