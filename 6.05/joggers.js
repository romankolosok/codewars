//Two Joggers
var nbrOfLaps = function (x, y) {
    let i = 1;
    while(x*i % y*i !== 0){
      i++;
    }
    return [i,(x*i)/y]
  }