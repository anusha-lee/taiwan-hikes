let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/ba1cef844b7b1402d7a742eb0cd25cb671427705/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
