/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  const res = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    res.push(sum);
  }
  return res;
};
