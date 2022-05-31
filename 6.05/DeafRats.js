//The Deaf Rats of Hamelin
var countDeafRats = function(town) {
    if(town.replace(/P|\s+/g,"") === "") return 0;
    town = town.replace(/\s+/g,"");
    let p = town.indexOf("P")/2;
    let count = 0;
    town = town.match(/(~O)|(O~)/g);
    town.splice(p,0,"P")
    for(let i = 0; i < town.length; i++){
      if(i < p && town[i] !== "~O" || i > p && town[i] !== "O~") count++;    
    }
    return count;
  }
  