//Simple Pig Latin
function pigIt(str){
    str = str.split(" ");  
    let arr;
    for(let i = 0; i < str.length; i++){
      arr = str[i].split("");
      if(arr.every(x => x >= "A" && x <= "Z" || x >= "a" && x <= "z")){
        arr.push(arr.shift());
        str[i] = arr.join("")+"ay";
      }
    }
    return str.join(" ");
  }