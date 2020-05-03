/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
  const dp = [nums[0]];
  let deque = [];

  const pushDeque = (i) => {
    if (deque[0] === i - k) {
      deque.shift();
    }
    while (deque.length && dp[deque[deque.length - 1]] <= dp[i]) {
      deque.pop();
    }
    deque.push(i);
  };

  for (let i = 1; i < nums.length; i++) {
    pushDeque(i - 1);
    dp[i] = nums[i] + Math.max(0, dp[deque[0]]);
  }

  const result = Math.max(...dp);
  return result;
};

console.log(constrainedSubsetSum([10, 2, -10, 5, 20], 2));
