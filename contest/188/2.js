/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  const length = arr.length;
  let count = 0;
  for (let i = 0; i <= length - 2; i++) {
    for (let j = i + 1; j <= length - 1; j++) {
      for (let k = j; k <= length - 1; k++) {
        let a = 0;
        let b = 0;
        for (let m = i; m <= j - 1; m++) {
          a = a ^ arr[m];
        }
        for (let m = j; m <= k; m++) {
          b = b ^ arr[m];
        }
        if (a === b) {
          count += 1;
        }
        // console.log('i,j,k', i, j, k, '=>', a, b);
      }
    }
  }
  return count;
};

console.log('countTriplets', countTriplets([7, 11, 12, 9, 5, 2, 7, 17, 22]));
