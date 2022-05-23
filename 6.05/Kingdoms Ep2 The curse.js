//Kingdoms Ep2: The curse (simplified)
function translate(speech, vocabulary) {
    let regarr = speech.replace(/[\.,!\?]/g,"").split(" ");
    regarr = regarr.map(x=>x.replace(/\*/g,"."));
    let words = [];
    for(let i = 0; i < regarr.length; i++){
      let reg = new RegExp("^"+regarr[i]+"$","g");
      let j = 0;
      while(j < vocabulary.length && !reg.test(vocabulary[j])){
        j++;
      }
      words.push(vocabulary[j]);
    }
    speech = speech.split(" ").map((x,ind)=>x.replace(/.+/g,el=>/[!,\.\?]/g.test(el)?words[ind]+el.slice(-1):words[ind]))
    return speech.join(" ");
    
  }