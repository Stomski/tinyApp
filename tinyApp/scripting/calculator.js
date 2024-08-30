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
  let rememberedValue = "";

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

  function memoryButtonClick() {
    if (rememberedValue === "") {
      rememberedValue = currentValue;
      memoryButton.className = "clear-mem-buttons clickable selected";
    } else {
      currentValue = rememberedValue;
      memoryButton.className = "clear-mem-buttons clickable selected";
      updateDisplay(currentValue);
    }
  }

  //select a function
  function setFunctionSelect(selectedButton) {
    if (!selectedButton) {
      functionButtons.forEach((button) => {
        button.classList.remove("selected");
      });
    } else {
      functionButtons.forEach((button) => {
        if (button === selectedButton) {
          button.className = "selected function-button";
        } else {
          button.classList.remove("selected");
        }
      });
    }
  }

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
      setFunctionSelect(button);
    });
  });

  enterButton.addEventListener("click", () => {
    console.log("Enter button clicked");

    setFunctionSelect();
    runCalculation();
    previousValue = "";
    selectedFunction = "";
  });

  clearButton.addEventListener("click", () => {
    console.log("Clear button clicked");
    previousValue = "";
    currentValue = "";
    selectedFunction = "";
    rememberedValue = "";
    memoryButtonClick();
    memoryButton.className = "clear-mem-buttons clickable";
    updateDisplay(currentValue);
  });

  // Add event listener to the memory button
  memoryButton.addEventListener("click", () => {
    console.log("Memory button clicked");
    memoryButtonClick();
  });
}
