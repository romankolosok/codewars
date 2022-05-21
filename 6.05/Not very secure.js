//Not very secure
function alphanumeric(string){
    return string.length > 0 && !(/\s|\W|\_/g.test(string))
  }