/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  const newArr = text.split(' ').map((each) => each.toLocaleLowerCase());

  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
      if (newArr[j].length > newArr[j + 1].length) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }

  let zeroP = newArr[0];
  const temp = zeroP.split('');
  temp.splice(0, 1, temp[0].toUpperCase());
  newArr.splice(0, 1, temp.join(''));

  return newArr.join(' ');
};

console.log('object', arrangeWords('Leetcode is cool'));
console.log('object', arrangeWords('To be or not to be'));
console.log('object', arrangeWords('Keep calm and code on'));
console.log(
  arrangeWords(
    'Jtik hrzrvhbmk gbo cfhmiqwonj ojkew ufvledv bomoeqt ops jgi zdhvbpbb zczmepdfpm jry rjazc titttcu'
  )
);
