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

// scroll up button

// window.addEventListener("scroll", function scrollUp() {
//   const scrollDown =
//     document.documentElement.scrollTop + document.body.scrollTop;
//   const scrollButton = document.querySelector(".scroll-up");
//   if (scrollDown > 30) {
//     scrollButton.style.display = "block";
//   } else {
//     scrollButton.style.display = "none";
//   }
// });

window.addEventListener("scroll", function showScroll() {
  const top = window.scrollY;
  if (top > 100) {
    document.querySelector(".scroll-up").style.display = "block";
  } else {
    document.querySelector(".scroll-up").style.display = "none";
  }
});

const scrollToTopBtn = document.querySelector(".scroll-up");
const container = document.querySelector(".head-box");
console.log(container);
click.addEventListener("click", function() {
  container.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Page scroll indicator
// window.onscroll = function() {
//   function scrollIndicator() {
//     const scroll =
//       document.body.scrollTop || document.documentElement.scrollTop;
//     const height =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;
//     let afterScroll = (scroll / height) * 100;
//     document.querySelector(".progress__bar").getElementsByClassName.width =
//       afterScroll + "%";
//   }
// };
