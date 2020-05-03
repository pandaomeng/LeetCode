/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const origin = paths.map((each) => each[0]);
  const originSet = new Set(origin);
  for (let i = 0; i < paths.length; i++) {
    if (!originSet.has(paths[i][1])) {
      return paths[i][1];
    }
  }
};

console.log(
  'object',
  destCity([
    ['London', 'New York'],
    ['New York', 'Lima'],
    ['Lima', 'Sao Paulo'],
  ])
);
