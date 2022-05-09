//Simple Fun #217: Sort By Guide
function sortByGuide(arr, guide) {
    let res = [];
    for(let i = 0; i < arr.length; i++){
      if(guide[i] === -1) res[i] = arr[i];
      else res[i] = undefined;
    }
    let counter = 1;
    for(let i = 0; i < arr.length; i++){
      if(res[i] === undefined){
        res[i] = arr[guide.indexOf(counter)];
        counter++
      }
    }
    return res;
  }