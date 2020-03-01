/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  let map = {};
  for (let i = 0; i < leftChild.length; i++) {
    map[i] = 0;
  }
  for (let i = 0; i < leftChild.length; i++) {
    let leftNo = leftChild[i];
    let rightNo = rightChild[i];
    if (leftNo !== -1) {
      map[leftNo] = (map[leftNo] | 0) + 1;
    }
    if (rightNo !== -1) {
      map[rightNo] = (map[rightNo] | 0) + 1;
    }
  }

  const values = Object.values(map);
  let flag =
    values.every(item => item === 0 || item === 1) &&
    values.reduce((a, c) => a + c, 0) === values.length - 1;

  return flag;
};

console.log(
  "validateBinaryTreeNodes",
  validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1])
);
console.log(
  "validateBinaryTreeNodes",
  validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, 3, -1, -1])
);
console.log(
  "validateBinaryTreeNodes",
  validateBinaryTreeNodes(2, [1, 0], [-1, -1])
);
console.log(
  "validateBinaryTreeNodes",
  validateBinaryTreeNodes(6, [1, -1, -1, 4, -1, -1], [2, -1, -1, 5, -1, -1])
);
