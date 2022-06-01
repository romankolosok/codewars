//Build Tower
function towerBuilder(n) {
    return (new Array(n)).fill("*").map((x,i)=>" ".repeat(i) + "*".repeat(n*2-1-i*2) + " ".repeat(i)).reverse();
  }