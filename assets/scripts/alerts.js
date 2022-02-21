const closeButton = document.querySelector("#alert-close-btn");
const alertContainer = document.querySelector(".alert-container");
const alertDisplayButton = document.querySelector("#alert-display-btn");

alertDisplayButton.addEventListener("click", () => {
  alertContainer.classList.remove("hide-display");
});
closeButton.addEventListener("click", () => {
  alertContainer.classList.add("hide-display");
});
