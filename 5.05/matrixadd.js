//Matrix Addition
function matrixAddition(a, b){
    return a.map((x,i)=>x.map((el,j)=>el+b[i][j]));
  }