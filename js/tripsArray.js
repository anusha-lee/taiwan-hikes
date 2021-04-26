let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/4139d806c4389fce01eb81ac58e7d985061a3573/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
