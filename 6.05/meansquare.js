//Mean Square Error
var solution = function(arr1, arr2) {
    arr1 = arr1.map((x,i)=>(x-arr2[i])**2).reduce((acc,cur)=>acc+cur,0);  
    return arr1/arr2.length
  }