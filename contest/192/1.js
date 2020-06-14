/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let res = []
  for (let i=0;i<n;i++) {
    for (let k=0;true;k++) {
      let index = k*n+i
      if (index > nums.length - 1) break
      res.push(nums[index])
    }
  }
  return res
};

console.log('shuffle', shuffle())