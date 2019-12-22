/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const sortedArr = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < sortedArr.length; i++) {
    const current = sortedArr[i];
    const rest = sortedArr.filter((item, j) => j !== i);

    // const uniqueArr = [...new Set(rest)];
    const map = uniqueArr.reduce((a, c) => ({ ...a, [c]: c }), {});
    for (let j = 0; j < uniqueArr.length; j++) {
      const theSecond = uniqueArr[j];
      const theThird = map[0 - (current + theSecond)];
      if (theThird !== undefined) {
        result.push([current, theSecond, theThird]);
      }
    }

    console.log("current", current);
    console.log("rest", rest);
  }
  return result;
  console.log("sortedArr", sortedArr);
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
