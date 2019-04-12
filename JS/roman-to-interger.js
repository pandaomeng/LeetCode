var romanToInt = function(s) {
  res = 0
  const primitiveArr = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  }
  while (s !== '') {
    if (s.length >= 2 && primitiveArr[s.substring(0, 2)]) {
      res += +primitiveArr[s.substring(0, 2)]
      s = s.substr(2)
      continue
    }
    if (primitiveArr[s[0]]) {
      res += +primitiveArr[s[0]]
      s = s.substr(1)
      continue
    }
  }
  return res
}

console.log(romanToInt("MCMXCIV"))
