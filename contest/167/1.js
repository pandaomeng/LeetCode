/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let temp = [];
  let current = head;
  while (current) {
    temp.push(current.val);
    current = current.next;
  }

  let sum = 0;
  let length = temp.length;
  for (let i = 0; i < length; i++) {
    sum += temp[length - i - 1] * Math.pow(2, i);
  }
  return sum;
};

console.log("result:", getDecimalValue([1, 0, 1]));
console.log("result:", getDecimalValue([0]));
console.log("result:", getDecimalValue([1]));
console.log(
  "result:",
  getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])
);
console.log("result:", getDecimalValue([0, 0]));
