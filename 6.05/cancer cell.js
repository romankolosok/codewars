//Cancer cells
function cutCancerCells(org){
    return org.replace(/[a-z]?C[a-z]?|c/g,'')
  }