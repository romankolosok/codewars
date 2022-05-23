//Split strings
function solution(str){
    str = str.length ===0?[]:str.length%2===0?str.match(/.{2}/g):str.match(/.{2}/g).concat([str.slice(-1)+"_"]);
    return str
  }