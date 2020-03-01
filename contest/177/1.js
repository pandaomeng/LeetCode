/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
  var date1Str = date1.split("-");
  var date1Obj = new Date(date1Str[0], date1Str[1] - 1, date1Str[2]);
  var date2Str = date2.split("-");
  var date2Obj = new Date(date2Str[0], date2Str[1] - 1, date2Str[2]);
  var t1 = date1Obj.getTime();
  var t2 = date2Obj.getTime();
  var dateTime = 1000 * 60 * 60 * 24; // 每一天的毫秒数
  var minusDays = Math.floor((t2 - t1) / dateTime); // 计算出两个日期的天数差
  var days = Math.abs(minusDays); //取绝对值
  return days;
};

console.log("daysBetweenDates", daysBetweenDates("2020-01-15", "2019-12-31"));
