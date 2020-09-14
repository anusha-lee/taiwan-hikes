let guidedTrips = [];

async function fetchGuidedTrips() {
  let response = await fetch(
    "https://gist.githubusercontent.com/anusha-lee/fb0d5987943b7044745131c142bd6ebb/raw/414cf98b29e7f07be4ff3aab379b817e80350204/trips.json"
  );
  //    let response = await fetch('https://gist.githubusercontent.com/madaf/3934fad7205adfb3abdb7b79737898f0/raw/db29239d6205807b55ea4dc372fa5ff01bf57b0e/trips.json');
  guidedTrips = await response.json();
  return guidedTrips;
}
