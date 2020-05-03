/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let current = 0;
  k = cardPoints.length - k;
  for (let i = 0; i < k; i++) {
    current += cardPoints[i];
  }
  let min = current;
  for (let i = k; i < cardPoints.length; i++) {
    current += cardPoints[i];
    current -= cardPoints[i - k];
    if (current < min) {
      min = current;
    }
  }
  const sum = cardPoints.reduce((a, c) => a + c, 0);
  return sum - min;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
