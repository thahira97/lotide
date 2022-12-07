// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// assertArraysEqual(middle([1]),[]); // => []
// assertArraysEqual(middle([1, 2]),[]); // => []
// assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4]

const assert =  require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for [5]", () => {
    assert.deepEqual(middle([5]), []); 
  });
  it("returns [1,2,3,4,5,6] for [3,4]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]); 
  });

});
