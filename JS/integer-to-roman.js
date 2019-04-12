/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  let temp = num
  let res = ''
  const primitiveArr = [
    {num: 1000, str: 'M'},
    {num: 900, str: 'CM'},
    {num: 500, str: 'D'},
    {num: 400, str: 'CD'},
    {num: 100, str: 'C'},
    {num: 90, str: 'XC'},
    {num: 50, str: 'L'},
    {num: 40, str: 'XL'},
    {num: 10, str: 'X'},
    {num: 9, str: 'IX'},
    {num: 5, str: 'V'},
    {num: 4, str: 'IV'},
    {num: 1, str: 'I'},
  ]
  while (temp !== 0) {
    for (let each of primitiveArr) {
      if (temp >= each.num) {
        res += each.str
        temp -= each.num
        break
      }
    }
  }
  return res
}

console.log(intToRoman(1994))


