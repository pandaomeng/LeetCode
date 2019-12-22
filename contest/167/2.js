/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  let result = [];
  // 位数
  for (let i = 1; i <= 9; i++) {
    // 首位
    for (j = 1; j <= 9 && i + j <= 10; j++) {
      let now = 0;
      for (let k = 0; k < i; k++) {
        now = now * 10 + (j + k);
      }
      if (now < low) continue;
      if (now > high) return result;
      result.push(now);
    }
  }
  return result;
};

// console.log("result :", sequentialDigits(100, 300));
// console.log("result :", sequentialDigits(1000, 13000));
console.log("result :", sequentialDigits(10, 1000000000));
