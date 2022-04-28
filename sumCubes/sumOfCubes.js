//Hidden "Cubic" numbers

function isSumOfCubes(s){
  let i = 0;
  const num = "1234567890-";
  let flag = false;
  let res = [], str = "";
  while(i < s.length){
    if(num.includes(s[i])){
      if(str.length === 4 && str[0] === '-' || str.length === 3 && str[0] !== '-'){
        res.push(str);
        str = "";
      } 
      flag = true;
      str += s[i];      
    }else if(flag && !num.includes(s[i])){
      flag = false;
      res.push(str);
      str = "";
    }
    i++;
  }
  if(str.length > 0) res.push(str);
  res = res.map(Number).filter(x => Number.isInteger(x) && x >= 0);
  res = res.filter(x => String(x).split("").reduce((acc,cur) => acc + Number(cur)**3,0) === x);
  if(res.length > 0) return res.join(" ") +" "+ res.reduce((acc,cur) => acc+cur,0) + " Lucky";
  else return "Unlucky";
}


console.log(isSumOfCubes("371407298a --- dreary, ###100.153 I thought, 9926315strong -127&() 1"));