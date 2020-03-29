/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  const resMap = [];
  let result = 0;
  for (let i = 0; i < rating.length; i++) {
    resMap[i] = {
      bigger: 0,
      smaller: 0
    };
    for (let j = i - 1; j >= 0; j--) {
      if (rating[j] < rating[i]) {
        resMap[i].smaller += 1;
        result += resMap[j].smaller;
      } else if (rating[j] > rating[i]) {
        resMap[i].bigger += 1;
        result += resMap[j].bigger;
      }
    }
  }
  return result;
};

console.log('numTeams', numTeams([2, 5, 3, 4, 1]));
