function sepStr(str) {
    let res = [];
    str = str.split(" ");
    let max = str.map(x => x.length);
    max = Math.max(...max);
    for(let i = 0; i < max; i++){
      let arr = [];
      for(let j = 0; j < str.length; j++){
        if(str[j][i] !== undefined) arr.push(str[j][i]);
        else arr.push("");
      }
      res.push(arr);
    }
    return res;
  }

  console.log(sepStr("The Mitochondria is the powerhouse of the cell"));