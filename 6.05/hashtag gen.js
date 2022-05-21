//The Hashtag Generator
function generateHashtag (str) {
    str = str.replace(/\s+/g," ").trim()
    if(str.length === 0 || str.length >= 140) return false;
    str = str.replace(/^\w|\s+\w/g,x=>x.toUpperCase());
    str = str.replace(/\s/g,"");
    return "#"+str;  
  }