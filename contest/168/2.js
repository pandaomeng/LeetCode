/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
  if (nums.length % k !== 0) return false;

  let tempArr = [...nums].sort((a, b) => a - b);
  while (tempArr.length > 0) {
    let first = tempArr[0];
    for (let i = 0; i < k; i++) {
      const index = tempArr.indexOf(first + i);
      if (index === -1) {
        return false;
      }
      tempArr.splice(index, 1);
    }
  }

  return true;
};

console.log("isPossibleDivide", isPossibleDivide([1, 2, 3, 3, 4, 4, 5, 6], 4));
console.log(
  "isPossibleDivide",
  isPossibleDivide([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3)
);
console.log("isPossibleDivide", isPossibleDivide([3, 3, 2, 2, 1, 1], 3));
console.log("isPossibleDivide", isPossibleDivide([1, 2, 3, 4], 3));
