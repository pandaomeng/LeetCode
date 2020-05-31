/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  const arr = sentence.split(' ')
  for (let i=0;i<arr.length;i++) {
    if (arr[i].indexOf(searchWord) === 0) {
      return i + 1
    }
  }
  return -1
};

console.log('isPrefixOfWord("i love eating burger")', isPrefixOfWord("i love eating burger", 'burg'))
console.log('isPrefixOfWord("i love eating burger")', isPrefixOfWord("this problem is an easy problem", 'pro'))
console.log('isPrefixOfWord("i love eating burger")', isPrefixOfWord("i am tired", 'you'))
console.log('isPrefixOfWord("i love eating burger")', isPrefixOfWord("i use triple pillow", 'pill'))
console.log('isPrefixOfWord("i love eating burger")', isPrefixOfWord("hello from the other side", 'they'))