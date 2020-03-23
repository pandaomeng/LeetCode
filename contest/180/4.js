var maxPerformance = function(n, speed, efficiency, k) {
  let totalSpeed = 0;
  let minEff = 999999;
  let maxTotal = 0;
  let maxTotalArr = [];
  for (let i = 0; i < k; i++) {
    let maxTemp = -1;
    let maxJ;
    let j = 0;
    for (j = 0; j < speed.length; j++) {
      currentSpeed = speed[j];
      currentEfficiency = Math.min(efficiency[j], minEff);
      const current = (totalSpeed + currentSpeed) * currentEfficiency;

      if (current > maxTemp) {
        maxTemp = current;
        maxJ = j;
      }
    }
    minEff = Math.min(minEff, efficiency.splice(maxJ, 1));
    totalSpeed += +speed.splice(maxJ, 1);
    if (maxTemp <= maxTotal) {
      break;
    }
    maxTotal = maxTemp;
  }
  return maxTotal % (10 ** 9 + 7);
};

console.log(
  'maxPerformance',
  maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 4)
);
