let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/ef18008ba5dd8880792c25aa308f06d6d4e427a4/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
