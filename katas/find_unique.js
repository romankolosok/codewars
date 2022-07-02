//
function findUniq(arr) {
    return arr.filter(x => arr.lastIndexOf(x) === arr.indexOf(x))[0]
  }