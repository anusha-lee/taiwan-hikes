// Fix inconsistency of button focus among different browsers
document.addEventListener("click", function (event) {
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
scrollToTopBtn.addEventListener("click", function () {
  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Off-canvas hamburger menu
// const offCanvasBtn = document.querySelector("off-canvas-btn");
// const body = document.body;

// offCanvasBtn.addEventListener("click", (event) => {
//   body.classList.toggle("offcanvas-is-open");
// });

// Testimonial carousel buttons
// const carousel = document.querySelector(".homeCarousel");
// const previousButton = carousel.querySelector(".previous-button");
// const nextButton = carousel.querySelector(".next-button");
// const contents = carousel.querySelector(".homeCarousel__contents");
// const dotsContainer = carousel.querySelector(".homeCarousel__dots");

// const slides = Array.from(carousel.querySelectorAll(".homeCarousel__slide"));
// const dots = Array.from(carousel.querySelectorAll(".homeCarousel__dot"));

// // Use JavaScript to position slides
// const slideWidth = slides[0].getBoundingClientRect().width;
// slides.forEach((slide, index) => {
//   slide.style.left = slideWidth * index + "px";
// });

// const button = document.querySelector("button");
// button.addEventListener("click", event => {
//   button.style.color = "blue";
// });

// nextButton.addEventListener("click", event => {
//   const currentSlide = contents.querySelector(".is-selected");
//   const nextSlide = currentSlide.nextElementSibling;
//   const destination = getComputedStyle(nextSlide).left;
//   // Show next slide
//   contents.style.left = "-" + destination;
//   currentSlide.classList.remove("is-selected");
//   nextSlide.classList.add("is-selected");
//   // Show previous button again
//   previousButton.removeAttribute("hidden");
//   // Hide the last next button
//   if (!nextSlide.nextElementSibling) {
//     nextButton.setAttribute("hidden", true);
//   }
//   // Highlight dot
//   const currentDot = dotsContainer.querySelector(".is-selected");
//   const nextDot = currentDot.nextElementSibling;
//   currentDot.classList.remove("is-selected");
//   nextDot.classList.add(".is-selected");
// });

// previousButton.addEventListener("click", event => {
//   const currentSlide = contents.querySelector(".is-selected");
//   const previousSlide = currentSlide.previousElementSibling;
//   const destination = getComputedStyle(previousSlide).left;
//   // Show previous slide
//   contents.style.left = "-" + destination;
//   currentSlide.classList.remove("is-selected");
//   previousSlide.classList.add("is-selected");
//   // Show next button when users click the left button
//   nextButton.removeAttribute("hidden");
//   // Hide previous button when the user reaches the first slide
//   if (!previousSlide.previousElementSibling) {
//     previousButton.setAttribute("hidden", true);
//   }
//   // Highlight dot
//   const currentDot = dotsContainer.querySelector(".is-selected");
//   const previousDot = currentDot.previousElementSibling;
//   currentDot.classList.remove("is-selected");
//   previousDot.classList.add(".is-selected");
// });

// something wrong with dots
// dots.forEach(dot => {
//   dot.addEventListener("click", event => {
//     let clickedDotIndex;
//     for (let index = 0; index < dots.length; index++) {
//       if (dots[index] === dot) {
//         clickedDotIndex = index;
//       }
//     }
//     // Show slide
//     const slideToShow = slides[clickedDotIndex];
//     const destination = getComputedStyle(slideToShow).left;
//     contents.style.left = "-" + destination;

//     slides.forEach(slide => {
//       slide.classList.remove("is-selected");
//     });
//     dot.classList.add("is-selected");

//     // Highlight dot
//     dots.forEach(d => {
//       d.classList.remove("is-selected");
//     });
//     dot.classList.add("is-selected");
//   });
// });
