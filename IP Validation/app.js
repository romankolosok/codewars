'use strict';
// IP Validation

function isValidIP(str) {
    str = str.split('.');
    if (str.length !== 4 || str.some(x => x !== parseInt(x).toString())) return false;
    str = str.map(x => parseInt(x));
    if (str.some(x => x > 255 || x < 0)) return false;
    return true;
}

