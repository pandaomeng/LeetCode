/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      temp.push({
        value: nums[i][j],
        sort: ((1 + i + j) * (i + j)) / 2 + j + 1,
      });
    }
  }
  const arr = temp.sort((a, b) => a.sort - b.sort).map((each) => each.value);
  return arr;
};

console.log(
  'findDiagonalOrder',
  findDiagonalOrder([
    [1, 2, 3, 4, 5],
    [6, 7],
    [8],
    [9, 10, 11],
    [12, 13, 14, 15, 16],
  ])
);

// x, (y) => (1 + x + y)(x + y) / 2 + y + 1;
