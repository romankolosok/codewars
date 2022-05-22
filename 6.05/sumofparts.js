//Sums of Parts
function partsSums(ls) {
    let res = [];
    let sum;
    if(ls.length !== 0){
      sum = ls.reduce((acc,cur)=>acc+cur);
      ls = ls.map((x,i)=>i>0?sum-=ls[i-1]:sum);
    }
    ls.push(0)
    return ls;
  }