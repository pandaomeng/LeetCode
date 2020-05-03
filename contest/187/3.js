/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let max = nums[i];
    for (let j = i; j < nums.length; j++) {
      max = Math.max(max, nums[j]);
      min = Math.min(min, nums[j]);

      if (max - min > limit) {
        const currentMax = j - i;
        result = Math.max(result, currentMax);
        break;
      }
      if (j === nums.length - 1) {
        console.log('here');
        const currentMax = j - i + 1;
        result = Math.max(result, currentMax);
        break;
      }
    }
  }
  if (result === 1 && limit >= 0) return 1;
  if (result === 1 && limit < 0) return 0;
  return result;
};

// console.log('longestSubarray()', longestSubarray([4, 8, 5, 1, 7, 9], 6));
// console.log('longestSubarray()', longestSubarray([8, 2, 4, 7], 4));
console.log('longestSubarray()', longestSubarray([10, 1, 2, 4, 7, 2], 5));
// console.log('longestSubarray()', longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0));
// console.log('longestSubarray()', longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], -1));
// console.log('longestSubarray()', longestSubarray([8], 10));
