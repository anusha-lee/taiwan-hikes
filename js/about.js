// The expand button on About page:
const sizeBtn = document.querySelector(".size__btn");
const sizeCountries = document.querySelector(".size__countries");
//console.log(sizeCountries);
sizeBtn.addEventListener("click", event => {
  if (sizeCountries.classList.contains("size-is-open")) {
    sizeCountries.classList.remove("size-is-open");
    sizeBtn.textContent = "How samll is Taiwan?";
  } else {
    sizeCountries.classList.add("size-is-open");
    sizeBtn.textContent = "Close";
  }
});
