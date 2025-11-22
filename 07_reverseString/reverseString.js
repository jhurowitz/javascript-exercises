const reverseString = function(string) {
    if (string.length === 0) {
        return string;
    }

    let tempString = "";
    for (let i = string.length - 1; i  >= 0; i--) {
        tempString += string[i];
    }

    return tempString;
};

// Do not edit below this line
module.exports = reverseString;
