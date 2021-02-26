let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/5033c382a56ccbdeeb203d830c1e317af070bf42/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
