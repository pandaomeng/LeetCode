class Solution(object):
  def longestPalindrome(self, s):
    """
    :type s: str
    :rtype: str
    """
    result = s[0]
    maxLength = 0
    # 找中心点
    for i in range(len(s)):
      # 奇数个字符的回文数字
      currentLength = 1
      currentResult = s[i]
      for j in range(1, min(i - 0, len(s) - 1 - i) + 1):
        if (s[i - j] == s[i + j]):
          currentLength += 2
          currentResult = s[i - j] + currentResult + s[i + j]
          if currentLength > maxLength:
            maxLength = currentLength
            result = currentResult
        else:
          break

      # 偶数个字符的回文数字
      currentLength = 0
      currentResult = ''
      # 偶回文数，中心向右偏0.5字节，计算左边遍历长度的时候+1
      for j in range(1, min(i - 0 + 1, len(s) - 1 - i) + 1):
        if (s[i - j + 1] == s[i + j]):
          currentLength += 2
          currentResult = s[i - j + 1] + currentResult + s[i + j]
          if currentLength > maxLength:
            maxLength = currentLength
            result = currentResult
        else:
          break

    return result


if __name__ == '__main__':
  solution = Solution()
  print(solution.longestPalindrome('a'))
