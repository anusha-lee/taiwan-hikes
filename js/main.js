// Fix inconsistency of button focus among different browsers
document.addEventListener("click", function(event) {
  if (event.target.matches("button")) {
    event.target.focus();
  }
});

// fixed navigation bar after scrolling down
window.addEventListener("scroll", () => {
  const navFixed = document.querySelector(".header-box");
  const fromTop = window.scrollY;
  if (fromTop > 600) {
    navFixed.classList.add("fixedNav");
  } else {
    navFixed.classList.remove("fixedNav");
  }
});

// Add a keydown event when users press Escape key to close the hamburger menu

// scroll up button
window.addEventListener("scroll", function showScroll() {
  const top = window.scrollY;
  if (top > 100) {
    document.querySelector(".scroll-up").style.display = "block";
  } else {
    document.querySelector(".scroll-up").style.display = "none";
  }
});

const scrollToTopBtn = document.querySelector(".scroll-up");
const container = document.querySelector(".header");
scrollToTopBtn.addEventListener("click", function() {
  container.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

const showAllBtn = document.querySelector(".show-all__btn");

/*
showAllBtn.addEventListener("click", event => {
  if (oneDayFreeTrips.classList.contains("open")) {
    // shrink the box
    oneDayFreeTrips.classList.remove("open");
    showAllBtn.textContent = "Show All";
  } else {
    // expand the box
    oneDayFreeTrips.classList.add("open");
    showAllBtn.textContent = "Show Less";
  }
});
*/
// The expand button on About page: seems to be conflict with the button
// on guided trips page

const sizeBtn = document.querySelector(".size__btn");
const sizeCountries = document.querySelector(".size__countries");
// console.log(sizeCountries); need to check why it's null

// sizeBtn.addEventListener("click", event => {
//   if (sizeCountries.classList.contains("size-is-open")) {
//     sizeCountries.classList.remove("size-is-open");
//     sizeBtn.textContent = "Click to Expand";
//   } else {
//     sizeCountries.classList.add("size-is-open");
//     sizeBtn.textContent = "Close";
//   }
// });

// Make onclick on those difficulty levels and only show those that are clicked
// For example, if users click difficulty hikes, only those will show up.
