const locations = document.querySelector("#locations");
const levels = document.querySelector("#levels");
const features = document.querySelector("#features");
const originalBlog = document.querySelector(".original-blog");
const originalBlogContent = originalBlog.innerHTML;
const originalBlogChildren = [...originalBlog.children];
const searchResults = document.querySelector(".search-results");

// For Show All Posts button
const showAllPostsButton = document.querySelector(".show-all-post-btn");
function showAllPostsButtons() {
  showAllPostsButton.addEventListener("click", (event) => {
    searchResults.innerHTML = "";
    originalBlog.innerHTML = originalBlogContent;
  });
}

//Search locations
locations.addEventListener("change", () => {
  showAllPostsButtons();
  // Clear up the posts
  searchResults.innerHTML = "";
  originalBlog.innerHTML = "";
  // Loop through the data=location of each post
  originalBlogChildren.forEach((originalBlogChild) => {
    const postLocation = originalBlogChild.getAttribute("data-location");
    const locationValue = event.target.value;
    /* if the value of data-location is the same as option/event target value,
     the post will show up in search-results     */
    if (postLocation === locationValue) {
      searchResults.appendChild(originalBlogChild);
    }
  });
});

// Search levels
levels.addEventListener("change", () => {
  // Clear up the posts
  searchResults.innerHTML = "";
  showAllPostsButtons();
  originalBlog.innerHTML = "";
  // Loop through the data-level of each post
  originalBlogChildren.forEach((originalBlogChild) => {
    const postLevel = originalBlogChild.getAttribute("data-level");
    const levelValue = event.target.value;
    /* if the value of data-level is the same as option/event target value,
     the post will show up in search-results     */
    if (postLevel === levelValue) {
      searchResults.appendChild(originalBlogChild);
    }
  });
});

// // Search features
features.addEventListener("change", () => {
  // Clear up the posts
  searchResults.innerHTML = "";
  originalBlog.innerHTML = "";
  showAllPostsButtons();

  // Loop through the data-feature of each post
  originalBlogChildren.forEach((originalBlogChild) => {
    const postFeature = originalBlogChild.getAttribute("data-feature");
    const featureValue = event.target.value;
    /* if the value of data-feature is the same as option/event target value,
    the post results will show up*/
    if (postFeature === featureValue) {
      searchResults.appendChild(originalBlogChild);
    }
    // console.log(featureValue);
  });
});
