class Solution(object):
  def isMatch(self, text, pattern):
    if not pattern:
      return not text

    #判断text的第一个字符是否和pattern的第一个字符相同
    #bool(text)：有可能text已经没有了，但是pattern还有，这时候first_match总是false
    first_match = bool(text) and pattern[0] in {text[0], '.'}

    if len(pattern) >= 2 and pattern[1] == '*':
      #把*从前往后去掉来测试正则
      return self.isMatch(text, pattern[2:]) or first_match and self.isMatch(text[1:], pattern)
    else:
      return first_match and self.isMatch(text[1:], pattern[1:])

if __name__ == '__main__':
  solution = Solution()
  # print(solution.isMatch("aa", "a"))
  # print(solution.isMatch("aa", "aa"))
  # print(solution.isMatch("aaa", "aa"))
  # print(solution.isMatch("aa", "a*"))
  # print(solution.isMatch("aa", ".*"))
  # print(solution.isMatch("ab", ".*"))
  # print(solution.isMatch("aab", "c*a*b"))

  #Time limited
  print(solution.isMatch("aaaaaaaaaaaaab","a*a*a*a*a*a*a*a*a*a*c"))



  #错误：如果pattern*不能匹配text的第一个字符，则往后面找
  #      如果pattern*能匹配text的第一个字符，就不找了，是错的
  #反例：
  #print(solution.isMatch("aaa", "a*a"))
