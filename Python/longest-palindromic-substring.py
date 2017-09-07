class Solution(object):
  def longestPalindrome(self, s):
    """
    :type s: str
    :rtype: str
    """
    result = ''
    maxLength = 1
    # 找中心点
    for i in range(len(s)):
    	for j in range(min(i, len(s)-1-i)):
    		if (s[i-j] == s[i+j]):
    			



  def isPalindrome(self, s):
  	if (s == s[::-1]):
  		return True
  	else:
  		return False


if __name__ == '__main__':
  solution = Solution()
  print(solution.longestPalindrome('whatabeatifulgirl'))
