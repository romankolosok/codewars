function solution(input, markers) {
    input = input.split("\n");
    //markers.some(a => x.includes(a))
    //input = input.map((x,i,arr) =>  markers.findIndex((el,ind,ar) => markers.filter(cur => arr[ind].includes(cur))));
    //markers = markers.findIndex((el,ind,ar) => ar.filter(cur => arr[ind].includes(cur));
    for(let i = 0; i < input.length; i++){
        console.log(markers.findIndex( x => markers.filter(a => input[i].includes(a)))[0]);
    }
    //console.log(input,markers);
  };

  console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));