let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/3aa303bd76dff97b1277fd17677f1fe2ab6191c3/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
