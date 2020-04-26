/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const deque = [];

  const pushDeque = (i) => {
    if (deque[0] === i - k) {
      deque.shift();
    }
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    deque.push(i);
  };

  let max = nums[0];
  for (let i = 0; i < k; i++) {
    pushDeque(i);
    max = Math.max(max, nums[i]);
  }
  const res = [max];

  for (let i = k; i < nums.length; i++) {
    pushDeque(i);
    res.push(nums[deque[0]]);
  }

  return res;
};

console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));
