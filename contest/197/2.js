/**
 * @param {string} s
 * @return {number}
 */
const numSub = function (s) {
  const mod = 1e9 + 7;
  const arr = s.split('0');
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].length;
    count += current * (current + 1) / 2;
    count %= mod;
  }
  return count;
};
