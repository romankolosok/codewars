//Count the smiley faces!
function countSmileys(arr) {
    return arr.filter(x=> /[\:\;][-~]?[D\)]/g.test(x)).length
  }