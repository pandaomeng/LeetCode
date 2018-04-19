class Solution(object):
  def lengthOfLongestSubstring(self, s):
    """
    :type s: str
    :rtype: int
    """
    start = maxlength = 0
    usedChar = {}
    for i in range(len(s)):
      if s[i] in usedChar and start <= usedChar[s[i]]:
        start = usedChar[s[i]] + 1
      else:
        maxlength = max(maxlength, i - start + 1)
      usedChar[s[i]] = i
    return maxlength


if __name__ == '__main__':
  solution = Solution()
  print(solution.lengthOfLongestSubstring('whatabeatifulgirl'))
