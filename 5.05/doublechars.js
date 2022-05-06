//Double Char
function doubleChar(str) {
    let res = [];
    for(let i = 0; i < str.length; i++){
      res.push(str[i],str[i]);
    }
    return res.join("");
  }
  