// so this is the index script, it imports all my scripting.

import * as testing from "./testing.js";
import * as canvas from "./canvas.js";
import * as selectorFunctions from "./selector.js";

console.log("hello from the INDEX.JS");
const titlePage = document.querySelector("#title-page");

selectorFunctions.sectionStateSetter(titlePage);
testing.test();
canvas.canvasBuild();

// const canvas = document.getElementById("canvas");
// console.log("canvas>>>>", canvas);
