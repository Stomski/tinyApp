/*
This file is designed as the engine that will switch the viewable section of this webpage.

my idea is to create individual sections, that will all inhabit the full page of any browser but that are either hidden or visible based on a piece of state that exists in i suppose either local storage or just in the DOM

how do i keep track of that variable?

    - i need to gather all the elements, the sections
    - i can create a function that will set the given sections visible status to shown, and any other section to hidden
    -

*/

import * as canvas from "./canvas.js";

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
  }
  if (selectionElement === titlePage) {
    const pulldown = document.querySelector("#page-select");
    pulldown.value = "...";
  }
}
