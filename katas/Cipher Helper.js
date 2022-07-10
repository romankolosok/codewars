//Vigenère Cipher Helper
function VigenèreCipher(key, abc) {
    this.encode = function (str) {
      let fullKey = "".padEnd(str.length, key)    
      str = str.split("")
      str = str.map((x,i)=>abc.indexOf(x) !== -1?abc[(abc.indexOf(x)+abc.indexOf(fullKey[i]))%abc.length]:x)
      return str.join("")
      console.log(str) 
    };
    this.decode = function (str) {
      let fullKey = "".padEnd(str.length, key)    
      str = str.split("")
      str = str.map((x,i)=>abc.indexOf(x) !== -1?abc[(abc.indexOf(x)-abc.indexOf(fullKey[i])+abc.length)%abc.length]:x)
      return str.join("")
      console.log(str) 
    };
  }