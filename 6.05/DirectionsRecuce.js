//Directions Reduction
function dirReduc(arr){
    arr = arr.join(" ");
  for(let i = 0; i < arr.length; i++){
    arr = arr.replace(/NORTH\s+SOUTH/g,"");
    arr = arr.replace(/SOUTH\s+NORTH/g,"");
    arr = arr.replace(/EAST\s+WEST/g,"");
    arr = arr.replace(/WEST\s+EAST/g,"");
  }
  arr = arr.replace(/\s+/g, ' ').trim();
  if(arr.length > 0) return arr.split(" ");
  else return [];  
}