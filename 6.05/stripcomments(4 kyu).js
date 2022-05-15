//Strip Comments
function solution(input, markers) {
    input = input.split("\n");
    let k;
    for(let i = 0; i < input.length; i++){
      k = markers.reduce((acc,cur,ind)=> acc===-1?input[i].includes(cur)?acc=ind:acc:acc,-1)
      if(k !== -1){
        console.log(markers[k]);
        input[i] = input[i].slice(0,input[i].indexOf(markers[k])).trim();
      }
    }
    return input.join("\n");
  };