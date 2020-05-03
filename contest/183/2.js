/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let count = 0;
  let arr = [...s];
  while (arr.length !== 1) {
    let last = arr[arr.length - 1];
    if (last === '0') {
      arr.splice(arr.length - 1, 1);
    } else {
      let flag = 1;
      arr = arr
        .reduce((a, c) => [c, ...a], [])
        .reduce((a, c) => {
          if (flag === 0) {
            return [c, ...a];
          } else if (c === '0') {
            flag = 0;
            return ['1', ...a];
          } else if (c === '1') {
            return ['0', ...a];
          }
        }, []);
      if (flag === 1) {
        arr.unshift('1');
      }
    }
    count += 1;
  }
  return count;
};

console.log('numSteps(1101)', numSteps('1101'));
