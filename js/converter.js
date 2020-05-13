// Make tabs for user to switch the unit converters
const tabs = Array.from(
  document.querySelectorAll(".converter__tabs--singleTab")
);
const converterTabby = document.querySelector(".converter-tabby");
const tabContents = Array.from(
  converterTabby.querySelectorAll(".converter__contents--box")
);

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    // link converter tabs with the content
    const target = tab.dataset.target;
    const converterContent = converterTabby.querySelector("#" + target);

    // remove is-selected from every tab and add it back to the clicked one
    tabs.forEach((t) => t.classList.remove("is-selected"));
    tab.classList.add("is-selected");

    // remove is-selected from every tab content and add it back to the clicked one
    tabContents.forEach((c) => c.classList.remove("is-selected"));
    converterContent.classList.add("is-selected");
    //console.log(tabContent);
  });
});

// Click to show the converter
const showConverter = document.querySelector(".converter__show");
const converterContainer = document.querySelector(".converter-container");
showConverter.addEventListener("click", (event) => {
  converterContainer.style.display = "block";
  converterContainer.style.position = "fixed";
  converterContainer.style.right = "0";
  //converterContainer.style.transform = "scale(1.1)";
  showConverter.style.display = "none";
});
// Close the converter
const closeConverter = document.querySelector(".close");
closeConverter.addEventListener("click", (event) => {
  converterContainer.style.display = "none";
  showConverter.style.display = "block";
});

// Calculate the inputs
// get the input and make sure the inputs are numbers
let inputMeters = document.querySelector("#meters").value;
let inputFeet = document.querySelector("#feet").value;
console.log(inputMeters);
function calculateLength(inputMeters) {
  let resultFeet = (document.querySelector("#feet").value =
    inputMeters * 3.2808);
  console.log(typeof resultFeet);
}

// function calculateFeet() {

// }

// function calculateCelsius() {

// }
