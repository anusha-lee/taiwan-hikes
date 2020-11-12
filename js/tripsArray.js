let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/17bae07b1daef73af8cb70b63e60526066bf4c9d/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
