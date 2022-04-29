//IP Validation

function isValidIP(str) {
    str = str.split(".");
    if(str.length !== 4) return false;
    return str.every(x => String(Number(x)) === x && Number(x) >= 0 && Number(x) <= 255 );
  }


console.log(isValidIP("137.255.156.100"));