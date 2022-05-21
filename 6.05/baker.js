//Pete, the baker
function cakes(recipe, available) {
    let arr = [];
    for(let key in recipe){
      arr.push(available[key]/recipe[key]);
    }
    if(arr.some(x=> isNaN(x) || x < 1)) return 0;
    return Math.floor(Math.min(...arr));
  }