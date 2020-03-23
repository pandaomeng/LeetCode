/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const cache = new Array(m).fill(null).map(each => []);
  cache[0][0] = 1;

  const getResult = (i, j) => {
    // 尝试从缓存中获取
    if (cache[i] && cache[i][j]) return cache[i][j];
    // 处理越界情况
    if (i < 0 || j < 0) return 0;

    // 是否是障碍物
    const isBarrier = obstacleGrid[i][j] === 1;
    const result = isBarrier ? 0 : getResult(i - 1, j) + getResult(i, j - 1);

    // 缓存结果
    cache[i][j] = result;
    return result;
  };

  return getResult(m - 1, n - 1);
};

console.log(
  'uniquePathsWithObstacles',
  uniquePathsWithObstacles([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
  ])
);
