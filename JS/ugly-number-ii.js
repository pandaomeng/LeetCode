const getUglyList = () => {
  let count = 0;
  let heap = [1];
  let res = [];
  while (count < 1691) {
    const current = heap.shift();
    if (res.indexOf(current) === -1) {
      res.push(current);
      count += 1;
    }
    heap.push(current * 2, current * 3, current * 5);
    heap = [...new Set(heap)].sort((a, b) => a - b);
  }
  return res;
};

const uglyList = getUglyList();

var nthUglyNumber = function (n) {
  return uglyList[n - 1];
};

console.log(nthUglyNumber(10));
