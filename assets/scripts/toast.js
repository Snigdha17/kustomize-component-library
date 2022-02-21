const toastCloseButton = document.querySelector("#toast-close-btn");
const toastContainer = document.querySelector(".toast-container");
const toastDisplayButton = document.querySelector("#toast-display-btn");

toastDisplayButton.addEventListener("click", () => {
  toastContainer.classList.remove("hide-display");
});
toastCloseButton.addEventListener("click", () => {
  toastContainer.classList.add("hide-display");
});
