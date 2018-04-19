class Solution(object):
  def convert(self, s, numRows):
    """
    :type s: str
    :type numRows: int
    :rtype: str
    """
    if numRows == 1 or numRows >= len(s):
      return s

    L = [''] * numRows
    index = 0
    step = 1
    for x in s:
      L[index] += x
      if index == 0:
        step = 1
      elif index == numRows - 1:
        step = -1
      index += step

    return str.join('', (L))


if __name__ == '__main__':
  solution = Solution()
  print(solution.convert('PAYPALISHIRING', 3))
