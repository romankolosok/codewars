//First non-repeating character
function firstNonRepeatingLetter(s) {
    s = s.split("");
    s = s.filter(x=>s.reduce((acc,cur)=>cur===x.toLowerCase() || cur===x.toUpperCase()?acc+1:acc,0)===1)[0]
    return s === undefined?"":s;
  }