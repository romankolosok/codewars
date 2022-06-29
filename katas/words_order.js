//Your order, please
function order(words){
    words = words.split(/\s+/g);
    words.sort((a,b)=> +a.replace(/[^\d]+/g,"") - +b.replace(/[^\d]+/g,""));
    return words.join(" ")
  }