//Count IP Addresses
function ipsBetween(start, end){
    start = start.split(".").map((x,i)=>x * (256**(3-i))).reduce((acc,cur)=>acc+cur,0);
    end = end.split(".").map((x,i)=>x * (256**(3-i))).reduce((acc,cur)=>acc+cur,0);
    return Math.abs(start-end);
  }