var ways = function (pizza, k) {
  let row = pizza.length;
  let column = pizza[0].length;
  let remains = new Array(row).fill(null).map((each) => []);
  let mod = 1e9 + 7;

  for (let i = row - 1; i >= 0; i--) {
    for (let j = column - 1; j >= 0; j--) {
      let current = pizza[i][j] === 'A' ? 1 : 0;
      if (i === row - 1) {
        remains[i][j] = (remains[i][j + 1] || 0) + current;
        continue;
      }
      if (j === column - 1) {
        remains[i][j] = (remains[i + 1][j] || 0) + current;
        continue;
      }

      remains[i][j] =
        remains[i][j + 1] + remains[i + 1][j] + current - remains[i + 1][j + 1];
    }
  }

  let dp = [];
  for (let i = 0; i < row; i++) {
    dp[i] = new Array();
    for (let j = 0; j < column; j++) {
      dp[i][j] = new Array(k).fill(0);
    }
  }

  for (let i = row - 1; i >= 0; i--) {
    for (let j = column - 1; j >= 0; j--) {
      if (remains[i][j] > 0) dp[i][j][0] = 1;

      for (let cut = 1; cut < k; cut++) {
        // 横着切
        for (let r = i + 1; r < row; r++) {
          if (remains[i][j] - remains[r][j] > 0) {
            dp[i][j][cut] = (dp[r][j][cut - 1] + dp[i][j][cut]) % mod;
          }
        }
        // 竖着切
        for (let r = j + 1; r < column; r++) {
          if (remains[i][j] - remains[i][r] > 0) {
            dp[i][j][cut] = (dp[i][r][cut - 1] + dp[i][j][cut]) % mod;
          }
        }
      }
    }
  }
  return dp[0][0][k - 1];
};
