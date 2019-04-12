/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0]
  }
  let common = strs[0]
  const getCommon = (str1, str2) => {
    let res = ''
    for (let i = 0; i <= str1.length - 1 || i <= str2.length - 1; i++) {
      if (str1[i] === str2[i]) {
        res += str1[i]
      } else {
        break
      }
    }
    return res
  }
  for (let i = 1; i <= strs.length - 1; i++) {
    common = getCommon(common, strs[i])
    if (common === '') {
      return ''
    }
  }
  return common
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix(["", "", ""]))
