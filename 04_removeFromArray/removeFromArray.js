const removeFromArray = function(input) {
    for(let i = 1; i < arguments.length; i++){
        for(let j = 0; j < input.length; j++){
            if(arguments[i] === input[j]){
                input.splice(j, 1);
                j--;
            }
        }
    }
    return input;
};
// Do not edit below this line
module.exports = removeFromArray;
