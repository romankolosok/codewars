//Stop gninnipS My sdroW!
function spinWords(string){
    string = string.split(" ");
    string = string.map(x => x.length >= 5?[...x].reverse().join(""):x);
    return string.join(" ");
  }