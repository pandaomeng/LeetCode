/**
 * @param {number[][]} points
 * @param {number} r
 * @return {number}
 */
var numPoints = function (points, r) {
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let a = points[i];
      let [x1, y1] = a;
      let b = points[j];
      let [x2, y2] = b;
      let H = [(x1 + x2) / 2, (y1 + y2) / 2];
      let ab = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
      let OH = Math.sqrt(r ** 2 - (ab / 2) ** 2);

      let Tangle = Math.atan((y2 - y1) / (x2 - x1));
      const O1 = [H[0] + OH * Math.sin(Tangle), H[1] + OH * Math.cos(Tangle)];
      const O2 = [H[0] + OH * Math.sin(-Tangle), H[1] - OH * Math.cos(-Tangle)];
      if (a[0] === 3) {
        console.log('a', a);
        console.log('b', b);
        console.log('H', H);
        console.log('O1', O1);
        console.log('O2', O2);
      }

      // (x-x1) ** 2 + (y-y1) ** 2 === r ** 2
      // (x-x2) ** 2 + (y-y2) ** 2 === r ** 2
      // (x2 - x1)(2 * x - x1 - x2) + (y2 - y1)(2 * y - y1 - y2) === 0;
    }
  }
};

console.log(
  'numPoints',
  numPoints(
    [
      [-3, 0],
      [3, 0],
      [2, 6],
      [5, 4],
      [0, 9],
      [7, 8],
    ],
    5
  )
);
