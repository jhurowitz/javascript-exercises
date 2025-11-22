// Allow for items to be removed to be any number and type of argument for the parameter
const removeFromArray = function(array, ...toRemove) {
    const filteredArray = array.filter((x) => !toRemove.includes(x));
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
