//
class OnceNamedOne{
    constructor(firstName, lastName){
      this.first = firstName;
      this.last = lastName;
    }
    
    get fullName(){
      return this.first + " " + this.last
    }
    
    get firstName(){
      return this.first
    }
    
    get lastName(){
      return this.last
    }
  }