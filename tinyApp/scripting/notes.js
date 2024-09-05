export function populateNotes() {
  const notesInStorage = localStorage.getItem("notes");
  console.log("notes", notesInStorage);
}
