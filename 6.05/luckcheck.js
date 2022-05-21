//Luck check
function luckCheck(ticket){
    if(!/\D/g.test(ticket)){
      ticket = [...ticket];
      return ticket.slice(0,Math.floor(ticket.length/2)).reduce((a,c)=>a+ +c,0) === ticket.slice(Math.ceil(ticket.length/2)).reduce((a,c)=>a+ +c,0)
    }  
  }