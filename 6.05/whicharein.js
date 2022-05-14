//Which are in
function inArray(array1,array2){
    return array1.filter(x => array2.some(a => a.includes(x))).sort()
  }