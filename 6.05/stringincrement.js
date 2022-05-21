//String incrementer
function incrementString (str) {
    if(/\d/g.test(str)){
      let pos = str.search(/\d/g)
      let num = str.slice(pos);
      let len = num.length;
      num = (+num + 1+"").padStart(len,"0");
      return str.slice(0,pos)+num;
    }else return str+1;
  }