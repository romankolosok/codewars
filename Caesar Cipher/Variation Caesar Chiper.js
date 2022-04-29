//First Variation on Caesar Cipher

function movingShift(s, shift) {
    const str = 'abcdefghijklmnopqrstuvwxyz'
    let curPos;
    let char = "";
    for(let i = 0; i < s.length; i++){
      if(str.includes(s[i].toLowerCase())){
        curPos = (str.indexOf(s[i].toLowerCase())+shift+i)%26;
        curPos = curPos < 0? 26 + curPos: curPos;
        char += s[i] !== s[i].toLowerCase()?str[curPos].toUpperCase():str[curPos];
      }else char += s[i];
    }
    let l = 0, arr = [];
    s = char;
    for(let i = 0; i < 4; i++){
      arr.push(s.substr(l,Math.ceil(s.length/5)));
      l += Math.ceil(s.length/5);
    }
    arr.push(s.substr(l));
    return arr;
  }
  
  function demovingShift(arr, shift) {
    arr = arr.join("");
    const str = 'abcdefghijklmnopqrstuvwxyz'
    let curPos;
    let char = "";    
    for(let i = 0; i < arr.length; i++){
      if(str.includes(arr[i].toLowerCase())){
        curPos = (str.indexOf(arr[i].toLowerCase())-shift-i)%26;
        curPos = curPos < 0? 26 + curPos%26: curPos;
        char += arr[i] !== arr[i].toLowerCase()?str[curPos].toUpperCase():str[curPos];
      }else char += arr[i];
    }
    return char;
  }
  


console.log(movingShift("I should have known that you would have a perfect answer for me!!!",1));
console.log(demovingShift(["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"],1));