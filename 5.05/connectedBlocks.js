//Connected blocks
function solution(input) {
    let count, max = 0, j;
    let curArr = [];
    input = input.split(/\,/g).filter(x=>x.length === 2 && isFinite(x));
    input = input.filter((x,i)=> input.indexOf(x) === i).map(x=>[+x[0],+x[1]]);
    
    for(let i = 0; i < input.length; i++){
      curArr = [input[i]];
      for(let k = 0; k < input.length; k++){
        for(let j = 0; j < input.length; j++){
          if(!curArr.includes(input[j])){
            if(curArr.some(el=>el[0]===input[j][0] && Math.abs(el[1]-input[j][1]) === 1)) curArr.push(input[j]);
            else if (curArr.some(el=>el[1]===input[j][1] && Math.abs(el[0]-input[j][0]) === 1)) curArr.push(input[j]);
          }
        }
      }
      console.log(curArr);
      if(curArr.length > max) max = curArr.length;
    }
    return max;
  }