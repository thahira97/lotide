const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(letters) {
  let lettNoSpace = letters.replace(/ /g, "");
  let result = {};
  for (let letter of lettNoSpace) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};


console.log(countLetters("hel lo"));
// 1.create a function that takes string as an argument and returns the count as a object
// we have to check through the letters and for that we use loop
// and lets use if to check if the letter is in result and add if more than 1 letter is there

