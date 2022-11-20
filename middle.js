const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};
const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};
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
// TEST CODE
assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]),[]); // => []
assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4]
