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
