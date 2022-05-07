//From..To..Series #1: from m to n. Find the maximum range
function findMaxRange(ranges){
    let copy = ranges.map(x => x.slice(5)).map(x => x.split(" to "));
    copy = copy.map(x => Math.abs(Number(x[0])-Number(x[1])));
    const max = Math.max(...copy);
    ranges = ranges.filter((x,i) => copy[i] === max);
    return ranges;  
  }

  console.log(findMaxRange(["from 1 to 10","from 10.1 to 1","from -1 to -10"]));