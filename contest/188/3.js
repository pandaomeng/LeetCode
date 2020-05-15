/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  let visited = [true];
  let reverseEdges = [];
  let ans = 0;

  const dfs = (to) => {
    if (!visited[to]) {
      visited[to] = true;
      ans += 1;
      dfs(reverseEdges[to]);
    }
  };

  for (let i = 0; i < edges.length; i++) {
    reverseEdges[edges[i][1]] = edges[i][0];
  }

  for (let i = 0; i < edges.length; i++) {
    if (hasApple[edges[i][1]]) {
      dfs(edges[i][1]);
    }
  }

  return ans * 2;
};

// 前提是 0 为根节点
