/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
    let count = 0

    const addToMap = (map, temp) => {
      if (map[temp] === undefined || map[temp] === false) {
        return {
          ...map,
          [temp]: true
        }
      } else {
        return {
          ...map,
          [temp]: false
        }
      }
    }

    const find = (node, map) => {
      if (node.left === null && node.right === null) {
        const finalMap = addToMap(map, node.val)
        const isValid = Object.values(finalMap).filter(Boolean).length <= 1
        count += isValid
        return
      }
      if (node.left) {
        find(node.left, addToMap(map, node.val))
      }
      if (node.right) {
        find(node.right, addToMap(map, node.val))
      }
    }

    find(root, {})
    return count
};

