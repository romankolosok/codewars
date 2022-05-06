//Count number of zeros from 1 to N
function countZeros(n) {
    let count = 0;
    for(let i = 1; i <= n; i++){
      if(i.toString().includes("0")) count+=i.toString().split("").filter(x => x == 0).length;
    }
    return count;
  }