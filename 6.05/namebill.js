function billboard(name, price = 30){
    let sum = 0;
    for(let i = 1; i <= name.length; i++)
      sum += price;
    return sum;
  } 