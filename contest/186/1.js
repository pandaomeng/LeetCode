/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let oneLength = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '1') {
      oneLength += 1;
    }
  }
  let max = oneLength + (s[0] === '0' ? 1 : 0);
  let temp = max;

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '0') {
      temp += 1;
      if (temp > max) {
        max = temp;
      }
    } else {
      temp -= 1;
    }
  }
  return max;
};

console.log(maxScore('00'));
