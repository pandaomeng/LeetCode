/**
 * @param {string[]} names
 * @return {string[]}
 */
const getFolderNames = function (names) {
  const res = [];
  const map = {};
  for (let i = 0; i < names.length; i++) {
    const current = names[i];
    if (map[current] === undefined) {
      map[current] = true;
      res.push(current);
      continue;
    }

    let number = 1;
    while (true) {
      const temp = `${current}(${number})`;
      if (map[temp]) {
        number += 1;
        continue;
      }
      map[temp] = true;
      res.push(temp);
      break;
    }
  }
  return res;
};

console.log(getFolderNames(['wano', 'wano(1)', 'wano', 'wano']));
