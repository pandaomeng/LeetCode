/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
const minCost = function (houses, cost, m, n, target) {
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = [];
      for (let k = 0; k <= target; k++) {
        dp[i][j][k] = 0;
      }
    }
  }

  // i = 0 初始
  if (houses[0] === 0) {
    for (let j = 0; j < n; j++) {
      dp[0][j][1] = cost[0][j];
    }
  } else {
    for (let j = 0; j < n; j++) {
      dp[0][j][1] = 0;
    }
  }

  console.log('dp', dp);
};

console.log(
  'minCost()',
  minCost(
    [0, 0, 0, 0, 0],
    [
      [1, 10],
      [10, 1],
      [10, 1],
      [1, 10],
      [5, 1],
    ],
    5,
    2,
    3,
  ),
);
