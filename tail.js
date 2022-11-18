const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  if (array.length === 1 || array.length === 0) {
    return [];
  } else {
    const slicedArr = array.slice(1);
    return slicedArr;
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(words.toString());
console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail([]).toString(), [].toString());
assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
assertEqual(tail([4, 5, 6, 7]).toString(), [4, 5].toString());
assertEqual(tail([8]).toString(), [].toString());



