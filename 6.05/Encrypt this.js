//Encrypt this!
var encryptThis = function(text) {
    text = text.split(" ")
    for(let i = 0; i < text.length; i++){
      if(text[i].length > 2){
        text[i] = text[i].charCodeAt(0)+text[i].slice(-1)+text[i].slice(2,-1)+text[i][1]
      }else text[i] = text[i].charCodeAt(0) + text[i].slice(1);
    }
    return text.join(" ");
  }