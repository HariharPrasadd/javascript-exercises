const sumAll = function(startNumber, endNumber) {
    if(startNumber < 0 || endNumber < 0 || Math.floor(startNumber) != startNumber || Math.floor(endNumber) != endNumber || typeof startNumber !== 'number' || typeof endNumber !== 'number'){
        return "ERROR";
    }
    let sum = 0;
    for(let i = (startNumber < endNumber ? startNumber : endNumber); i <= (startNumber > endNumber ? startNumber : endNumber); i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
