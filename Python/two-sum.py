class Solution:
  def twoSum(self, nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    mydict = {}
    # One-pass Hash Table
    for i in range(len(nums)):
      complement = target - nums[i]
      if (complement in mydict and mydict[complement] != i):
        return [mydict[complement], i]
      mydict[nums[i]] = i

if __name__ == '__main__':
  solution = Solution()
  nums = [23, 17, 51, 99, 101, 34]
  target = 133
  print(solution.twoSum(nums, target))
