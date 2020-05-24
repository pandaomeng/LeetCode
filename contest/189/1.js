/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i <= startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      count += 1;
    }
  }
  return count;
};

console.log(
  'busyStudent([9,8,7,6,5,4,3,2,1])',
  busyStudent(
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [10, 10, 10, 10, 10, 10, 10, 10, 10],
    5
  )
);
