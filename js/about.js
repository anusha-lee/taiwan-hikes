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

// Modal
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
    console.log("overlay box clicked");
    modalOverlay.classList.remove("modal-is-open");
  }
});
