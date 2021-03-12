let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/ff2cb11683bfe11931ffd61b48a3875e613e33fe/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
