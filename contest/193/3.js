/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */


const minDays = function (bloomDay, m, k) {
  const { length } = bloomDay;
  if (m * k > length) return -1;

  const sorted = [...bloomDay].sort((a, b) => a - b);

  const check = (day) => {
    let count = 0;
    let lastJ = -1;
    let j;
    for (j = 0; j < bloomDay.length; j++) {
      if (bloomDay[j] > day) {
        count += Math.floor((j - lastJ - 1) / k);
        lastJ = j;
      }
      if (count >= m) return true;
    }
    count += Math.floor((bloomDay.length - lastJ - 1) / k);
    if (count >= m) return true;
    return false;
  };

  const arr = [-1];
  const min = m * k - 1;
  const max = sorted.length - 1;
  const current = max;

  while (current) {

  }

  for (let i = m * k - 1; i < sorted.length; i++) {
    const day = sorted[i];
    for (let j = 0; j < bloomDay.length; j++) {
      if (bloomDay[j] > day) {
        arr.push(j);
      }
    }
  }
  arr.push(sorted.length);
  console.log(arr);


  for (let i = m * k - 1; i < sorted.length; i++) {
    // console.log('--------------------------');
    const day = sorted[i];
    // console.log('day', day);
  }
};

console.log('object', minDays([7, 7, 7, 7, 12, 7, 7], 2, 3));
