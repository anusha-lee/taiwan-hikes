let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/c70e4f8dd66ee6597af3c2466e0b1d92d2fe7514/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
