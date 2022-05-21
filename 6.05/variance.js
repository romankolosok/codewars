//Calculate Variance
var variance = function(numbers) {
    let mean = numbers.reduce((acc,cur)=>acc+cur,0)/numbers.length;
    return numbers.reduce((acc,cur)=> acc + (cur-mean)**2,0)/numbers.length;
  };