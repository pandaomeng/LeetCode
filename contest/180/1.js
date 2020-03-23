/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const rowMinArr = [];
  for (let i = 0; i < m; i++) {
    // 行最小
    const min = Math.min(...matrix[i]);
    rowMinArr.push(min);
  }

  const columnMaxArr = [];
  for (let j = 0; j < n; j++) {
    columnJ = Array(m)
      .fill(null)
      .reduce((a, c, index) => {
        return [...a, matrix[index][j]];
      }, []);
    const max = Math.max(...columnJ);
    columnMaxArr.push(max);
  }

  const result = rowMinArr.filter(item => columnMaxArr.indexOf(item) !== -1);
  return result;
};

console.log(
  'luckyNumbers()',
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17]
  ])
);
