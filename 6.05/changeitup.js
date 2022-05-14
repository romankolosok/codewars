//Change it up
function changer(str) { 
    const s = "abcdefghijklmnopqrstuvwxyz"
    str = str.toLowerCase();
    str = [...str].map(x => s.includes(x)?s[(s.indexOf(x)+1)%26]:x);
    str = str.map(x => ("aeoiu").includes(x)?x.toUpperCase():x);
    return str.join("")
  }