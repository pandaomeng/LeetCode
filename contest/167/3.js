var maxSideLength = function(mat, threshold) {
  let temp = {};
  var getMatrixSum = function(mat, i, j, width) {
    let sum = 0;
    if (temp[i] && temp[i][j] && temp[i][j][width - 1] !== undefined) {
      // console.log("here");
      sum = temp[i][j][width - 1];
      for (let k = 0; k < width; k++) {
        sum += mat[i + k][j + width - 1];
      }
      for (let l = 0; l < width - 1; l++) {
        sum += mat[i + width - 1][j + l];
      }
    } else {
      for (let k = 0; k < width; k++) {
        for (let l = 0; l < width; l++) {
          sum += mat[i + k][j + l];
        }
      }
    }
    temp[i] = temp[i] || {};
    temp[i][j] = temp[i][j] || {};
    temp[i][j][width] = sum;
    // console.log(i, j, width, temp[i][j][width]);
    // console.log("sum :", sum);
    return sum;
  };

  let m = mat.length;
  let n = mat[0].length;
  let result = 0;
  // 正方形边长
  for (let width = 1; width <= Math.min(n, m); width++) {
    for (let i = 0; i + width <= m; i++) {
      for (let j = 0; j + width <= n; j++) {
        let sum = getMatrixSum(mat, i, j, width);
        if (sum <= threshold) {
          result = width;
          break;
        }
      }
      // 已找到 break
      if (result === width) {
        break;
      }
    }
    // 找不到 break
    if (result < width) {
      break;
    }
  }
  return result;
};

console.log(
  "result",
  maxSideLength(
    [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    ],
    6
  )
);

console.log(
  "result",
  maxSideLength(
    [
      [18, 70],
      [61, 1],
      [25, 85],
      [14, 40],
      [11, 96],
      [97, 96],
      [63, 45]
    ],
    40184
  )
);

console.log(
  "result",
  maxSideLength(
    [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    ],
    6
  )
);

console.log(
  "result",
  maxSideLength(
    [
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2]
    ],
    1
  )
);

console.log(
  "result",
  maxSideLength(
    [
      [1, 1, 3, 2, 4, 3, 2],
      [1, 1, 3, 2, 4, 3, 2],
      [1, 1, 3, 2, 4, 3, 2]
    ],
    4
  )
);
