const displayModalButton = document.querySelector("#display-modal-btn");
const hideModalButton = document.querySelector("#close-modal-btn");
const modalContainer = document.querySelector("#modal-container");

displayModalButton.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

hideModalButton.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
