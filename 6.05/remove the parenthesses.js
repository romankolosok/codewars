//Remove the parentheses
function removeParentheses(s){
    while(s.includes("("))
      s = s.replace(/\([\w\s]*\)/gm,"");
    return s;
  }