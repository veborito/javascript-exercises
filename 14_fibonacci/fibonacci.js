const fibonacci = function(number) {
  if (number < 0)
    return "OOPS";
  else if (number == 0)
    return 0;
  else if (number == 1 || number == 2)
    return 1;
  return fibonacci(number - 1) + fibonacci(number - 2);
};

console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));


// Do not edit below this line
module.exports = fibonacci;
