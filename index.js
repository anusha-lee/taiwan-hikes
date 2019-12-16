// fixed navigation bar after scrolling down
window.addEventListener("scroll", () => {
  const navFixed = document.querySelector(".header-box");
  const fromTop = window.scrollY;
  if (fromTop > 500) {
    navFixed.classList.add("fixedNav");
  } else {
    navFixed.classList.remove("fixedNav");
  }
});

// scroll up button

// window.addEventListener("scroll", function scrollUp() {
//   const scrollDown =
//     document.documentElement.scrollTop + document.body.scrollTop;
//   const scrollButton = document.querySelector(".scroll-up");
//   if (scrollDown > 30) {
//     scrollButton.style.display = "block";
//   } else {
//     scrollButton.style.display = "none";
//   }
// });

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

// Page scroll indicator
// window.onscroll = function() {
//   function scrollIndicator() {
//     const scroll =
//       document.body.scrollTop || document.documentElement.scrollTop;
//     const height =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;
//     let afterScroll = (scroll / height) * 100;
//     document.querySelector(".progress__bar").getElementsByClassName.width =
//       afterScroll + "%";
//   }
// };

/* 
const url = "https://api.myjson.com/bins/193ug0";
const container2 = document.querySelector("#trip-container");

function main() {
  getData();
  setDataToSite();
}

async function getData() {
  const result = await fetch(url);
  const data = await result.json();
  return data.trips;
}

async function setDataToSite() {
  const data = await getData();
  data.forEach(tripDetails => {
    const tripContainer = createAndAppendTripContainer();
    const arrayOfTripDetails = Object.entries(tripDetails);
    arrayOfTripDetails.forEach(item =>
      createItemAndAppendToTripContainer(item, tripContainer)
    );
  });
}

function createAndAppendTripContainer() {
  const tripContainer = document.createElement("div");
  tripContainer.className = "box";
  container2.appendChild(tripContainer);
  return tripContainer;
}

function createItemAndAppendToTripContainer(item, tripContainer) {
  const title = document.createElement("h3");
  const details = document.createElement("p");
  title.className = "title";
  details.className = "details";
  title.textContent = item[0];
  details.textContent = item[1];
  tripContainer.appendChild(title);
  tripContainer.appendChild(details);
}

main();
*/

//let url = "https://api.myjson.com/bins/193ug0";

let url = "https://api.myjson.com/bins/ruxz4";
let newHTML = document.getElementById("oneDayFree");

fetch(url)
  .then(res => res.json())
  .then(arr => {
    let eleKey = Object.keys(arr);
    let eleVal = Object.values(arr);
    let elePair = Object.entries(arr);

    if (eleVal.length >= 1) {
      for (let val of eleVal) {
        // Create and append the li's to the ul or divs to the parent div
        newHTML.innerHTML += `
                <div class="singleTrip">                    
                    <h3 class="singleTrip__title">Event: <br>${val.Event}</h3>
                    <div class="singleTrip__box">
                        <div class="singleTrip__box--oneDayFree singleTrip__color"><strong>Difficulty Level: </strong>${val.Difficulty_Level}</div>
                        <div class="singleTrip__box--oneDayFree"><span class="color-rating"></span></div>
                        <div class="singleTrip__box--oneDayFree"><strong>Date: </strong>${val.Date}</div>
                        <div class="singleTrip__box--oneDayFree"><strong>Meetup Time: </strong>${val.Meetup_Time}</div>
                        <div class="singleTrip__box--oneDayFree"><strong>Meetup Point: </strong>${val.Meetup_Point}</div>             
                        <div class="singleTrip__box--oneDayFree"><strong>Transportation: </strong>${val.Transportation}</div>                        
                        <div class="singleTrip__box--oneDayFree"><strong>Distance: </strong>${val.Distance}</div>
                        <div class="singleTrip__box--oneDayFree"><strong>Hiking Club: </strong>${val.Hiking_Club}</a></div>
                        <div class="singleTrip__box--oneDayFree"><strong>Guide: </strong>${val.Guide}</div>
                        <div class="singleTrip__box--oneDayFree"><strong>About the trail: <br></strong>${val.About_the_trail}</div>
                    </div>
            `;

        // assign challenging level colors
        function addDifficultyColor() {
          let checkDifficultyColor = val.Difficulty_Level;
          let addColor = document.createElement("span");
          //let colorBox = document.querySelector(".singleTrip__box");
          newHTML.appendChild(addColor);
          //colorBox.appendChild(addColor);

          for (let color of eleVal) {
            if (checkDifficultyColor === "A") {
              addColor.classList.add("color", "rating-green");
            } else if (
              checkDifficultyColor === "A+" ||
              checkDifficultyColor === "B"
            ) {
              addColor.classList.add("color", "rating-yellow");
            } else {
              addColor.classList.add("color", "red");
            }
          }
        }
        addDifficultyColor();

        //
        function sortTripsByDates() {
          return fetch(url)
            .then(res => res.json())
            .then(arr => {
              let dateStringToNum = Date.parse(val.Date);
              let dateArr = eleVal.map(date => Date.parse(date.Date));
              //console.log(eleVal);
              console.log(dateStringToNum);
            })
            .catch(err => console.error("Something went wrong!", err));
        }
        sortTripsByDates();
      }
    }
  })
  .catch(err => console.error("Something went wrong!", err));

/*********************************
 *  Click the buttons (sorted by date, or sorted by difficulty)
 * to sort the trips by dates or by difficulty rating
 * ************************************/
// function sortTripsByDates() {
//   return fetch(url)
//     .then(res => res.json())
//     .then(arr => {
//       let eleVal = Object.values(arr);
//       let dateStringToNum = Date.parse(val.Date);
//       let dateArr = eleVal.map(date => Date.parse(date.Date));

//       console.log(eleVal);
//     })
//     .catch(err => console.error("Something went wrong!", err));
// }
// sortTripsByDates();
