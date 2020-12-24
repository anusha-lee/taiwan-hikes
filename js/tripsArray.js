let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/82eb10c5e83cdd38630bf876269d6eab2ebbd411/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
