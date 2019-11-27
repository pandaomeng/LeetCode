/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let sum = 0;
  for (let num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    max = Math.max(max, sum);
  }
  return max;
};

console.log("result", maxSubArray([-2, -1, 3, 6, -3, 7]));
