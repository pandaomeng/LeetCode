/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  if (s.length === 0) {
    return 0;
  }
  const reverse = [...s].reduce((a, c) => c + a, "");
  if (s === reverse) {
    return 1;
  }
  return 2;
};

// console.log('removePalindromeSub("ababa")', removePalindromeSub("ababa"));
// console.log('removePalindromeSub("ababa")', removePalindromeSub("ababa"));
// console.log('removePalindromeSub("ababa")', removePalindromeSub(""));
console.log("", removePalindromeSub("abbaaaab"));
