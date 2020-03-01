/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
  const sorted = digits.sort((a, b) => b - a);
  const sum = sorted.reduce((a, c) => a + c);

  if (sum % 3 === 0) {
    return sorted
      .reduce((a, c) => a + c, "")
      .replace(/([0]*)([1-9]+[0-9]+|0)/g, "$2");
  }

  let i;
  for (i = sorted.length - 1; i >= 0; i--) {
    if ((sum - sorted[i]) % 3 === 0) {
      return sorted
        .filter((item, index) => index !== i)
        .reduce((a, c) => a + c, "")
        .replace(/([0]*)([1-9]+[0-9]+|0)/g, "$2");
    }
  }
  for (let j = sorted.length - 2; j >= 0; j--) {
    for (let k = sorted.length - 1; k > j; k--) {
      if ((sum - sorted[j] - sorted[k]) % 3 === 0) {
        return sorted
          .filter((item, index) => index !== j && index !== k)
          .reduce((a, c) => a + c, "")
          .replace(/([0]*)([1-9]+[0-9]+|0)/g, "$2");
      }
    }
  }

  return "";
};

console.log("largestMultipleOfThree", largestMultipleOfThree([8, 1, 9]));
console.log("largestMultipleOfThree", largestMultipleOfThree([8, 6, 7, 1, 0]));
console.log("largestMultipleOfThree", largestMultipleOfThree([1]));
console.log(
  "largestMultipleOfThree",
  largestMultipleOfThree([0, 0, 0, 0, 0, 0])
);

console.log("largestMultipleOfThree", largestMultipleOfThree([9, 8, 6, 8, 6]));

// 0 2 0 2 0
