/*
PAGE SELECTOR ENGINE
*/

import * as canvas from "./canvas.js";
import * as treeCanvas from "./treeCanvas.js";
import * as calc from "./calculator.js";

export function sectionStateSetter(selectionString) {
  console.log(
    "top of the function sectionStateSetter(selection) ",
    selectionString
  );
  const missionPage = document.querySelector("#mission-page");
  const calculator = document.querySelector("#calculator");
  const titlePage = document.querySelector("#title-page");
  const art = document.querySelector("#art");

  let selectionElement = document.querySelector(selectionString);

  const allPages = [missionPage, calculator, titlePage, art];

  allPages.forEach((page) => {
    if (page !== selectionElement) {
      page.style.display = "none";
    } else {
      page.style.display = "block";
    }
  });

  if (selectionElement === art) {
    canvas.canvasBuild();
    // treeCanvas.treeRender();
  }
  if (selectionElement === titlePage) {
    const pulldown = document.querySelector("#page-select");
    pulldown.value = "...";
  }
  if (selectionElement === calculator) {
    calc.calculatorFunc();
  }
}
