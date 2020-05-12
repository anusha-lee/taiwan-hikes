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
