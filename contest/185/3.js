/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  let newCroakOfFrogs = '';
  let map = {};
  for (let i = 0; i < croakOfFrogs.length; i++) {
    const letter = croakOfFrogs[i];
    switch (letter) {
      case 'c':
        newCroakOfFrogs += '0';
        map.c = (map.c || 0) + 1;
        break;
      case 'r':
        newCroakOfFrogs += '1';
        map.r = (map.r || 0) + 1;
        break;
      case 'o':
        newCroakOfFrogs += '2';
        map.o = (map.o || 0) + 1;
        break;
      case 'a':
        newCroakOfFrogs += '3';
        map.a = (map.a || 0) + 1;
        break;
      case 'k':
        newCroakOfFrogs += '4';
        map.k = (map.k || 0) + 1;
        break;
    }
  }
  const arr = Object.values(map);
  if (Math.max.apply(Math, arr) !== Math.min.apply(Math, arr)) return -1;

  const length = newCroakOfFrogs.length;
  const frogs = [[]];
  for (let i = 0; i < newCroakOfFrogs.length; i++) {
    const letter = newCroakOfFrogs[i];
    let j;
    for (j = 0; j < frogs.length; j++) {
      let frog = frogs[j];
      if ((+(frog[frog.length - 1] || -1) + 1) % 5 === +letter) {
        frog[i] = letter;
        break;
      }
    }
    if (j === frogs.length && letter !== '0') return -1;
    if (j === frogs.length) {
      let newArr = [];
      newArr[i] = letter;
      frogs.push(newArr);
    }
  }
  return frogs.length;
};

console.log('object :', minNumberOfFrogs('croakcroak'));
// console.log('object :', minNumberOfFrogs('aoocrrackk'));
