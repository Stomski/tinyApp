/*
these scripts run when the title page is selected?

*/

import * as selectorFunctions from "./selector.js";

export function titleSetup() {
  /*
    so i need to grab the pull down menu and  assign its select functionality
    */

  const pulldown = document.querySelector("#page-select");
  pulldown.onchange = () => {
    console.log(
      "THIS IS THE ON CHANGE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
      pulldown.value
    );
    selectorFunctions.sectionStateSetter(pulldown.value);
  };

  const artHomeButton = document.querySelector("#art-home-button");
  const missionHomeButton = document.querySelector("#mission-home-button");
  const calculatorHomeButton = document.querySelector(
    "#calculator-home-button"
  );
  const notesHomeButton = document.querySelector("#notes-home-button");

  notesHomeButton.onclick = () => {
    selectorFunctions.sectionStateSetter("#title-page");
  };

  missionHomeButton.onclick = () => {
    selectorFunctions.sectionStateSetter("#title-page");
  };

  calculatorHomeButton.onclick = () => {
    selectorFunctions.sectionStateSetter("#title-page");
  };

  artHomeButton.onclick = () => {
    selectorFunctions.sectionStateSetter("#title-page");
  };
}
