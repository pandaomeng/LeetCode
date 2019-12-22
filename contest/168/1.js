/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  return nums.reduce((a, c) => {
    const str = "" + c;
    const isValid = str.length % 2 === 0;
    if (isValid) {
      return a + 1;
    }
    return a;
  }, 0);
};

console.log("findNumbers", findNumbers([555, 901, 482, 1771]));
