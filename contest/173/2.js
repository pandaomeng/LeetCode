/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance
) {
  const validRes = restaurants
    .filter(item => item[2] >= veganFriendly)
    .filter(item => item[3] <= maxPrice)
    .filter(item => item[4] <= maxDistance)
    .sort((a, b) => {
      if (b[1] - a[1] !== 0) {
        return b[1] - a[1];
      }
      return b[0] - a[0];
    })
    .map(item => item[0]);

  return validRes;
};

console.log(
  "object",
  filterRestaurants(
    [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1]
    ],
    0,
    50,
    10
  )
);
