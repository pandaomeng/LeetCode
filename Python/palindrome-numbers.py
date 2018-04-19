class Solution(object):
  def isPalindrome(self, x):
    x = str(x)

    for i in range(len(x) // 2):
      if x[i] != x[-i - 1]:
        return False

    return True


if __name__ == '__main__':
  solution = Solution()
  print(solution.isPalindrome(135646531))
