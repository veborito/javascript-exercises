const palindromes = function (string) {
  const arr = string.split("");
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] !== arr[len - 1 - i])
      return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
