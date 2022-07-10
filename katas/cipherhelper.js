//Simple Substitution Cipher Helper
function SubstitutionCipher(abc1, abc2) {
    this.encode = function (str) {
      str = str.split("")
      str = str.map(x=>abc1.indexOf(x) !== -1?abc2[abc1.indexOf(x)]:x)
      return str.join("")
    }
    this.decode = function (str) {
      str = str.split("")
      str = str.map(x=>abc2.indexOf(x) !== -1?abc1[abc2.indexOf(x)]:x)
      return str.join("")
    }
  }