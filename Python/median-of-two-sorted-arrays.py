class Solution(object):
  def findMedianSortedArrays(self, nums1, nums2):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: float
    """
    nums1Start = 0
    nums1End = len(nums1) - 1
    nums2Start = 0
    nums2End = len(nums2) - 1
    resultArr = [0] * (len(nums1) + len(nums2))

    while True:
      if nums1Start <= nums1End and nums2Start <= nums2End:
        if nums1[nums1Start] < nums2[nums2Start]:
          resultArr[nums1Start + nums2Start] = nums1[nums1Start]
          nums1Start += 1
        else:
          resultArr[nums1Start + nums2Start] = nums2[nums2Start]
          nums2Start += 1
        if nums1[nums1End] > nums2[nums2End]:
          resultArr[nums1End + nums2End + 1] = nums1[nums1End]
          nums1End -= 1
        else:
          resultArr[nums1End + nums2End + 1] = nums2[nums2End]
          nums2End -= 1
      # nums1还存在至少一个数
      elif nums1Start <= nums1End:
        # nums1还存在至少两个数
        if nums1End - nums1Start > 0:
          resultArr[nums1Start + nums2Start] = nums1[nums1Start]
          resultArr[nums1End + nums2End + 1] = nums1[nums1End]
          nums1Start += 1
          nums1End -= 1
        # nums1只存在一个数
        else:
          return nums1[nums1Start]
      # nums2还存在至少一个数
      elif nums2Start <= nums2End:
        # nums2还存在至少两个数
        if nums2End - nums2Start > 0:
          resultArr[nums1Start + nums2Start] = nums2[nums2Start]
          resultArr[nums1End + nums2End + 1] = nums2[nums2End]
          nums2Start += 1
          nums2End -= 1
        # nums1只存在一个数
        else:
          return nums2[nums2Start]
      # 数组长度为偶数
      else:
        return (resultArr[len(resultArr) // 2 - 1] + resultArr[len(resultArr) // 2]) / 2


if __name__ == '__main__':
  solution = Solution()
  nums1 = [1, 2]
  nums2 = [3, 4]
  print(solution.findMedianSortedArrays(nums1, nums2))
