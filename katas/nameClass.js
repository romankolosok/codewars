//"this" is an other problem
class NamedOne{
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
    
    set firstName(name){
      this.first = name
    }
    
    set lastName(name){
      this.last = name
    }
    
    set fullName(name){
      if(/\s/.test(name)){
        name = name.split(/\s+/g)
        this.first = name[0]
        this.last = name[1]
      }
    }
  }