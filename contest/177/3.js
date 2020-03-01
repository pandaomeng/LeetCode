/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
  const getFactor = n => {
    for (var i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
      if (n % i === 0) {
        return [i, n / i];
      }
    }
  };

  const num1 = num + 1;

  const num2 = num + 2;

  const res1 = getFactor(num1);
  const res2 = getFactor(num2);

  if (res1[1] - res1[0] > res2[1] - res2[0]) {
    return res2;
  } else {
    return res1;
  }
};

console.log("closestDivisors", closestDivisors(8));
console.log("closestDivisors", closestDivisors(123));
console.log("closestDivisors", closestDivisors(999));
