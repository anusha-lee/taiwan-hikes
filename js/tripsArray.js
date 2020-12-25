let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/b377c2cf8c22dd8acfd494ba7967b8b5ca8207dd/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
