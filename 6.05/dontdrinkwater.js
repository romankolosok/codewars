//Don't Drink the Water
function separateLiquids(glass) {
    if(glass.length === 0) return [];
    const density = {
      "H":1.36,
      "W":1.00,
      "A":0.87,
      "O":0.80
    }
    const len = glass[0].length;
    glass = [].concat(...glass);
    glass.sort((a,b)=> density[a]-density[b]);
    let arr = [];
    for(let i = 0; i < glass.length/len; i++){
      arr.push(glass.slice(len*i,len*i+len));
    }
    return arr;
  }