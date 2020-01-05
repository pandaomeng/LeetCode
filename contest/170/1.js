/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  let reverse = [...s].reduce((a, c) => c + a, "");
  console.log("reverse", reverse);

  let result = "";
  for (let i = 0; i < reverse.length; i++) {
    const char = reverse[i];
    if (char !== "#") {
      result += String.fromCharCode(96 + +char);
    } else {
      result += String.fromCharCode(96 + +(reverse[i + 2] + reverse[i + 1]));
      i += 2;
    }
  }
  return [...result].reduce((a, c) => c + a, "");
};

console.log(
  "output",
  freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#")
);
