//Smallest Permutation
function minPermutation(n) {
    let cpy = n;
    n = Math.abs(n);
    n += "";
    n = [...n];
    let z = n.filter(x => x == 0).length;
    z = new Array(z);
    z.fill("0");
    n = n.filter(x => x != 0).sort();
    n.splice(1,0,...z);
    n = +n.join("");
    if(cpy < 0) n *= -1;
    return n;    
  }