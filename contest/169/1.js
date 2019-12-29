/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let temp = [];
  if (n % 2 === 1) {
    temp.push(0);
  }
  for (let i = 1; i < Math.floor(n / 2) + 1; i++) {
    temp.push(i);
    temp.push(-i);
  }
  return temp;
};

// console.log("sumZero()", sumZero(1));
// console.log("sumZero()", sumZero(2));
// console.log("sumZero()", sumZero(3));
console.log("sumZero()", sumZero(4));
// console.log("sumZero()", sumZero(5));
