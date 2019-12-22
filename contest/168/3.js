/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
  let maxMap = {};
  let max = 0;
  for (let i = 0; i < s.length - minSize + 1; i++) {
    let str = "";
    for (let j = i; j < i + minSize; j++) {
      str += s[j];
    }

    let uniqArr = [...new Set(str)];
    if (uniqArr.length > maxLetters) continue;

    maxMap[str] = (maxMap[str] || 0) + 1;
    if (maxMap[str] > max) {
      max = maxMap[str];
    }
  }
  return max;
};

console.log("maxFreq", maxFreq("aababcaab", 2, 3, 4));
console.log("maxFreq", maxFreq("aaaa", 1, 3, 3));
console.log("maxFreq", maxFreq("aabcabcab", 2, 2, 3));
console.log("maxFreq", maxFreq("abcde", 2, 3, 3));
