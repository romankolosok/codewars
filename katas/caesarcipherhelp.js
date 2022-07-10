//Caesar Cipher Helper
class CaesarCipher{
    constructor(shift, abc="ABCDEFGHIJKLMNOPQRSTUVWXYZ"){
      this.shift = shift
      this.abc = abc
    }
    
    encode(word){
      console.log("encode",word)
      word = word.toUpperCase().split("")
      for(let i = 0; i < word.length; i++){
        if(this.abc.indexOf(word[i]) !== -1){
          word[i] = this.abc[(this.abc.indexOf(word[i])+this.shift)%this.abc.length]
        }
      }
      return word.join("")
    }
    
    decode(word){
      console.log("decode",word)
      word = word.toUpperCase().split("")
      for(let i = 0; i < word.length; i++){
        if(this.abc.indexOf(word[i]) !== -1){
          word[i] = this.abc[(this.abc.indexOf(word[i])-this.shift+this.abc.length)%this.abc.length]
        }
      }
      return word.join("")
    }
  }