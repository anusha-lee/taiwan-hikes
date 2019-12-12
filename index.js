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

// Free guided trips
// Old url: "https://api.myjson.com/bins/yt8bl"
// 2019/12/7 latest updated guide trips: https://api.myjson.com/bins/193ug0
/*
let url = "https://api.myjson.com/bins/193ug0";
let newHTML = document.getElementById("oneDayFree");

fetch(url)
  .then(res => res.json())
  // .then(res => {
  //   res.ok ? console.log("Success!") : console.log("Something wrong.");
  // })
  .then(arr => {
    console.log(arr);
    let eleKey = Object.keys(arr);
    let eleVal = Object.values(arr);
    let elePair = Object.entries(arr);

    //console.log(eleVal);

    if (eleVal.length >= 1) {
      for (let val of eleVal) {
        // Create and append the li's to the ul or divs to the parent div
        newHTML.innerHTML += `
                <div class="singleTrip">
                    <h3 class="singleTrip__title">活動Event: ${val.活動Event}</h3>
                    <div class="singleTrip__box">
                        <div class="trips__hikes--oneDayFree"><strong>日期Date: </strong>${val.Date}</div>
                        <div class="trips__hikes--oneDayFree"><strong>集合時間Meetup Time: </strong>${val.Meetup_Time}</div>
                        <div class="trips__hikes--oneDayFree"><strong>集合地點Meetup Point: </strong>${val.Meetup_Point}</div>                        
                        <div class="trips__hikes--oneDayFree"><strong>交通Transportation: </strong>${val.Transportation}</div>
                        <div class="trips__hikes--oneDayFree"><strong>難度Difficulty Level: </strong>${val.Difficulty_Level}</div>
                        <div class="trips__hikes--oneDayFree"><strong>里程Distance: </strong>${val.Distance}</div>
                        <div class="trips__hikes--oneDayFree"><a href="#"><strong>社團Hiking Club: </strong><a href="#">${val.Hiking_Club}</a></div>
                        <div class="trips__hikes--oneDayFree"><strong>領隊Guide: </strong>${val.Guide}</div>
                        <div class="trips__hikes--oneDayFree"><strong>路線簡介About the trail: <br></strong>${val.About_the_trail}</div>
                    </div>
            `;
      }
    }
  })
  .catch(err => console.error("Something went wrong!", err));

// Make another function to extract the difficulty level and assign the associated colors

*/

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
