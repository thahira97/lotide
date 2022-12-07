const assertEqual =  require('../assertEqual');
const tail = require('../tail')

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); 
assertEqual(tail([]).toString(), [].toString());
assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
assertEqual(tail([4, 5, 6, 7]).toString(), [4, 5].toString());
assertEqual(tail([8]).toString(), [].toString());
