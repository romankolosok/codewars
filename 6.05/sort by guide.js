//Simple Fun #217: Sort By Guide
function sortByGuide(arr, guide) {
    let res = new Array(arr.length);
    let counter = 1;
    res.fill(undefined);
    res = res.map((x,i) => guide[i] === -1?arr[i]:x);
    res = res.map((x,i) => x === undefined?arr[guide.indexOf(counter++)]:x);
    return res;
  }