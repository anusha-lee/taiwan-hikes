let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/a4e43d2dde9c29da689994614d3480be21d177cd/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
