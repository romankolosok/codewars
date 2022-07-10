//Affine Cipher Helper
class AffineCipher{
    constructor(abc, a, b){
      if(gcd(a,abc.length) === 1){
        this.abc = abc
        this.a = a % abc.length
        this.b = b % abc.length
      }else throw Error()    
    }
    
    encode(str){
      str = str.split("")
      str = str.map(x=>this.abc.includes(x)? this.abc[(this.abc.indexOf(x)*this.a + this.b)%this.abc.length] :x)
      return str.join("")
    }
    
    decode(str){
      str = str.split("")
      str = str.map(x=>this.abc.includes(x)? this.abc[this.abc.split("").findIndex((el,ind)=>this.abc.indexOf(x) === (ind * this.a + this.b)%this.abc.length)] :x)
      return str.join("")
    }
  }