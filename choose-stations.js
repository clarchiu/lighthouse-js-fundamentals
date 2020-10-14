const chooseStations = function (stations) {
  // Your code in here ...
  let toReturn = [];
  for (let station of stations) {
    if (station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")) {
      toReturn.push(station[0]);
    }
  }
  return toReturn;
}