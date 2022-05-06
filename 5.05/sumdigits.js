//Debug Sum of Digits of a Number
function getSumOfDigits(integer) {
    var sum = 0;
    var digits =  integer.toString();
    for(let i = 0; i < digits.length; i++){
      sum += Number(digits[i])
    }
    return sum;
  }