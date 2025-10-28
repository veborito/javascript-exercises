const palindromes = function (string) {
  const arr = string.replace(/[^\w]/g, "").toLowerCase().split("");
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] != arr[len - 1 - i])
      return false;
  }
  return true;
};

palindromes('A car, a man, a maraca.')
// Do not edit below this line
module.exports = palindromes;
