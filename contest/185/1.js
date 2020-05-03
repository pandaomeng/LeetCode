/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const alphaArr = [];
  const numberArr = [];
  for (let i = 0; i < s.length; i++) {
    const each = s[i];
    if (Number.isNaN(+each)) {
      alphaArr.push(each);
    } else {
      numberArr.push(each);
    }
  }
  // console.log('alphaArr :', alphaArr);
  // console.log('numberArr :', numberArr);
  if (Math.abs(alphaArr.length - numberArr.length) > 1) return '';
  let more = [];
  let less = [];
  if (alphaArr.length > numberArr.length) {
    more = alphaArr;
    less = numberArr;
  } else {
    less = alphaArr;
    more = numberArr;
  }
  let res = '';
  let i;
  for (i = 0; i < less.length; i++) {
    res += more[i];
    res += less[i];
  }
  if (i < more.length) {
    res += more[i];
  }
  return res;
};

console.log('"a0b1c2" :', reformat('a0b1c2'));
console.log('"ab123" :', reformat('ab123'));
