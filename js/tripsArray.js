let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/5c520f1eda066014da043fc01c7bb7c05d339129/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
