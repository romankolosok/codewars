//Perimeter of squares in a rectangle
function perimeter(n) {
    let sum = 0;
    for(let i = 0; i <= n+1; i++){
      sum+=fibonacci(i);
    }
  return sum*4;
}

var fibonacci = function(n) {
    if(n==0 || n == 1)
        return n;
    let n3, n1 = 0, n2 = 1;
  
    for(let i = 2; i <= n; i++){
      n3 = n2 + n1;
      n1 = n2;
      n2 = n3;
    }
  return n3;
}