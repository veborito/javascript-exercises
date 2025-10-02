const removeFromArray = (array, ...args) => array.filter(val => !args.includes(val))
console.log(removeFromArray([1,2,3,4], 3));
// Do not edit below this line
module.exports = removeFromArray;
