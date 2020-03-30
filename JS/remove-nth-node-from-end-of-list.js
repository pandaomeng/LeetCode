/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let first = head;
  let second = head;
  let count = 0;
  while (first) {
    if (count > n) {
      second = second.next;
    }
    first = first.next;
    count++;
  }
  // 删除头节点
  if (count === n) {
    return head.next;
  }
  second.next = second.next.next;
  return head;
};
