//Convert PascalCase string into snake_case
function toUnderscore(str) {
    return (str+"").replace(/[A-Z]/g, x => "_"+x.toLowerCase()).replace(/^_/g,"");
  }