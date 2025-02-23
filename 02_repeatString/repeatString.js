const repeatString = function(string, repetitions) {
    if(repetitions < 0){
        return 'ERROR';
    }
    let output = "";
    for(i = 0; i < repetitions; i++){
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
