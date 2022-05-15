//(Ready for) Prime Time
function prime(num) {
    let arr = new Array(num);
    arr.fill(1);
    arr = arr.map((x,i)=> i+1);
    arr = arr.filter(x => isPrime(x));
    return arr;
  }
  
  function isPrime(n) {
      if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
      var m = Math.sqrt(n);
      for (var i = 2; i <= m; i++)
          if (n % i == 0) return false;
      return true;
  }