class Solution(object):
  def lengthOfLongestSubstring(self, s):
    """
    :type s: str
    :rtype: int
    """
    max = 0
    ret = ''
    for i in range(len(s)):
      length = 1
      cur = s[i]
      for each in s[i + 1: len(s)]:
        if (each not in cur):
          length += 1
          cur += each
        else:
          if (length > max):
            max = length
            ret = cur
          break
      else:
        if (length > max):
          max = length
          ret = cur
    return max


if __name__ == '__main__':
  solution = Solution()
  print(solution.lengthOfLongestSubstring('whatabeatifulgirl'))
