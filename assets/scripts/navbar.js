const navButton = document.querySelector("#nav-btn");
const navBar = document.querySelector(".main-nav");
const overlay = document.querySelector(".nav-overlay");

navButton.addEventListener("click", () => {
  navBar.classList.add("nav-open");
});

overlay.addEventListener("click", () => {
  navBar.classList.remove("nav-open");
});
