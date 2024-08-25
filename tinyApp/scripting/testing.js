export function test() {
  console.log("TEST WORKING");
  const testElement = document.querySelector("#testingh2");
  console.log(testElement, "<test element, pre change");
  testElement.innerText = "fuck yes.";
  console.log(testElement, "<test element, post change");
}
