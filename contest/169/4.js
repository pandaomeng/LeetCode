/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
var isSolvable = function(words, result) {
  const letters = [...new Set(words.join("") + result)];
  const firstLetters = [...words.map(each => each[0]), result[0]];
  console.log("letters", letters);
  console.log("firstLetters", firstLetters);

  let bool = false;

  checkValidate = map => {
    if (firstLetters.some(each => map[each] === 0)) return false;
    const sum = words.reduce((a, c) => {
      return a + +[...c].reduce((acc, current) => acc + map[current], "");
    }, 0);
    if (sum === +[...result].reduce((acc, current) => acc + map[current], "")) {
      console.log("map", map);
      bool = true;
      return true;
    }
    return false;
  };

  // i: 第几层，
  const loop = (i, remainNumber, result) => {
    if (i === letters.length) {
      return checkValidate(result);
    }
    for (let j = 0; j < remainNumber.length; j++) {
      const valid = loop(
        i + 1,
        remainNumber.filter((each, index) => index !== j),
        {
          ...result,
          [letters[i]]: remainNumber[j]
        }
      );
      if (valid) return true;
    }
  };

  loop(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], {});
  return bool;
};

// console.log("isSolvable", isSolvable(["SEND", "MORE"], "MONEY"));
// console.log("isSolvable", isSolvable(["SIX", "SEVEN", "SEVEN"], "TWENTY"));
// console.log("isSolvable", isSolvable(["THIS", "IS", "TOO"], "FUNNY"));
console.log("isSolvable", isSolvable(["LEET", "CODE"], "POINT"));
