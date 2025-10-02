// const removeFromArray = function(array) {
//   for (let i = 1; i < arguments.length; i++) {
//     while ((index = array.indexOf(arguments[i])) > -1)
//       array.splice(index,1);
//   }
//   return array;
// };
const removeFromArray = (array, ...args) => array.filter(val => !args.includes(val))
console.log(removeFromArray([1,2,3,4], 3));
// Do not edit below this line
module.exports = removeFromArray;
