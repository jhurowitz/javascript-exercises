const palindromes = function (string) {
    // Filter string to only keep characters in a lowercase form
    let temp = "";
    for (let i = 0; i < string.length; i++) {
        // Regex implementation with claude
        if (/^[A-Za-z0-9]$/.test(string[i])) {
            let char = /^[0-9]$/.test(string[i]) ? string[i] : string[i].toLowerCase();
            temp += char;
        }
    }

    // Reverse the temp string and check for match to original
    // If they match, then the string is a palidrome
    // (Original idea, implementation help aquired for efficiency)
    let reverse = temp.split('').reverse().join('');
    if (reverse === temp) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
