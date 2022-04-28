//Find the total white and black areas in a strange chessboard

function whiteBlackAreas(cols, rows) {
  let white = 0;
  let even, odd, colsum;
  colsum = cols.reduce((acc,cur) => acc+cur,0);
  even = rows.reduce((acc,cur,i) => i%2 === 0?acc+cur:acc,0);
  odd = rows.reduce((acc,cur,i) => i%2 === 1?acc+cur:acc,0);
  for(let i = 0; i < rows.length; i++){
    if(i%2) white += cols[i]*odd;
    else white += cols[i]*even;
  }
  return [white,colsum*(even+odd)-white];
}

console.log(whiteBlackAreas([3,1,2,7,1],[1,8,4,5,2]));