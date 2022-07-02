//How many consecutive numbers are needed?
function consecutive(arr) {
    let count = 0;
    arr.sort((a,b)=>a-b);
    for(let i = arr[0]; i < arr[arr.length-1]; i++){
      if(arr.includes(i)) continue;
      count++;
    }
    return count;
  }