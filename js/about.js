// The expand button on About page:
const sizeBtn = document.querySelector(".size__btn");
const sizeCountries = document.querySelector(".size__countries");
//console.log(sizeCountries);
sizeBtn.addEventListener("click", (event) => {
  if (sizeCountries.classList.contains("size-is-open")) {
    sizeCountries.classList.remove("size-is-open");
    sizeBtn.textContent = "How samll is Taiwan?";
  } else {
    sizeCountries.classList.add("size-is-open");
    sizeBtn.textContent = "Close";
  }
});

// Modal
const modalShowButton = document.querySelector(".modal-show-btn");
const modalOverlay = document.querySelector(".modal__overlay");
modalShowButton.addEventListener("click", (event) => {
  modalOverlay.classList.add("modal-is-open");
});

const modalCloseButton = document.querySelector(".modal-close-btn");
modalCloseButton.addEventListener("click", (event) => {
  modalOverlay.classList.remove("modal-is-open");
});

// need to work on clicking out side of the countries to close the box
// const countriesOverlay = document.querySelector(".modal__overlay");
// countriesOverlay.addEventListener("click", (event) => {
//   if (!event.target.closest(".modal")) {
//     console.log("overlay clicked");
//   }
// });
