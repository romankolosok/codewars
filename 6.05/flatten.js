//flatten()
function flatten(...args) {
    return (args+[]).split(",").map(x=>x===""?null:isNaN(x)?x:+x);
  }