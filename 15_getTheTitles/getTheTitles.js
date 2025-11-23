const getTheTitles = function(information) {
    let titles = [];
    information.forEach(element => {
        titles.push(element.title);
    });

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
