let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/ec07bd4a4e12d9a1d7cc74c837a55452f978a4ca/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
