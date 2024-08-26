// so this is the index script, it imports all my scripting.

import * as testing from "./testing.js";
import * as canvas from "./canvas.js";
import * as selectorFunctions from "./selector.js";
import * as titlePageFunctions from "./titlePage.js";

// const titlePage = document.querySelector("#title-page");

selectorFunctions.sectionStateSetter("#title-page");

titlePageFunctions.titleSetup();

testing.test();

// canvas.canvasBuild();
