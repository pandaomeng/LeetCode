var findLucky = function(arr) {
  const resMap = {};
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    resMap[temp] = (resMap[temp] || 0) + 1;
  }

  let max = -1;
  for (let key of Object.keys(resMap)) {
    if (+key === resMap[key]) {
      if (+key > max) {
        max = +key;
      }
    }
  }
  return max;
};
