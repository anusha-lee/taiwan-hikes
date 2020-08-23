const locations = document.querySelector("#locations");
const levels = document.querySelector("#levels");
const features = document.querySelector("#features");
const searchResults = document.querySelector(".search-results");
const searchResultsChildren = [
  ...document.querySelector(".search-results").children,
];

locations.addEventListener("change", (event) => {
  searchResultsChildren.forEach((searchResultsChild) => {
    const postLocation = searchResultsChild.getAttribute("data-location");
    const locationValue = event.target.value;
    if (postLocation === locationValue) {
      searchResults.innerHTML = "";
      searchResults.appendChild(searchResultsChild);
    } else {
      searchResults.innerHTML = "";
    }
  });
});
