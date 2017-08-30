import copy

# Definition for singly-linked list.
class ListNode(object):
  def __init__(self, x):
    self.val = x
    self.next = None
  def print(self):
    temp = self
    while temp:
      print(temp.val,'-> ',end='')
      temp = temp.next

class Solution(object):
  def addTwoNumbers(self, l1, l2):
    """
    :type l1: ListNode
    :type l2: ListNode
    :rtype: ListNode
    """
    ret = ListNode(0)
    cur = ret
    add = 0
    
    while l1 or l2 or add:
      val = (l1.val if l1 else 0) + (l2.val if l2 else 0) + add
      add = val / 10
      cur.next = ListNode(val % 10)
      cur = cur.next
      l1 = l1.next if l1 else None
      l2 = l2.next if l2 else None

    return ret.next

if __name__ == '__main__':
  solution = Solution()
  node1 = ListNode(2)
  node2 = ListNode(4)
  node3 = ListNode(3)
  node1.next = copy.copy(node2)
  node2.next = copy.copy(node3)
  l1 = copy.copy(node1)

  node1 = ListNode(5)
  node2 = ListNode(6)
  node3 = ListNode(4)
  node1.next = copy.copy(node2)
  node2.next = copy.copy(node3)
  l2 = copy.copy(node1)

  print(l1.print())
  ret = solution.addTwoNumbers(l1, l2)
