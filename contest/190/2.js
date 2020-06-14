/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  let temp = 0;
  for (let i = 0; i < k; i++) {
    if (vowel.includes(s[i])) {
      temp += 1;
    }
  }
  let max = temp;
  for (let i = 1; i < s.length - k + 1; i++) {
    // console.log('temp', temp)
    const count = temp - vowel.includes(s[i - 1]) + vowel.includes(s[i + k - 1]);
    temp = count;
    max = Math.max(count, max);
  }
  return max;
};

console.log('object', maxVowels('abciiidef', 3));
console.log('object', maxVowels('aeiou', 2));
console.log('object', maxVowels('leetcode', 3));
console.log('object', maxVowels('rhythms', 4));
console.log('object', maxVowels('tryhard', 4));
