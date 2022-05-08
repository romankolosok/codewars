//Persistent Bugger.
function persistence(n) {
    let count = 0;
    while(n>=10){
      n = String(n);
      n = [...n];
      n = n.reduce((acc,cur) => +cur * acc,1);
      count++;
    }
    return count;
  }