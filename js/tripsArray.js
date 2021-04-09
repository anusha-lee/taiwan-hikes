let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/018526f46d8f00604c57ade7144045b409e308a4/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
