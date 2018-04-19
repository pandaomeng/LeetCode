class Solution(object):
  # dp算法
  def isMatch(self, text, pattern):
    #text长度为T  pattern长度为P， 构造(T+1)(P+1)大小的矩阵
    T = len(text)
    P = len(pattern)
    dp = [[False] * (P+1) for _ in range(T+1)]
    dp[-1][-1] = True
    for i in range(T, -1, -1):
      # 若j为空，则肯定不匹配，故从P-1开始
      for j in range(P-1, -1, -1):
        # i的下标为T时，text为空串
        if i < T and pattern[j] in {text[i], '.'}:
          first_match = True
        else:
          first_match = False

        # 如果pattern后一个是*，特殊处理：
        # 1. dp[i][j] = dp[i][j+2]， 直接舍弃
        # 2. first_match and dp[i+1][j]， 继续看后面的
        if j+1 < P and pattern[j+1] == '*':
          dp[i][j] = dp[i][j+2] or first_match and dp[i+1][j]
        # 没有*的话直接匹配下一个
        else:
          dp[i][j] = first_match and dp[i+1][j+1]
    return dp[0][0]
    

if __name__ == '__main__':
  solution = Solution()
  print(solution.isMatch("aa", "a"))
  print(solution.isMatch("aa", "aa"))
  print(solution.isMatch("aaa", "aa"))
  print(solution.isMatch("aa", "a*"))
  print(solution.isMatch("aa", ".*"))
  print(solution.isMatch("ab", ".*"))
  print(solution.isMatch("aab", "c*a*b"))

  #Time limited
  # print(solution.isMatch("aaaaaaaaaaaaab","a*a*a*a*a*a*a*a*a*a*c"))