const ratingStars = document.querySelectorAll(".rating");
const rating = document.querySelector(".stars-rating");

ratingStars.forEach((star, index) => {
  star.addEventListener("click", () => {
    let clickedIndex = index;
    console.log(`User gave ${clickedIndex + 1} rating`);
    ratingStars.forEach((otherStar, otherIndex) => {
      if (otherIndex <= clickedIndex) {
        otherStar.classList.add("active");
      }
    });
  });
});
