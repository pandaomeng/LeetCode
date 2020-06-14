/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  horizontalCuts = [0, ...horizontalCuts, h].sort((a,b) => a-b)
  verticalCuts = [0, ...verticalCuts, w].sort((a,b) => a-b)
  
  let maxH = 0
  for (let i=0;i<horizontalCuts.length-1;i++) {
    maxH = Math.max(maxH, horizontalCuts[i+1] - horizontalCuts[i])
  }
  let maxV = 0
  for (let i=0;i<verticalCuts.length-1;i++) {
    maxV = Math.max(maxV, verticalCuts[i+1] - verticalCuts[i])
  }
  return maxH * maxV % (1e9 + 7)
};

console.log('maxArea', maxArea(12,44, [2,1,9,6,7], [35,5,21,12,4,7,18,32,36,40,10,30,24,17,8,20,9,3,34,41,26,42,28,31,38,2,14,19,37,33,23,43,29,15,16,11]))