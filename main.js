const notesEl = document.querySelector(".notes");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");

const main = notesEl.querySelector(".main");
const textArea = main.querySelector("textarea");

editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
});