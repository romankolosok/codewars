//
function mostMoney(students) {
    const obj = {}
    students.forEach(cur=> obj[cur.name] = 5*cur.fives + 10*cur.tens + 20*cur.twenties)
    const key = Object.keys(obj)
    const val = Object.values(obj)
    if(key.length === 1) return key[0]
    if(val.filter((x,i,arr)=>arr.indexOf(x) === i).length === 1) return "all"
    return key[val.indexOf(Math.max(...val))]
  }