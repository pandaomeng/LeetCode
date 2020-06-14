/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const newNums = nums.map(each => each -1)
  let max = newNums[0] * newNums[1]
  for (let i=0;i<newNums.length -1;i++) {
    for (let j=i+1;j<newNums.length;j++) {
      let temp = newNums[i] * newNums[j]
      max = Math.max(temp, max)
    }
  }
  return max
};

console.log('object', maxProduct([3,4,5,2]))