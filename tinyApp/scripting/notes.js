export function populateNotes() {
  console.log(
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
  );

  const testTrigger = (e) => {
    console.log(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };
  const textArea = document.querySelector("#notes-scroll");
  textArea.addEventListener("input", testTrigger);

  const notesInStorage = localStorage.getItem("notes");
  if (notesInStorage) {
    textArea.value = notesInStorage;
  } else {
    textArea.value =
      "Think of this as your digital typewriter scroll. It exists locally on your computer, and will persist unless you clear your cache. Try not to break anything, YOUR computer stores this not mine.";
  }

  console.log("notes from storage>>>", notesInStorage);
}
