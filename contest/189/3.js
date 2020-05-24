/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */

const isSub = (origin, target) => {
  let length = origin.length;
  for (let i = 0; i < length; i++) {
    let current = origin[i];
    if (!target.includes(current)) return false;
  }
  return true;
};

var peopleIndexes = function (favoriteCompanies) {
  let temp = [...favoriteCompanies];
  let length = favoriteCompanies.length;
  for (let i = 0; i < length; i++) {
    let current = favoriteCompanies[i];
    for (let j = 0; j < temp.length; j++) {
      if (!temp[j] || current === temp[j]) {
        continue;
      }
      if (isSub(current, temp[j])) {
        temp.splice(i, 1, null);
        break;
      }
    }
  }

  return temp
    .map((each, index) => each && index)
    .filter((each) => each !== null);
};

console.log(
  'peopleIndexes()',
  peopleIndexes([
    ['leetcode', 'google', 'facebook'],
    ['google', 'microsoft'],
    ['google', 'facebook'],
    ['google'],
    ['amazon'],
  ])
);
