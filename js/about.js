// The expand button on About page:
const sizeBtn = document.querySelector(".size__btn");
const sizeCountries = document.querySelector(".size__countries");
//console.log(sizeCountries);
sizeBtn.addEventListener("click", (event) => {
  if (sizeCountries.classList.contains("size-is-open")) {
    sizeCountries.classList.remove("size-is-open");
    //sizeBtn.textContent = "Close";
  } else {
    sizeCountries.classList.add("size-is-open");
    sizeBtn.textContent = "How small is Taiwan?";
  }
});

// Modal on About page
const modalShowButton = document.querySelector(".modal-show-btn");
const modalOverlay = document.querySelector(".modal__overlay");

modalShowButton.addEventListener("click", (event) => {
  modalOverlay.classList.add("modal-is-open");
});

const modalCloseButton = document.querySelector(".modal-close-btn");
modalCloseButton.addEventListener("click", (event) => {
  modalOverlay.classList.remove("modal-is-open");
  sizeBtn.textContent = "How small is Taiwan?";
});

// Click outside of the modal to close the modal
modalOverlay.addEventListener("click", (event) => {
  if (!event.target.closest(".modal__overlay--box")) {
    modalOverlay.classList.remove("modal-is-open");
    sizeBtn.textContent = "How small is Taiwan?";
  }
});

// Button on 10 Golden Ridgelines
/*
const ridgelinesModalCloseButton = document.querySelector(
  ".ridgelines-modal-close-btn"
);
ridgelinesModalCloseButton.addEventListener("click", (event) => {
  modalOverlay.classList.remove("modal-is-open");
  sizeBtn.textContent = "10 Golden Ridgelines";
});*/
