/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const res = [];
  let max = Math.min(n, target[target.length - 1]);
  for (let i = 1; i <= max; i++) {
    if (i === target[0]) {
      res.push('Push');
      target.shift();
    } else {
      res.push('Push');
      res.push('Pop');
    }
  }
  return res;
};

console.log('buildArray', buildArray([2, 3, 4], 4));
