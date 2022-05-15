//Phone Directory
function phone(str, num) {  
    str = str.split("\n");
    str = str.filter(x => x.includes(num));
    if(str.length > 1) return `Error => Too many people: ${num}`;
    else if(str.length < 1) return `Error => Not found: ${num}`;
    str = str[0];
    let res = [];
    res.push(str.match(/\+\d{1,2}-\d{3}-\d{3}-\d{4}/g)[0]);
    str = str.replace(/\+\d{1,2}-\d{3}-\d{3}-\d{4}/g,"");
    res.push(str.match(/\<.*\>/g)[0]);
    str = str.replace(/\<.*\>/g,"");
    str = str.replace(/[^\w\s\-\.]|/g,"");
    str = str.replace(/\s+|\_/g," ").trim();
    res.push(str);
    return `Phone => ${res[0].slice(1)}, Name => ${res[1].slice(1,-1)}, Address => ${res[2]}`
  }