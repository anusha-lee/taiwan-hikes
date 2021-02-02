let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/dc5986bcfacbd18c3971fdde11d77b4da894c9ed/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
