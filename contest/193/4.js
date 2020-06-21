/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const minDays = function (bloomDay, m, k) {
  const { length } = bloomDay;
  if (m * k > length) return -1;
};
/**
 * @param {number} n
 * @param {number[]} parent
 */
const TreeAncestor = function (n, parent) {
  this.parent = parent;
  this.n = n;
};

/**
 * @param {number} node
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
  let currentNode = node;
  while (k) {
    currentNode = this.parent[currentNode];
    if (currentNode === -1) return -1;
    k -= 1;
    if (k === 0) return currentNode;
  }
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
