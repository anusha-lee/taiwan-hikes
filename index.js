// fixed navigation bar after scrolling down
window.addEventListener("scroll", () => {
  const navFixed = document.querySelector(".header-box");
  const fromTop = window.scrollY;
  if (fromTop > 500) {
    navFixed.classList.add("fixedNav");
  } else {
    navFixed.classList.remove("fixedNav");
  }
});

// Initialize Flickity with vanilla JavaScript
var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  cellAlign: "left",
  contain: true
});
