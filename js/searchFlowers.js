const flowerColors = document.querySelector("#flower-colors");
const flowerSpecies = document.querySelector("#flower-species");
const flowerSpecialInterests = document.querySelector(
  "#flower-special-interests"
);

const flower = document.querySelector(".flower");
const originalFlowerContent = flower.innerHTML;
const flowerChildren = [...flower.children];
const flowerSearchResults = document.querySelector(".flower-search-results");
const flowerInfo = flower.querySelector(".flower__info");

// For Show All Flowers button
const showAllFlowersBtn = document.querySelector(".show-all-flowers-btn");
function showAllFlowersButton() {
  showAllFlowersBtn.addEventListener("click", () => {
    flowerSearchResults.innerHTML = "";
    flower.innerHTML = originalFlowerContent;
  });
}

// Search flower colors
flowerColors.addEventListener("change", (event) => {
  //showAllFlowersButton();
  // clear up the flowers
  flowerSearchResults.innerHTML = "";
  flower.innerHTML = "";

  flowerColors.map((flowerColor) => {
    const flowerBoxColor = flowerColor.getAttribute("data-color");
    console.log(flowerBoxColor);
    if (flowerBoxColor === colorValue) {
      return flowerSearchResults.appendChild(flowerChild);
    }
  });
});

//console.log(flowerSearchResults);

// showAllFlowersButton();
