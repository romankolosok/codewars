//Maximum subarray sum
var maxSequence = function(arr){
    console.log(arr);
    if(arr.every(x => x < 0) || arr.length === 0) return 0;
    let max = 0;
    let sum = 0;
    let mas = [];
    for(let i = 0; i < arr.length; i++){
      mas = arr.slice(i);
      for(let j = i; j < arr.length; j++){      
        sum = mas.reduce((acc,cur)=> acc+cur,0);
        if(sum > max) max = sum;
        mas.pop();
      }
    }
    return max;
  }