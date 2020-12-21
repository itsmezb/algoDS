

let bubbleSort = (array) => {
  for (let j=0;j<array.length;j++) {
    for (let i=0;i<array.length;i++) {
      if(array[i] > array[i+1]) {
      let temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
      }
     }
    }
   return array;
  }
  
 console.log(bubbleSort([3,3,24,92,38,23,23,44,55,662,662]));

 // output :     3, 3, 23, 23, 24, 38, 44, 55, 92, 662, …] 
