//JadenCase kata
String.prototype.toJadenCase = function () {
    let str = this;
    let char;
    str = str.split(" ");
    for(let i = 0; i < str.length; i++){
      char = str[i][0]
      char = char.toUpperCase() 
      str[i] = char + str[i].slice(1);
    }
    str = str.join(" ");
    return str;
  };