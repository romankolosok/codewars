//Give me a Diamond

function diamond(n){
    if(n%2 === 0 || n <= 0) return null;
    let str,arr;
    str = new Array(n);
    str =  [str.fill("*").join("")];
    for(let i = 1; i <= Math.floor(n/2); i++){
        arr = ""
        for(let j = 0; j < n-i; j++){
            arr += j>=i?"*":" ";
        }
        str.push(arr);
        str.unshift(arr);
    }
    return str.join("\n")+"\n";
  }


console.log(diamond(11));