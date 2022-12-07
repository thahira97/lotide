const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns [] for [5]", () => {
    assert.deepEqual(tail(['5']), []); 
  });
  it("returns [8,7,6,5,4] for [9,8,7,6,5,4]", () => {
    assert.deepEqual(tail([9,8,7,6,5,4]), [8,7,6,5,4]); 
  });

});
