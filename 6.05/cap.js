function testit(s){
    console.log(s);
    return s === ""?"":s.split(" ").map(x => x.slice(0,-1) + x[x.length-1].toUpperCase()).join(" ");
  }