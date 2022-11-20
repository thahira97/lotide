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
const without = function(arr1, arr2) {
  let finalArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      finalArr.push(arr1[i]);
    }
  }
  return finalArr;
};

console.log(without([1, 2, 3], [1]) )// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]






// console.log(assertArraysEqual([8,7,6],[8,7,6]));
// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));