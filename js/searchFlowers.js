const flowerColors = document.querySelector("#flower-colors");
const flowerSpecies = document.querySelector("#flower-species");
const flowerSpecialInterests = document.querySelector("#flower-interests");

const flowerColorChildren = [...flowerColors.children];

const flower = document.querySelector(".flower");
const originalFlowerContent = flower.innerHTML;
const flowerChildren = [...flower.children];
const flowerSearchResults = document.querySelector(".flower-search-results");

// try to search through .
const flowerInfo = [...flower.querySelectorAll(".flower__info")];

// For Show All Flowers button
const showAllFlowersBtn = document.querySelector(".show-all-flowers-btn");
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
  flowerSearchResults.innerHTML = "";
  const searchColorValue = event.target.value;

  // search color
  flowerInfo.forEach((eachFlowerInfo) => {
    const flowerInfoColor = eachFlowerInfo.getAttribute("data-color");

    // Color: need to append the right dataset of eachFlowreInfo to flowerSearchResults
    if (flowerInfoColor === searchColorValue) {
      flowerSearchResults.appendChild(eachFlowerInfo);
    }
  });
  showAllFlowersButton();
});

// Search flower species
flowerSpecies.addEventListener("change", (event) => {
  // clear up the flowers
  flower.innerHTML = "";
  flowerSearchResults.innerHTML = "";
  const searchSpeciesValue = event.target.value;

  // search species
  flowerInfo.forEach((eachFlowerInfo) => {
    const flowerInfoSpecies = eachFlowerInfo.getAttribute("data-species");

    // Species: need to append the right dataset of eachFlowreInfo to flowerSearchResults
    if (flowerInfoSpecies === searchSpeciesValue) {
      flowerSearchResults.appendChild(eachFlowerInfo);
    }
  });
  showAllFlowersButton();
});

// Search flower interests
flowerSpecialInterests.addEventListener("change", (event) => {
  // clear up the flowers
  flower.innerHTML = "";
  flowerSearchResults.innerHTML = "";
  const searchInterestValue = event.target.value;
  console.log(searchInterestValue);

  // search species
  flowerInfo.forEach((eachFlowerInfo) => {
    const flowerInfoInterest = eachFlowerInfo.getAttribute("data-interests");

    // Species: need to append the right dataset of eachFlowreInfo to flowerSearchResults
    if (flowerInfoInterest === searchInterestValue) {
      flowerSearchResults.appendChild(eachFlowerInfo);
    }
  });
  showAllFlowersButton();
});
