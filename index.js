// fixed navigation bar after scrolling down
window.addEventListener("scroll", function() {
  const navFixed = document.querySelector("header-box");
  const fromTop = window.scrollY;
  console.log(navFixed);
  if (fromTop > 450) {
    navFixed.classList.add("fixedNav");
  } else {
    navFixed.classList.remove("fixedNav");
  }
});
