//Convert string to camel case
function toCamelCase(str){
    return str===""?"":str.split(/[-_]/g).map((x,i)=>i>0?x[0].toUpperCase()+x.slice(1):x).join("");
  }