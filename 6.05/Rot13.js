//Rot 13
function rot13(msg){
    const str = "abcdefghijklmnopqrstuvwxyz";
    msg = msg.replace(/[a-zA-Z]/g,x => x===x.toLowerCase()?str[(str.indexOf(x)+13)%26]:str[(str.indexOf(x.toLowerCase())+13)%26].toUpperCase())
    return msg;
  }