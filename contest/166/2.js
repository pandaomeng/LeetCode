/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const n = groupSizes.length;

  let resultArr = [];
  let currentGroup = [];
  let currenId = 0;
  let resultMap = {};
  for (let index in groupSizes) {
    const number = groupSizes[index];
    resultMap[number] = resultMap[number] ? resultMap[number] : [[]];
    for (let i in resultMap[number]) {
      if (resultMap[number][i].length < number) {
        resultMap[number][i] = [...resultMap[number][i], +index];
        if (resultMap[number][i].length === number) {
          resultMap[number].push([]);
        }
      }
    }
  }
  return Object.values(resultMap)
    .reduce((a, c) => [...a, ...c], [])
    .filter(each => each.length !== 0);
};

console.log("result: ", groupThePeople([3, 3, 3, 3, 3, 1, 3]));
