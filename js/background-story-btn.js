// The expand button on About page:
const sizeBtn = document.querySelector(".background-story__btn");
const sizeCountries = document.querySelector(".background-story");
//console.log(sizeCountries);
sizeBtn.addEventListener("click", event => {
  if (sizeCountries.classList.contains("size-is-open")) {
    sizeCountries.classList.remove("size-is-open");
    sizeBtn.textContent = "Background Story";
  } else {
    sizeCountries.classList.add("size-is-open");
    sizeBtn.textContent = "Close";
  }
});
