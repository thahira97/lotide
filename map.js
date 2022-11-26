
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
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
   results.push(callback(item));
  }

  return results;
}


const numbers = [1, 2, 3, 4, 5]
const items = ["ground", "control", "to", "major", "tom"];

const results1 = map(items, item => item[0]);
const results2 = map(numbers,num => num + 1)
const results3 = map(items, word => word.toUpperCase())
console.log(results1);
console.log(results2)
console.log(results3)

assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(results2,[ 2, 3, 4, 5, 6 ])
assertArraysEqual(results3,[ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ])
