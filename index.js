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
let newHTML = document.getElementById("oneDayFree");

// assign challenging level colors
/*
addDifficultyColor();
*/
function addDifficultyColor() {
  fetch(url)
    .then(res => res.json())
    .then(arr => {
      let eleVal = Object.values(arr);

      for (let color of eleVal) {
        let checkDifficultyColor = color.Difficulty_Level;
        let addColor = document.createElement("span");
        //let colorRating = document.querySelector(".color-rating");// something wrong with this
        //let colorRating = document.querySelector(".singleTrip");// something wrong with this
        //colorRating.appendChild(addColor);
        //newHTML.appendChild(addColor); // something wrong with this
        //colorRating.appendChild(addColor);
        //console.log(colorRating);

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

getTripData();

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
          newHTML.innerHTML += `
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

// Click "Sorted by date" button to sort

sortTripsByDates();

function sortTripsByDates() {
  fetch(url)
    .then(res => res.json())
    .then(resDate => {
      // console.log(Date.parse(resDate[0].Date));
      // console.log(typeof resDate);
      // let a = Date.parse(resDate[0].Date);
      // let b = Date.parse(resDate[15].Date);
      // function getSortedOrder(a, b) {
      //   if (a > b) {
      //     return 1;
      //   } else if (a < b) {
      //     return -1;
      //   }
      //   return 0;
      // }

      // https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
      // https://stackoverflow.com/questions/43773092/how-to-sort-objects-by-value

      let eleVal = Object.values(resDate);
      let dateArr = [];
      // for (let date of eleVal) {
      //   dateArr.push()
      // }

      // let eleVal = Object.values(resDate);
      // for (let date of eleVal) {
      //   let dateStringToNum = Date.parse(date.Date);

      //   console.log(dateStringToNum);

      //   function sortedDate() {
      //     return function getSortedOrder(a, b) {
      //       if (a > b) {
      //         return 1;
      //       } else if (a < b) {
      //         return -1;
      //       }
      //       return 0;
      //     };
      //     sortedDate();
      //     //console.log(sortedDate(dateStringToNum));
      //   }
      // }
    })
    .catch(err => console.error("Date sorting went wrong!", err));
}

// Show all and Show less buttons
let oneDayFree = document.getElementById("oneDayFree");
let showAllBtn = document.querySelector(".show-all__btn");
let positionAfterShow = window.scrollY;

showAllBtn.onclick = function() {
  if (oneDayFree.className == "open") {
    // shrink the box
    oneDayFree.className = "";
    showAllBtn.innerHTML = "Show all";
  } else {
    // expand the box
    oneDayFree.className = "open";
    showAllBtn.innerHTML = "Show less";
  }
};

//Sorting function
function getSortedOrder(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
}

// Make onclick on those difficulty levels and only show those that are clicked
// For example, if users click difficulty hikes, only those will show up.
