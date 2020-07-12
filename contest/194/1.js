/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function (n, start) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    const current = start + i * 2;
    res ^= current;
  }
  return res;
};

console.log('xor', xorOperation(5, 0));
