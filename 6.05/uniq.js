//uniq (UNIX style)
function uniq(a) {  
    return a.filter((x,i)=>x !== a[i-1]);
  }