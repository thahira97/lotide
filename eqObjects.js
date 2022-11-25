const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function (array1, array2) {
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


const eqObjects = function (object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key of obj1Keys) {
    if (
      (Array.isArray(object1[key]) === true &&
      Array.isArray(object2[key]) === true )
    ) {
      if(eqArrays(object1[key], object2[key]) === false) {
        return false
      }
    } else  if (object1[key] !== object2[key]) {
      console.log("else if condition is running")
      return false;
    }
  }
  return true;
};
const cd = { c: "1", d: ["2", 3], e: ["2", 3] };
const dc = { d: ["2", 3], c: "1", e: ["2", 4] };
console.log(eqObjects(cd, dc)); // => true

// console.log(eqObjects({a:1,b:"e",d:"g"}, {a:1,b:"e",d:"g"}));


// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
