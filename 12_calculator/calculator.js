const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, curr) => total + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr, 1);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(number) {
  range = [...Array(number).keys()].map((number) => number + 1);
	return range.reduce((total, curr) => total * curr, 1)
};

console.log(factorial(1))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
