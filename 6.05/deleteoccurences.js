//Delete occurrences of an element if it occurs more than n times
function deleteNth(arr,n){
    return arr.filter((x,i) => arr.slice(0,i).reduce((acc,cur) => cur===x?acc+1:acc,0) < n)
  }