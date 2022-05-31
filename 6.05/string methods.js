//String like [Char]
String.prototype.map = function(x){
    let str = this.split("");
    str = str.map(a=>x(a)).join("");
    return str;
  }
  
  String.prototype.filter = function(x){
    let str = this.split("");
    str = str.filter(a=>x(a)).join("");
    return str;
  }
  
  String.prototype.join = function(x){
    let str = this.split("");
    return str.join(x);
  }
  
  String.prototype.reverse = function(x){
    return this.split("").reverse().join("");
  }
  
  String.prototype.sort = function(x){
    let str = this.split("");
    return str.sort(x).join("");
  }
  
  String.prototype.forEach = function(x){
    let str = this.split("");
    str = str.forEach(x);  
    return str!==undefined?str.join(""):undefined;
  }
  
  String.prototype.some = function(x){
    let str = this.split("");
    return str.some(x);
  }
  
  String.prototype.every = function(x){
    let str = this.split("");
    return str.every(x);
  }
  
  String.prototype.splice = function(ind,num,...args){
    let str = this.split("");
    str.splice(ind,num,...args);
    return str.join("")
  }
  
  String.prototype.push = function(x){
    return this+x;
  }
  
  String.prototype.pop = function(x){
    return this.slice(0,-1);
  }
  
  String.prototype.shift = function(x){
    return this.slice(1);
  }
  
  String.prototype.unshift = function(x){
    return x+this;
  }
  
  String.prototype.reduce = function(func,start){
    let str = this.split("");
    return str.reduce(func,start);
  }
  
  String.prototype.reduceRight = function(func,start){
    let str = this.split("");
    return str.reduceRight(func,start);
  }