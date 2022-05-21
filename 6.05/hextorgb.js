//Convert A Hex String To RGB
function hexStringToRGB(hexString) {
    hexString = hexString.slice(1);
    let res = [];
    for(let i = 0; i < 3; i++){
      res.push(parseInt(hexString.substr(i*2,2),16))
    }
    return {r: res[0], g:res[1], b:res[2]}
  }