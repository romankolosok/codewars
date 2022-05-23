//Message Validator
function isAValidMessage(message){
    if(message.trim().length === 0) return true;
    let text = message.replace(/\d+[a-zA-Z]/g,x=>" "+x).trim().split(" ")
    return text.every(x=>parseInt(x)==x.slice((parseInt(x)+"").length).length)
  }