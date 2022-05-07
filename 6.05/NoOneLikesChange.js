//No one likes carrying change.
function coinsNeeded(amount, coin) {
    let count = 0;
    coin.sort((a,b) => a - b);
    for(let i = coin.length-1; i >= 0; i--){
      count += Math.floor(amount/coin[i]);
      amount -= coin[i]*Math.floor(amount/coin[i]);
    }
    return count;
  }