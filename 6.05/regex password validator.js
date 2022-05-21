//Regex Password Validation
function validate(password) {
    if(password.length < 6 || /\W/g.test(password)) return false;
    return /[a-z]/g.test(password) && /[A-Z]/g.test(password) && /\d/g.test(password)
  }