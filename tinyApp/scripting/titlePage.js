/*
these scripts run when the title page is selected?

*/

import * as selectorFunctions from "./selector.js";

export function titleSetup() {
  /*
    so i need to grab the pull down menu and assign its select functionality
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

  artHomeButton.onclick = () => {
    selectorFunctions.sectionStateSetter("#title-page");
  };
}
