var balanceBST = function(root) {
  const flattenBST = node => {
    if (node.left && node.right) {
      return [...flattenBST(node.left), node.val, ...flattenBST(node.right)];
    }
    if (node.left) {
      return [...flattenBST(node.left), node.val];
    }
    if (node.right) {
      return [node.val, ...flattenBST(node.right)];
    }
    return [node.val];
  };

  const flattenArr = flattenBST(root);

  const createTree = arr => {
    if (arr.length === 0) {
      return null;
    }
    let newRoot = {};
    const val = arr.shift();
    newRoot.val = val;
    const half = Math.ceil(arr.length / 2);
    const leftArr = arr.splice(0, half);
    newRoot.left = createTree(leftArr);
    newRoot.right = createTree(arr);
    return newRoot;
  };

  const result = createTree(flattenArr);
  console.log('result', result);
  return result;
};
