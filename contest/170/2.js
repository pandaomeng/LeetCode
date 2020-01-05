/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    const eachQuery = queries[i];
    const [left, right] = eachQuery;
    let temp = arr[left];
    for (let j = left + 1; j <= right; j++) {
      temp = temp ^ arr[j];
    }
    result.push(temp);
  }
  return result;
};

console.log(
  "object",
  xorQueries(
    [4, 8, 2, 10],
    [
      [2, 3],
      [1, 3],
      [0, 0],
      [0, 3]
    ]
  )
);

// console.log(
//   "object",
//   xorQueries(
//     [1, 3, 4, 8],
//     [
//       [0, 1],
//       [1, 2],
//       [0, 3],
//       [3, 3]
//     ]
//   )
// );
