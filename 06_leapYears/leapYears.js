const leapYears = function(input) {
    if(input%100 === 0){
        if(input%400 === 0){
            return true;
        }
        else{
            return false;
        }
    }
    if(input%4 === 0){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;

/*
declare number input. 
if input is divisible by 100
    if input is divisible by 400
        input is a leap year
    else
        input is not a leap year
if input is divisible by 4
    input is a leap year
*/