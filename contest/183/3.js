/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let letterArr = ['a', 'b', 'c'];
  let inputArr = [a, b, c];
  let [x, y, z] = inputArr;
  let res = '';
  z = Math.min(z, (x + y + 1) * 2);
  while (z !== 0) {
    if (z > x + y + 1) {
      z -= 2;
      res += letterArr[2] + letterArr[2];
    } else {
      z -= 1;
      res += letterArr[2];
    }

    if (x > y) {
      if (x === 0) return res;
      x -= 1;
      res += letterArr[0];
    } else {
      if (y === 0) return res;
      y -= 1;
      res += letterArr[1];
    }
  }
  while (y !== 0) {}
  return res;
};

console.log('longestDiverseString', longestDiverseString(1, 1, 7));
console.log('longestDiverseString', longestDiverseString(1, 2, 2));
console.log('longestDiverseString', longestDiverseString(0, 1, 7));
