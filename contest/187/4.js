/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  let lastKthSmall = mat[0];
  for (let i = 1; i < m; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(...lastKthSmall.map((each) => each + mat[i][j]));
    }
    lastKthSmall = temp.sort((a, b) => a - b).splice(0, k);
  }
  return lastKthSmall[k - 1];
};

console.log(
  'kthSmallest()',
  kthSmallest(
    [
      [1, 3, 11],
      [2, 4, 6],
    ],
    5
  )
);

console.log(
  'kthSmallest()',
  kthSmallest(
    [
      [1, 3, 11],
      [2, 4, 6],
    ],
    9
  )
);

console.log(
  'kthSmallest()',
  kthSmallest(
    [
      [1, 1, 10],
      [2, 2, 9],
    ],
    7
  )
);
