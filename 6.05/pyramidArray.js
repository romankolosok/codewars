//Pyramid Array
function pyramid(n) {
    let arr = new Array(n);
    for(let i = 0; i < n; i++){
      let a = new Array(i+1);
      a.fill(1,0,i+1);
      arr[i] = a;
    }
    return arr;  
  }