/**
 * @param {number[]} rains
 * @return {number[]}
 */
const avoidFlood = function (rains) {
  const map = {};
  const res = [];
  for (let i = 0; i < rains.length; i++) {
    res[i] = -1;
  }
  const emptyArr = [];
  for (let i = 0; i < rains.length; i++) {
    const pool = rains[i];
    if (pool === 0) {
      emptyArr.push(i);
      continue;
    }
    // 这个池子被装过水
    if (map[pool] !== undefined) {
      if (emptyArr.length === 0) return [];
      // 找到可用的 0 的位置，需要 > map[pool]
      let j;
      for (j = 0; j < emptyArr.length; j++) {
        if (emptyArr[j] > map[pool]) {
          break;
        }
      }
      if (j === emptyArr.length) return [];
      res[emptyArr[j]] = pool;
      emptyArr.splice(j, 1);
      map[pool] = i;
    } else {
      map[pool] = i;
    }
  }
  for (let i = 0; i < emptyArr.length; i++) {
    res[emptyArr[i]] = 1;
  }
  return res;
};

console.log('object', avoidFlood([0, 1, 1]));
console.log('object', avoidFlood([69, 0, 0, 0, 69]));
// console.log('object', avoidFlood([2, 3, 0, 0, 3, 1, 0, 1, 0, 2, 2]));
