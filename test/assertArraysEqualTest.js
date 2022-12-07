const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual')


assertArraysEqual([8,7,6],[8,7,6]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]);
