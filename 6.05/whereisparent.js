//Where is my parent!?(cry)
function findChildren(input) {
let arr = input.split("");
  arr = arr.map(x => x.toLowerCase()).sort();
  arr = arr.map((x,i) => x !== arr[i-1]?x.toUpperCase():x);
  return arr.join("");  
}

console.log(findChildren("uwwWUueEe"));