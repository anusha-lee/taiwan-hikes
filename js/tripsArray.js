let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/63a7980563a0cd31c6eab423763da086021bdba1/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
