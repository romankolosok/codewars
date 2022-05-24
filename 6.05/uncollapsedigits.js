//Uncollapse Digits
function uncollapse(digits){
    return digits.match(/one|two|three|four|five|six|seven|eight|nine|zero/g).join(" ");
  }