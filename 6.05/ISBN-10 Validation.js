//ISBN-10 Validation
function validISBN10(isbn) {
    if(isbn.length !== 10) return false;
    isbn = [...isbn];
    if(!isbn.slice(0,-1).every(isFinite)) return false;
    isbn[9] = isbn[9] === "X"?"10":isbn[9];
    isbn = isbn.map(Number);
    return isbn.reduce((acc,cur,i)=> acc+cur*(i+1),0)%11 === 0
  }