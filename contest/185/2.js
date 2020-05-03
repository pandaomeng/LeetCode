/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  const tableMap = {};
  const foodMap = {};
  const result = [];
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    foodMap[order[2]] = true;
    tableMap[order[1]] = null;
  }

  const foodArr = Object.keys(foodMap).sort();
  const tableArr = Object.keys(tableMap).sort((a, b) => a - b);
  result.push(['Table', ...foodArr]);
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    if (!tableMap[order[1]]) {
      const defaultTable = foodArr.reduce(
        (a, c) => ({
          ...a,
          [c]: 0,
        }),
        {}
      );
      tableMap[order[1]] = defaultTable;
    }
    tableMap[order[1]][order[2]] += 1;
  }
  for (let [key, value] of Object.entries(tableMap)) {
    result.push([key, ...Object.values(value).map((each) => `${each}`)]);
  }

  return result;
};

console.log(
  'displayTable() :',
  displayTable([
    ['David', '3', 'Ceviche'],
    ['Corina', '10', 'Beef Burrito'],
    ['David', '3', 'Fried Chicken'],
    ['Carla', '5', 'Water'],
    ['Carla', '5', 'Ceviche'],
    ['Rous', '3', 'Ceviche'],
  ])
);
