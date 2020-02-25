fetchGuidedTrips()
    // call the displayPreview() and pass guidedTrips from tripsArray.js
    .then( guidedTrips => displayPreview(guidedTrips))
    .catch()

function displayPreview() {
    let today = Date.parse(new Date());
    let upToDateTrips = guidedTrips.filter( trip => { return Date.parse(trip.date) > today});
    
    let previewTripsArray = upToDateTrips.splice(0,3);
    const previewTrips = document.querySelector("#previewTrips")
    previewTripsArray.forEach( trip => {
        previewTrips.innerHTML += `
          <div class="homepageTrip">
            <h3 class="homepageTrip__title">${trip.event}</h3>
            <div class="homepageTrip__box">
                <div class="homepageTrip__box--difficulty"><strong>Difficulty Level: </strong>${trip.difficultyLevel}</div>
                <div class="homepageTrip__box--date"><strong>Date: </strong>${trip.date}</div>
                <div class="homepageTrip__box--distance"><strong>Distance: </strong>${trip.distance}</div>
            </div>
          </div>
    `;})
}
