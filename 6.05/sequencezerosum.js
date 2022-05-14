//Longest sequence with zero sum
var maxZeroSequence = function(arr) {
    let max = [];
    let r;
    for(let i = 0; i < arr.length; i++){
      r = arr.slice(i);
      while(r.reduce((acc,cur) => acc+cur,0) !== 0){
        r.pop();
      }    
      if(r.reduce((acc,cur) => acc+cur,0) === 0 && r.length >= max.length) max = r;
    }
    return max;
  }