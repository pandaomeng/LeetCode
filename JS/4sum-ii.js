/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const map1 = {};
  const map2 = {};
  for (let a of A) {
    for (let b of B) {
      map1[a + b] = (map1[a + b] || 0) + 1;
    }
  }

  for (let c of C) {
    for (let d of D) {
      map2[c + d] = (map2[c + d] || 0) + 1;
    }
  }

  // console.log(map1);
  // console.log(map2);
  let count = 0;
  const keys = Object.keys(map1);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    count += map1[key] * (map2[0 - key] || 0);
  }
  return count;
};

console.log('fourSumCount', fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
