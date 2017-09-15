class Solution(object):
  def findMedianSortedArrays(self, A, B):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: float
    """
    m = len(A)
    n = len(B)
    if m > n:
      A, B, m, n = B, A, n, m
    # 如果half含有.5，则进位（总数为奇数时，左部比右部多一个数）
    # 分析：因为 i+j 等于half，half又进位了，所以左部比右部多一个数
    half = (m + n + 1) // 2
    # imin imax : 表示nums1的取分割值范围（个数）
    imin = 0
    imax = m

    while imin <= imax:
      # i j : 两个数组被分割后的左边的个数

      i = (imin + imax) // 2
      j = half - i
      if i < m and B[j - 1] > A[i]:
        # i is too small, must increase it
        imin = i + 1
      elif i > 0 and A[i - 1] > B[j]:
        # i is too big, must decrease it
        imax = i - 1
      else:
        # i is perfect
        if i == 0:
          max_of_left = B[j - 1]
        # j 只有在m = n的时候有可能为0
        elif j == 0:
          max_of_left = A[i - 1]
        else:
          max_of_left = max(A[i - 1], B[j - 1])

        if (m + n) % 2 == 1:
          return max_of_left

        if i == m:
          min_of_right = B[j]
        elif j == n:
          min_of_right = A[i]
        else:
          min_of_right = min(A[i], B[j])

        return (max_of_left + min_of_right) / 2.0


if __name__ == '__main__':
  solution = Solution()
  nums1 = [1, 2, 3, 4, 9]
  nums2 = [3, 5, 7, 9, 10, 19, 20]
  print(solution.findMedianSortedArrays(nums1, nums2))
