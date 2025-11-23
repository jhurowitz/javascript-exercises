const sumAll = function(x, y) {
    if (Number.isInteger(x) && Number.isInteger(y) && x >= 0 && y >= 0) {
        let start = x < y ? x : y;
        let end = start === x ? y : x;
        
        return (((end - start + 1) * (start + end)) / 2);
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
