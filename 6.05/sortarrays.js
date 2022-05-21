//Sort arrays - 3
sortme = function( courses ){
    courses.sort();
    courses.sort((a,b)=>+a.slice(-4) - +b.slice(-4))
    return courses;
  }