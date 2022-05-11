//Simple Fun #79: Delete a Digit
function deleteDigit(n) {
    let cpy = n;
    let i = 0;
    let max = 0;
    
    while(i < n.toString().length){
      cpy = [...n+""];
      cpy.splice(i,1);
      if(max < +cpy.join("")){
        max = +cpy.join("");
      }
      i++;
    }
    return max;
  }