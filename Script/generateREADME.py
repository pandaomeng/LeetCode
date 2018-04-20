import os.path
import re

def eachFile(filepath):
  pathDir =  os.listdir(filepath)
  return pathDir


if __name__ == '__main__':
  filepath = '../Python'
  readme = open('../README.md', 'w')
  top = open('../README-top.md', 'r')
  for line in top:
    readme.write(line)
  readme.write('\n')
  top.close()

  count = 1
  for fileName in eachFile(filepath):
    fileName = fileName.split('.')[0]
    # print(fileName)
    line = '|' + str(count) + ' | [' + fileName + '](https://leetcode.com/problems/' + fileName + '/description/)  | [' + fileName + '](https://github.com/pandaomeng/LeetCode/blob/develop/Python/' + fileName + '.py)\n'
    readme.write(line)
    count += 1

  readme.close()