let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/8d61bbb17838d79af40e1363afbf4c98c5184c35/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
