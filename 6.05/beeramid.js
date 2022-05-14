//Beeramid
var beeramid = function(bonus, price) {
    if(bonus < 0 || price < 0) return 0
    let sum = 0;
    let count = 0;
    let i = 1;
    while(sum <= bonus){
      sum += i**2 *price;
      count++;
      i++;
    }
    return count-1
  }