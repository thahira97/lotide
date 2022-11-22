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
const letterPositions = function(sentence) {
  const result = {};
  for (let i in sentence) {
    if(sentence[i] !== ' ') {
    if (result[sentence[i]]) {
      result[sentence[i]].push(Number(i));
    } else result[sentence[i]] = [Number(i)]
  } 
} return result;
};


console.log(assertArraysEqual(letterPositions("hello").e, [1]));


