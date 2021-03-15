let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/194125dd8dc2592ddb73419e46a7e8e59bb0bd36/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
