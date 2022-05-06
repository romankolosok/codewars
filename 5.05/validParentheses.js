function validParentheses(str){
    let left = 0, right = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === ")") right++;
        else left++;
        if(right > left) return false;
    }
    return left === right;
}

console.log(validParentheses("((()))"));