//Good vs Evil
function goodVsEvil(good, evil){
    let goodArr = [1,2,3,3,4,10];
    let evilArr = [1,2,2,2,3,5,10];
    good = good.split(" ").reduce((acc,cur,i)=>acc+cur*Number(goodArr[i]),0);
    evil = evil.split(" ").reduce((acc,cur,i)=>acc+cur*Number(evilArr[i]),0);
    return 'Battle Result: ' + (good > evil?'Good triumphs over Evil':evil > good?'Evil eradicates all trace of Good':'No victor on this battle field');
  
  }
  