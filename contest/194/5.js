/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = function (arr) {
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  const temp = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== temp) { return false; }
  }
  return true;
};

console.log(canMakeArithmeticProgression([13, 12, -12, 9, 9, 16, 7, -10, -20, 0, 18, -1, -20, -10, -8, 15, 15, 16, 2, 15]));
