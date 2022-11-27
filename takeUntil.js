 
 
  const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];
 const takeUntil = function (array,callback) {
   const result= [];
   for(let arr of array){
    if (!callback(arr)){
      result.push(arr)
    } else{
      return result
    }
   }
 };
 const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
 const results1 = takeUntil(data1, x => x < 0);
 console.log(results1);
