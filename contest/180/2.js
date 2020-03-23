/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  var obj = {};
  var _value = [];
  obj.maxSize = maxSize;
  return obj;
};

CustomStack.prototype.push = function(x) {
  console.log('this', this);
  // this.push()
  // if ()
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {};

var obj = new CustomStack(3);
console.log('obj', obj);
obj.push(10);
console.log('obj', obj);
// var param_2 = obj.pop();
// obj.increment(k, val);
