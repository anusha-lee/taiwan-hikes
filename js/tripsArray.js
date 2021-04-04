let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/5428fb94a4d8c4a4f596f356c9fd1cd865fa0b32/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
