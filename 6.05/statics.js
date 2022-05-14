//Statistics for an Athletic Association
function stat(str) {
    if(str === "") return ""
    let res = "";
    str = str.replace(/\s*/g,"");
    str = str.split(",").map(x => x.split("|"));
    str = str.map(x => +x[0]*3600 + +x[1]*60 + +x[2]);
    let rng = secToTime(Math.max(...str) - Math.min(...str));
    let avg = secToTime(str.reduce((acc,cur) => acc+cur,0)/str.length);
    str.sort((a,b) => a-b);
    let med = secToTime((str[Math.floor((str.length-1)/2)]+str[Math.floor((str.length)/2)])/2)
    rng = rng.map(x => (""+x).padStart(2,"0")).join("|");
    avg = avg.map(x => (""+x).padStart(2,"0")).join("|");
    med = med.map(x => (""+x).padStart(2,"0")).join("|");
    return `Range: ${rng} Average: ${avg} Median: ${med}`
  }
  
  function secToTime(n){
    let arr = [];
    arr.push(Math.floor(n/3600));
    n = n-Math.floor(n/3600)*3600;
    arr.push(Math.floor(n/60));
    n = n-Math.floor(n/60)*60;
    arr.push(Math.floor(n));
    return arr;
  }