let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/83a4955b3b26a6018e86447bff5a7e931dc0eed6/trips.json"
  );  
  guidedTrips = await response.json();
  return guidedTrips;
}
