//Atbash Cipher Helper
function AtbashCipher(abc) {
    this.encode = function (str) {
      console.log("encode", str)
      str = str.split("")
      str = str.map(x=>abc.indexOf(x) !== -1?abc[abc.length-1-abc.indexOf(x)]:x)
      return str.join("")
    };
    this.decode = function (str) {
      console.log("encode", str)
      str = str.split("")
      str = str.map(x=>abc.indexOf(x) !== -1?abc[abc.length-1-abc.indexOf(x)]:x)
      return str.join("")
    };
  }