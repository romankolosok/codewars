//Unique In Order
var uniqueInOrder=function(it){
    if(it.length === 0) return [];
    const res = [it[0]];
    for(let i = 1; i < it.length; i++){
      if(it[i-1] !== it[i]) res.push(it[i]);
    }
    return res;
  }