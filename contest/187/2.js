/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let lastPos = -1;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current === 1 && lastPos === -1) {
      lastPos = i;
      continue;
    }
    if (current === 1) {
      if (i - lastPos - 1 < k) return false;
      lastPos = i;
    }
  }
  return true;
};

console.log('object', kLengthApart([1, 0, 0, 1, 0, 0, 0, 1], 2));
console.log('object', kLengthApart([1, 1, 1, 1, 1], 0));
console.log('object', kLengthApart([0, 1, 1, 1], 1));
