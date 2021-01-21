let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/5657ae2b24e1dea7cc76ae95f520ccec1892025f/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
