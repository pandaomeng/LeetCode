class Solution:
  def maxArea(self, height: 'List[int]') -> 'int':
    result = 0
    x1 = 0
    x2 = len(height) - 1
    while x1 != x2:
      area = min(height[x1], height[x2]) * (x2 - x1)
      result = max(result, area)
      if height[x1] > height[x2]:
        x2 -= 1
      else:
        x1 += 1

    return result


if __name__ == '__main__':
  solution = Solution()
  print(solution.maxArea([1,8,6,2,5,4,8,3,7]))


# 解析：
#   参考：https://leetcode.com/problems/container-with-most-water/discuss/6099/Yet-another-way-to-see-what-happens-in-the-O(n)-algorithm
