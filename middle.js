const eqArrays = require('./eqArrays');
 
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let newArr = [];
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return newArr;
  } else {
    if (array.length % 2 !== 0) {
      let oddArr = [array[Math.floor(array.length / 2)]];
      return oddArr;
    } else {
      let evenArr = [array[array.length / 2 - 1], array[array.length / 2]];
      return evenArr;
    }
  }
};

module.exports = middle;