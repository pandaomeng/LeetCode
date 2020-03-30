/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
  let result = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length - 4; i++) {
    for (let j = i + 1; j <= nums.length - 3; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) {
            left += 1;
            continue;
          }
          while (nums[right] === nums[right - 1]) {
            right -= 1;
            continue;
          }
          left += 1;
          right -= 1;
        } else if (sum < target) {
          left += 1;
        } else if (sum > target) {
          right -= 1;
        }
      }
      while (nums[j] === nums[j + 1]) {
        j += 1;
      }
    }
    while (nums[i] === nums[i + 1]) {
      i += 1;
    }
  }
  return result;
};
