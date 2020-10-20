const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let best = vegetables[0];
  for (let veg of vegetables) {
    best = best[metric] > veg[metric] ? best : veg;
  }
  return best.submitter;
}