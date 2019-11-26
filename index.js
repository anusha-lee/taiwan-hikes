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
