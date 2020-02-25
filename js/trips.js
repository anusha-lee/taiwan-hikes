fetchGuidedTrips()
    // call the displayPreview() and pass guidedTrips from tripsArray.js
    .then( guidedTrips => displayTrips(guidedTrips))
    .catch()

function displayTrips() {
    let today = Date.parse(new Date())
    let upToDateTrips = guidedTrips.filter( trip => { return Date.parse(trip.date) > today});
    
    // Sort upToDateTrips by dates
    upToDateTrips.sort( (a, b) => {
        if (Date.parse(a.date) > Date.parse(b.date)) {
            return 1;
          } else if (Date.parse(a.date) < Date.parse(b.date)) {
            return -1;
          } else {
            return 0;
          }
    })
    // Guided Free Hikes
    const allTrips = document.querySelector("#allTrips");

    upToDateTrips.forEach(trip => {
      allTrips.innerHTML += `
          <div class="eachTrip">
            <div class="eachTrip__color-rating"></div>
            <div class="eachTrip__title"><strong>${trip.event}</strong></div>
            <div class="eachTrip__box">          
              <div class="eachTrip__box--difficulty"><strong>Difficulty Level: </strong>${trip.difficultyLevel}</div>
              <div class="eachTrip__box--date"><strong>Date: </strong>${trip.date}</div>
              <div class="eachTrip__box--meetup-time"><strong>Meetup Time: </strong>${trip.meetupTime}</div>
              <div class="eachTrip__box--meetup-point"><strong>Meetup Point: </strong>${trip.meetupPoint}</div>
              <div class="eachTrip__box--transportation"><strong>Transportation: </strong>${trip.transportation}</div>
              <div class="eachTrip__box--distance"><strong>Distance: </strong>${trip.distance}</div>
              <div class="eachTrip__box--hiking-club"><strong>Hiking Club: </strong>${trip.hikingClub}</div>
              <div class="eachTrip__box--guide"><strong>Guide: </strong>${trip.guide}</div>
              <div class="eachTrip__box--about-trail"><strong>About the trail: <br></strong>${trip.aboutTrail}</div>
            </div>
          </div>
          `;

      // Assign rating color bars for each trip box
      const ratingColor = document.querySelectorAll(".eachTrip__color-rating");

      ratingColor.forEach(checkColor => {
        if (trip.difficultyLevel === "A") {
          checkColor.classList.replace("eachTrip__color-rating", "rating-green");
        } else if (trip.difficultyLevel === "B") {
          checkColor.classList.replace("eachTrip__color-rating", "rating-yellow");
        } else {
          checkColor.classList.replace("eachTrip__color-rating", "rating-red");
        }
      });
    });

    // Sort out the trips according to the difficulity level
    // by clicking the difficulty level
    const greenBtn = document.querySelector(".green");
    const yellowBtn = document.querySelector(".yellow");
    const redBtn = document.querySelector(".red");
    const allBtn = document.querySelector(".all");
    let difficulitySortingA = [];
    let difficulitySortingB = [];
    let difficulitySortingC = [];
    const eachTrip = allTrips.querySelector(".eachTrip");

    greenBtn.addEventListener("click", event => {
      allTrips.innerHTML = "";
      upToDateTrips.forEach(trip => {
        if (trip.difficultyLevel === "A") {
          difficulitySortingA.push(trip);
          allTrips.innerHTML += `
          <div class="eachTrip">
            <div class="eachTrip__color-rating"></div>
            <div class="eachTrip__title"><strong>${trip.event}</strong></div>
            <div class="eachTrip__box">
              <div class="eachTrip__box--difficulty"><strong>Difficulty Level: </strong>${trip.difficultyLevel}</div>
              <div class="eachTrip__box--date"><strong>Date: </strong>${trip.date}</div>
              <div class="eachTrip__box--meetup-time"><strong>Meetup Time: </strong>${trip.meetupTime}</div>
              <div class="eachTrip__box--meetup-point"><strong>Meetup Point: </strong>${trip.meetupPoint}</div>
              <div class="eachTrip__box--transportation"><strong>Transportation: </strong>${trip.transportation}</div>
              <div class="eachTrip__box--distance"><strong>Distance: </strong>${trip.distance}</div>
              <div class="eachTrip__box--hiking-club"><strong>Hiking Club: </strong>${trip.hikingClub}</div>
              <div class="eachTrip__box--guide"><strong>Guide: </strong>${trip.guide}</div>
              <div class="eachTrip__box--about-trail"><strong>About the trail: <br></strong>${trip.aboutTrail}</div>
            </div>
          </div>
          `;
        }
        const ratingColor = document.querySelectorAll(".eachTrip__color-rating");
        ratingColor.forEach(checkColor => {
          checkColor.classList.replace("eachTrip__color-rating", "rating-green");
        });
      });
    });

    yellowBtn.addEventListener("click", event => {
      allTrips.innerHTML = "";
      upToDateTrips.forEach(trip => {
        if (trip.difficultyLevel === "B") {
          difficulitySortingB.push(trip);
          allTrips.innerHTML += `
          <div class="eachTrip">
            <div class="eachTrip__color-rating"></div>
            <div class="eachTrip__title"><strong>${trip.event}</strong></div>
            <div class="eachTrip__box">
              <div class="eachTrip__box--difficulty"><strong>Difficulty Level: </strong>${trip.difficultyLevel}</div>
              <div class="eachTrip__box--date"><strong>Date: </strong>${trip.date}</div>
              <div class="eachTrip__box--meetup-time"><strong>Meetup Time: </strong>${trip.meetupTime}</div>
              <div class="eachTrip__box--meetup-point"><strong>Meetup Point: </strong>${trip.meetupPoint}</div>
              <div class="eachTrip__box--transportation"><strong>Transportation: </strong>${trip.transportation}</div>
              <div class="eachTrip__box--distance"><strong>Distance: </strong>${trip.distance}</div>
              <div class="eachTrip__box--hiking-club"><strong>Hiking Club: </strong>${trip.hikingClub}</div>
              <div class="eachTrip__box--guide"><strong>Guide: </strong>${trip.guide}</div>
              <div class="eachTrip__box--about-trail"><strong>About the trail: <br></strong>${trip.aboutTrail}</div>
            </div>
          </div>
          `;
        }
        const ratingColor = document.querySelectorAll(".eachTrip__color-rating");
        ratingColor.forEach(checkColor => {
          checkColor.classList.replace("eachTrip__color-rating", "rating-yellow");
        });
      });
    });

    redBtn.addEventListener("click", event => {
      allTrips.innerHTML = "";
      upToDateTrips.forEach(trip => {
        if (trip.difficultyLevel === "B+" || trip.difficultyLevel === "C") {
          difficulitySortingC.push(trip);
          allTrips.innerHTML += `
          <div class="eachTrip">
            <div class="eachTrip__color-rating"></div>
            <div class="eachTrip__title"><strong>${trip.event}</strong></div>
            <div class="eachTrip__box">
              <div class="eachTrip__box--difficulty"><strong>Difficulty Level: </strong>${trip.difficultyLevel}</div>
              <div class="eachTrip__box--date"><strong>Date: </strong>${trip.date}</div>
              <div class="eachTrip__box--meetup-time"><strong>Meetup Time: </strong>${trip.meetupTime}</div>
              <div class="eachTrip__box--meetup-point"><strong>Meetup Point: </strong>${trip.meetupPoint}</div>
              <div class="eachTrip__box--transportation"><strong>Transportation: </strong>${trip.transportation}</div>
              <div class="eachTrip__box--distance"><strong>Distance: </strong>${trip.distance}</div>
              <div class="eachTrip__box--hiking-club"><strong>Hiking Club: </strong>${trip.hikingClub}</div>
              <div class="eachTrip__box--guide"><strong>Guide: </strong>${trip.guide}</div>
              <div class="eachTrip__box--about-trail"><strong>About the trail: <br></strong>${trip.aboutTrail}</div>
          </div>
          </div>
          `;
        }
        const ratingColor = document.querySelectorAll(".eachTrip__color-rating");
        ratingColor.forEach(checkColor => {
          checkColor.classList.replace("eachTrip__color-rating", "rating-red");
        });
      });
    });

    allBtn.addEventListener("click", event => {
      allTrips.innerHTML = "";
      upToDateTrips.forEach(trip => {
        allTrips.innerHTML += `
            <div class="eachTrip">
              <div class="eachTrip__color-rating"></div>
              <div class="eachTrip__title"><strong>${trip.event}</strong></div>
              <div class="eachTrip__box">
              <div class="eachTrip__box--difficulty"><strong>Difficulty Level: </strong>${trip.difficultyLevel}</div>
              <div class="eachTrip__box--date"><strong>Date: </strong>${trip.date}</div>
              <div class="eachTrip__box--meetup-time"><strong>Meetup Time: </strong>${trip.meetupTime}</div>
              <div class="eachTrip__box--meetup-point"><strong>Meetup Point: </strong>${trip.meetupPoint}</div>             
              <div class="eachTrip__box--transportation"><strong>Transportation: </strong>${trip.transportation}</div>                        
              <div class="eachTrip__box--distance"><strong>Distance: </strong>${trip.distance}</div>
              <div class="eachTrip__box--hiking-club"><strong>Hiking Club: </strong>${trip.hikingClub}</div>
              <div class="eachTrip__box--guide"><strong>Guide: </strong>${trip.guide}</div>
              <div class="eachTrip__box--about-trail"><strong>About the trail: <br></strong>${trip.aboutTrail}</div>
            </div>
            </div>
            `;
        // Assign rating color bars for each trip box
        const ratingColor = document.querySelectorAll(".eachTrip__color-rating");
        ratingColor.forEach(checkColor => {
          if (trip.difficultyLevel === "A") {
            checkColor.classList.replace("eachTrip__color-rating", "rating-green");
          } else if (trip.difficultyLevel === "B") {
            checkColor.classList.replace("eachTrip__color-rating", "rating-yellow");
          } else {
            checkColor.classList.replace("eachTrip__color-rating", "rating-red");
          }
        });
      });
    });
}