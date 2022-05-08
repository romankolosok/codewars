function snail(arr){
    const n = arr.length;
    if(n === 0) return [];
    else if(n === 1) return arr[0];
    let res = [];
    for(let p = 0; p < Math.floor(n/2); p++){
        for(let j = p; j <= n-p-2; j++){
            res.push(arr[p][j]);
        }
        for(let j = p; j <= n-p-2; j++){
            res.push(arr[j][n-p-1]);
        }
        for(let j = n-p-1; j >= p+1; j--){
            res.push(arr[n-p-1][j])
        }
        for(let j = n-p-1; j >= p+1; j--){
            res.push(arr[j][p]);
        }
    }
    if(n%2) res.push(arr[Math.floor(n/2)][Math.floor(n/2)]);
  return res;
}

  console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));