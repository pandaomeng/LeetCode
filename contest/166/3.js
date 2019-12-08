var smallestDivisor = function(nums, threshold) {
  const maxNum = nums.reduce((a, c) => (a > c ? a : c), 0);

  let lowerBound = 0;
  let upperBound = maxNum;

  while (lowerBound + 1 < upperBound) {
    const mid = Math.floor((lowerBound + upperBound) / 2);
    const currentResult = nums.reduce((a, c) => a + Math.ceil(c / mid), 0);

    // 符合条件，则减小数值做尝试，缩小上界
    if (currentResult <= threshold) {
      upperBound = mid;
    } else {
      lowerBound = mid;
    }
  }

  return upperBound;
};

console.log("result", smallestDivisor([1, 2, 5, 9], 6)); // 5
console.log("result", smallestDivisor([2, 3, 5, 7, 11], 11)); // 3
console.log("result", smallestDivisor([19], 5)); // 4
console.log("result", smallestDivisor([91, 41, 78, 86, 8], 114)); // 3
console.log("result", smallestDivisor([1, 2, 3], 6)); // 1
console.log(
  "result",
  smallestDivisor([962551, 933661, 905225, 923035, 990560], 10)
); // 495280
