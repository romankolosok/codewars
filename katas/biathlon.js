//Biathlon individual race time calculator
const individualResult = (ten, num) => {
    if(num < 0 || num > 20) return false;
    ten += num * 600
    let sec = ten / 10;
    let min = Math.floor(sec / 60);
    sec = Math.floor(sec - min * 60);
    let tens = ten - 600 * min - 10 * sec;
    return (min+"").padStart(2,'0') + ":" + (sec+"").padStart(2,'0') + ":" + tens
    console.log(min, sec, tens);
  }