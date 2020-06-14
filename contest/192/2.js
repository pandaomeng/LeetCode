/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(arr, k) {
  const sorted = arr.sort((a,b) => a-b)
  const mid = arr[Math.floor((arr.length-1) / 2)]
  const res = sorted.sort((a,b) => {
    if (Math.abs(a-mid) > Math.abs(b-mid)) return -1
    if (Math.abs(a-mid) < Math.abs(b-mid)) return 1
    return b - a
  })
  return res.splice(0, k)
};