//Vector class
class Vector {
    constructor(vect){
      this.vect = vect
    }
    
    toString(){
      return `(${this.vect+""})`
    }
    
    equals(x){
      return this.vect.every((el,i)=>x.vect[i] === el)
    }
    
    add(x){
      if(x.vect.length === this.vect.length){
        let res = this.vect.map((el,i)=>el+x.vect[i])
        return new Vector(res)
      }
      throw Error()
    }
    
    subtract(x){
      if(x.vect.length === this.vect.length){
        let res = this.vect.map((el,i)=>el-x.vect[i])
        return new Vector(res)
      }
      throw Error()
    }
    
    dot(x){
      if(x.vect.length === this.vect.length){
        return this.vect.reduce((acc,cur,i)=>acc + cur * x.vect[i],0);
      }
      throw Error()
    }
    
    norm(){
      return this.vect.reduce((acc,cur)=>acc + cur**2)**0.5
    }
    
    
  }