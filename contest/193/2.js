/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = function (arr, k) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    map[current] = (map[current] || 0) + 1;
  }
  const array = Object.values(map);
  const sorted = array.sort((a, b) => a - b);
  const total = sorted.length;
  let removeCount = 0;
  let removeNumber = k;
  for (let i = 0; i < sorted.length; i++) {
    if (removeNumber >= sorted[i]) {
      removeCount += 1;
      removeNumber -= sorted[i];
    } else {
      break;
    }
  }
  return total - removeCount;
};

console.log('object', findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
