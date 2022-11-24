const eqObjects = function(object1,object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let key of obj1) {
    if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
      return eqArrays(object1[key],object2[key]);
    }
     
    if (object1[key] === object2[key]) {
      continue;
    } return true;
  } return false;
};
const assertObjectsEqual = function(actual, expected) {
  
};