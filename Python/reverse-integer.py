class Solution(object):
  def reverse(self, x):
    """
    :type x: int
    :rtype: int
    """
    flag = 1 if x >= 0 else -1
    res = int(str(flag * x)[::-1])
    return res * flag * (res < 2 ** 31)


if __name__ == '__main__':
  solution = Solution()
  print(solution.reverse(-1523154516))
