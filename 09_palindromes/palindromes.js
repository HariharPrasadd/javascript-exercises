const palindromes = function (input) {
    input = input.toLowerCase();
    let inputArray = input.split('');
    let inputChar = inputArray.filter(isLetterOrNumber);
    let original = inputChar.join('');
    let reverseChar = inputChar.reverse();
    if(original === reverseChar.join('')){
        return true;
    }
    else{
        return false;
    }
};

function isLetterOrNumber(c) {
    if(c.toLowerCase() != c.toUpperCase() || (c >= '0' && c <= '9')){
        return true;
    }
    else{
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
