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
  //converterContainer.style.position = "fixed";
  converterContainer.style.right = ".5rem";
  //converterContainer.style.transform = "scale(1.1)";
  showConverter.style.display = "none";
});
// Close the converter
const closeConverter = document.querySelector(".close");
closeConverter.addEventListener("click", (event) => {
  converterContainer.style.display = "none";
  showConverter.style.display = "block";
});

// Calculate length
let inputMeters = document.querySelector("#meters");
let inputKM = document.querySelector("#km");
let inputFeet = document.querySelector("#feet");
let inputMiles = document.querySelector("#miles");

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function calcMeters() {
  const meterValue = parseFloat(inputMeters.value);
  const kmValue = meterValue / 1000;
  const feetValue = meterValue * 3.2808;
  const mileValue = meterValue * 0.00062137;

  inputKM.value = kmValue;
  inputFeet.value = feetValue;
  inputMiles.value = mileValue;
}

function calcKM() {
  const kmValue = parseFloat(inputKM.value);
  const meterValue = kmValue * 1000;
  const feetValue = kmValue * 3280.8;
  const mileValue = kmValue * 0.62137;

  inputMeters.value = meterValue;
  inputFeet.value = feetValue;
  inputMiles.value = mileValue;
}

function calcFeet() {
  const feetValue = parseFloat(inputFeet.value);
  const meterValue = feetValue / 3.2808;
  const kmValue = feetValue / 3280.8;
  const mileValue = feetValue * 0.00018939;

  inputMeters.value = meterValue;
  inputKM.value = kmValue;
  inputMiles.value = mileValue;
}

function calcMile() {
  const mileValue = parseFloat(inputMiles.value);
  const feetValue = mileValue * 5280;
  const meterValue = mileValue / 0.00062137;
  const kmValue = mileValue / 0.62137;

  inputMeters.value = meterValue.toFixed;
  inputKM.value = kmValue;
  inputMiles.value = mileValue;
}

inputMeters.addEventListener("input", calcMeters);
inputKM.addEventListener("input", calcKM);
inputFeet.addEventListener("input", calcFeet);
inputMiles.addEventListener("input", calcMile);

// Calculate temperature
