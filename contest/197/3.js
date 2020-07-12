/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
const maxProbability = function (n, edges, succProb, start, end) {
  const map = {};
  for (let i = 0; i < edges.length; i++) {
    const current = edges[i];
    map[current[0]] = map[current[0]] || [];
    map[current[1]] = map[current[1]] || [];
    map[current[0]].push({ from: current[0], end: current[1], p: succProb[i] });
    map[current[1]].push({ from: current[1], end: current[0], p: succProb[i] });
  }

  let arr = map[start];
  map[start] = undefined;
  // console.log(map);
  // console.log(arr);

  const result = { [start]: 1 };
  while (arr && arr.length) {
    const node = arr.shift();
    result[node.end] = Math.max(result[node.end] || 0, node.p * result[node.from]);
    if (map[node.end]) {
      arr = [...arr, ...(map[node.end] || [])];
      map[node.end] = undefined;
    }
    // console.log(map);
    // console.log(result);
  }
  // console.log(result);
  return result[end] || 0;
};

console.log(maxProbability(5,
  [[1, 4], [2, 4], [0, 4], [0, 3], [0, 2], [2, 3]],
  [0.37, 0.17, 0.93, 0.23, 0.39, 0.04],
  3,
  4));

// 5
// [[2,3],[1,2],[3,4],[1,3],[1,4],[0,1],[2,4],[0,4],[0,2]]
// [0.06,0.26,0.49,0.25,0.2,0.64,0.23,0.21,0.77]
// 0
// 3


// 5
// [[1,4],[2,4],[0,4],[0,3],[0,2],[2,3]]
// [0.37,0.17,0.93,0.23,0.39,0.04]
// 3
// 4
