//Find an area
function findArea(points) {
    var result = 0;  
    for(let i = 0; i < points.length-1; i++){
      result += (points[i+1].X-points[i].X)*(points[i+1].Y+points[i].Y)/2
    }
    return result;
  }

