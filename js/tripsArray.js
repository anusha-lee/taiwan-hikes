let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/558a94da7e5c3f5dc44bf5609b870c8ea6a94242/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
