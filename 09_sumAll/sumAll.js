const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2))
    return "ERROR";
  let size = Math.abs(num1 - num2) + 1;
  let min = num1 < num2 ? num1 : num2;
  let newArr = [...Array(size).keys().map(i => i + min)];

  return newArr.reduce((total, num) => total + num, 0);
};

// Do not edit below this line
console.log(sumAll(1, 4));
module.exports = sumAll;
