// fixed navigation bar after scrolling down
window.addEventListener("scroll", () => {
  const navFixed = document.querySelector(".header-box");
  const fromTop = window.scrollY;
  if (fromTop > 600) {
    navFixed.classList.add("fixedNav");
  } else {
    navFixed.classList.remove("fixedNav");
  }
});

// Add a keydown event when users press Escape key to close the hamburger menu

// scroll up button
window.addEventListener("scroll", function showScroll() {
  const top = window.scrollY;
  if (top > 100) {
    document.querySelector(".scroll-up").style.display = "block";
  } else {
    document.querySelector(".scroll-up").style.display = "none";
  }
});

const scrollToTopBtn = document.querySelector(".scroll-up");
const container = document.querySelector(".header");
scrollToTopBtn.addEventListener("click", function() {
  container.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Fetch JSON file to Guided Trips page
let url = "https://api.myjson.com/bins/ruxz4";
const oneDayFreeTrips = document.querySelector("#oneDayFree");
function getTripData() {
  fetch(url)
    .then(res => res.json())
    .then(arr => {
      let eleKey = Object.keys(arr);
      let eleVal = Object.values(arr);
      let elePair = Object.entries(arr);

      // Create and append the li's to the ul or div to the parent div
      if (eleVal.length >= 1) {
        for (let val of eleVal) {
          oneDayFreeTrips.innerHTML += `
                  <div class="singleTrip">
                      <h3 class="singleTrip__title">Event: <br>${val.Event}</h3>
                      <div class="singleTrip__box">
                        <div class="singleTrip__box--oneDayFree color-rating">${addDifficultyColor()}</div>
                        <div class="singleTrip__box--oneDayFree"><strong>Difficulty Level: </strong>${
                          val.Difficulty_Level
                        }</div>
                        <div class="singleTrip__box--oneDayFree"><strong>Date: </strong>${
                          val.Date
                        }</div>
                        <div class="singleTrip__box--oneDayFree"><strong>Meetup Time: </strong>${
                          val.Meetup_Time
                        }</div>
                        <div class="singleTrip__box--oneDayFree"><strong>Meetup Point: </strong>${
                          val.Meetup_Point
                        }</div>             
                        <div class="singleTrip__box--oneDayFree"><strong>Transportation: </strong>${
                          val.Transportation
                        }</div>                        
                        <div class="singleTrip__box--oneDayFree"><strong>Distance: </strong>${
                          val.Distance
                        }</div>
                        <div class="singleTrip__box--oneDayFree"><strong>Hiking Club: </strong>${
                          val.Hiking_Club
                        }</a></div>
                        <div class="singleTrip__box--oneDayFree"><strong>Guide: </strong>${
                          val.Guide
                        }</div>
                        <div class="singleTrip__box--oneDayFree"><strong>About the trail: <br></strong>${
                          val.About_the_trail
                        }</div>
                      </div>
              `;
        }
      }
    })
    .catch(err => console.error("Something about DOM went wrong!", err));
}
getTripData();

//assign challenging level colors
function addDifficultyColor() {
  fetch(url)
    .then(res => res.json())
    .then(arr => {
      let eleVal = Object.values(arr);

      for (let color of eleVal) {
        let checkDifficultyColor = color.Difficulty_Level;
        let addColor = document.createElement("span");

        if (checkDifficultyColor === "A") {
          addColor.classList.add("color", "rating-green");
        } else if (
          checkDifficultyColor === "A+" ||
          checkDifficultyColor === "B"
        ) {
          addColor.classList.add("color", "rating-yellow");
        } else {
          addColor.classList.add("color", "rating-red");
        }
      }
    })
    .catch(err => console.error("Color rating went wrong!", err));
}

// Click "Sorted by date" button to sort

/*
sortTripsByDates();

function sortTripsByDates() {
  fetch(url)
    .then(res => res.json())
    .then(resDate => {
      // https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

      let eleVal = Object.values(resDate);
      let dateArr = [];
      for (let trip of eleVal) {
        dateArr.push([trip, Date.parse(trip.Date)]);
        dateArr.sort(function(a, b) {
          return a[1] - b[1];
        });
      }

      let sortedEleVal = {};
      dateArr.forEach(function(item) {
        return (sortedEleVal[item[0]] = item[1]);
      });
    })
    .catch(err => console.error("Date sorting went wrong!", err));
}
*/
// Show all and Show less buttons on Guided Trips page
// Use the variable of oneDayFreeTrips on line 35
const showAllBtn = document.querySelector(".show-all__btn");
console.log(oneDayFreeTrips);
/*
showAllBtn.addEventListener("click", event => {
  if (oneDayFreeTrips.classList.contains("open")) {
    // shrink the box
    oneDayFreeTrips.classList.remove("open");
    showAllBtn.textContent = "Show All";
  } else {
    // expand the box
    oneDayFreeTrips.classList.add("open");
    showAllBtn.textContent = "Show Less";
  }
});
*/
// The expand button on About page: seems to be conflict with the button
// on guided trips page

const sizeBtn = document.querySelector(".size__btn");
const sizeCountries = document.querySelector(".size__countries");
console.log(sizeCountries);

sizeBtn.addEventListener("click", event => {
  if (sizeCountries.classList.contains("size-is-open")) {
    sizeCountries.classList.remove("size-is-open");
    sizeBtn.textContent = "Click to Expand";
  } else {
    sizeCountries.classList.add("size-is-open");
    sizeBtn.textContent = "Close";
  }
});

// Make onclick on those difficulty levels and only show those that are clicked
// For example, if users click difficulty hikes, only those will show up.
