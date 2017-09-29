class Solution(object):
  def myAtoi(self, str):
    """
    :type str: str
    :rtype: int
    """
    temp = str.strip()
    result = ''
    sign = 1
    for i in range(len(temp)):
      if i == 0 and (temp[0] == '-' or temp[0] == '+'):
        sign = 1 if temp[0] == '+' else -1
      elif temp[i].isdigit():
        result += temp[i]
      else:
        break

    result = sign * int(result) if result else 0
    if result > 2147483647:
      return 2147483647
    elif result < -2147483648:
      return -2147483648
    else:
      return result


if __name__ == '__main__':
  solution = Solution()
  print(solution.myAtoi('2147483648'))
