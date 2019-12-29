/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const treeToArr = (node, arr = []) => {
    let temp = [...arr, node.val];
    return [
      ...temp,
      ...(node.left ? treeToArr(node.left) : []),
      ...(node.right ? treeToArr(node.right) : [])
    ];
  };
  const root1Arr = root1 === null ? [] : treeToArr(root1);
  const root2Arr = root2 === null ? [] : treeToArr(root2);

  return [...root1Arr, ...root2Arr]
    .filter(each => each !== undefined && each !== null)
    .sort((a, b) => a - b);
};
