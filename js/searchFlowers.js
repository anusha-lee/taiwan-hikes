const flowerColors = document.querySelector("#flower-colors");
const flowerSpecies = document.querySelector("#flower-species");
const flowerSpecialInterests = document.querySelector(
  "#flower-special-interests"
);
const flowerColorChildren = [...flowerColors.children];

const flower = document.querySelector(".flower");
const originalFlowerContent = flower.innerHTML;
const flowerChildren = [...flower.children];
const flowerSearchResults = document.querySelector(".flower-search-results");
const flowerInfo = flower.querySelector(".flower__info");
console.log(flowerSearchResults);

// For Show All Flowers button
const showAllFlowersBtn = document.querySelector(".show-all-flowers-btn");
console.log(showAllFlowersBtn);
function showAllFlowersButton() {
  showAllFlowersBtn.addEventListener("click", (event) => {
    flowerSearchResults.innerHTML = "";
    flower.innerHTML = originalFlowerContent;
  });
}

// Search flower colors
flowerColors.addEventListener("change", (event) => {
  // clear up the flowers
  flower.innerHTML = "";
  showAllFlowersButton();
  const searchColorValue = event.target.value;

  flowerColorChildren.forEach((flowerColorChild) => {
    const flowerBoxColor = flowerColorChild.getAttribute("data-color");

    // need to append the parent of flowerBoxColor
    // if (flowerBoxColor === searchColorValue) {
    //   flowerSearchResults.appendChild(flowerBoxColor);
    // }
  });
});

//console.log(flowerSearchResults);

// showAllFlowersButton();
