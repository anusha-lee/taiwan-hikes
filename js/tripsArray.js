let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/eb96f9888c96462b11818c48bc6d2528ef0ec6ce/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
