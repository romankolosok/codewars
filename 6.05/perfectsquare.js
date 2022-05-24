//Perfect Square
function perfectSquare(string){
    if(/,/g.test(string)) return false;
    else if(string === ".") return true;
    string = string.split("\n");
    return string.length > 1 && string.every(x=>x.length === string.length);
  }