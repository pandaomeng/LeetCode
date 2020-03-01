/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const isValid = (num) => {
      return `${num}`.indexOf('0') === -1
    }

    for (let i = 1; i<n;i++) {
      const b = n -i
      if (isValid(i) && isValid(b)) {
        return [i, b]
      }
    }
};

console.log(getNoZeroIntegers(2))
console.log(getNoZeroIntegers(11))
console.log(getNoZeroIntegers(10000))
console.log(getNoZeroIntegers(69))
console.log(getNoZeroIntegers(1010))

