//Convert all the cases!
function changeCase(id, c){
    if(!/(_.*-)|(-.*_)|([A-Z].*-)|([A-Z].*_)|(_.*[A-Z])|(-.*[A-Z])/g.test(id)){
      if(/_|-/g.test(id)) id = id.split(/-|_/g);
      else id = id.replace(/[A-Z]/g, x=>" "+x).trim().split(" ");
      switch(c){
          case "snake":
            id = id.map(x=>x.toLowerCase());
            return id.join("_");
          case "camel":
            id = id.map((x,i)=>i>0?x[0].toUpperCase()+x.slice(1).toLowerCase():x.toLowerCase());
            return id.join("");
          case "kebab":
            id = id.map(x=>x.toLowerCase());
            return id.join("-");
      }
    }
  }