/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  const sorted = nums.sort((a, b) => b - a);
  const sum = nums.reduce((a, c) => a + c, 0);
  const half = sum / 2;
  let current = 0;
  let res = [];
  for (let i = 0; i < sorted.length; i += 1) {
    res.push(sorted[i]);
    current += sorted[i];
    if (current > half) {
      return res;
    }
  }
};

console.log('minSubsequence()', minSubsequence([4, 3, 10, 9, 8]));
