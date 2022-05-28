//Narcissistic Numbers
function isNarcissistic(n) {
    return [...n+""].reduce((acc,cur,i,a)=>acc+ (Number(cur)**a.length),0) === n;
  }