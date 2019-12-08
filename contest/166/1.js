/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let numberArr = String(n).split("");
  const product = numberArr.reduce((a, c) => a * c, 1);
  const sum = numberArr.reduce((a, c) => a + +c, 0);
  return product - sum;
};

console.log("15: ", subtractProductAndSum(4421));
