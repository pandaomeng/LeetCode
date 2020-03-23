/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  const getFactors = num => {
    let i = 2;
    let temp = num;
    const result = [];
    for (let i = 1; i <= temp; i++) {
      if (temp % i === 0) {
        result.push(i);
      }
    }
    return result;
  };

  return nums.reduce((a, c) => {
    const factors = getFactors(c);
    if (factors.length === 4)
      return a + factors.reduce((acc, cur) => cur + acc, 0);
    return a;
  }, 0);
};

console.log('sumFourDivisors', sumFourDivisors([21, 4, 7]));
