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
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};

const letterPositions = function(str) {
  let result = {};
  for (let i in str) {
    if (Object.keys(result).includes(str[i])) {
      result[str[i]].push(i);
    } else if (str[i] !== " ") {
      result[str[i]] = [i];
    }
  }
  return result;
};
console.log(letterPositions("lighthouse in the house"));

console.log(assertArraysEqual(letterPositions("hello").e, [1]));
