//Playing with digits
function digPow(n, p){
    let num = [...n+""].map(Number).reduce((acc,cur,i)=>acc+cur**(p+i),0) / n
    return Number.isInteger(num)?num:-1
  }