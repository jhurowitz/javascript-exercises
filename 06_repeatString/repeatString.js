const repeatString = function(string, number) {
    if (number < 0) {
        return 'ERROR';
    }
    
    let repeatedString = "";
    
    for (let repeats = 0; repeats < number; repeats++) {
        repeatedString += string;
    }    

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
