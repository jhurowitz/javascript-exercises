const findTheOldest = function(people) {
    let oldest = null;
    let ageOfOldest = 0;
    people.forEach(element => {
        let age = 0;
        if (element.yearOfDeath !== undefined) {
            age = element.yearOfDeath - element.yearOfBirth;
        }        
        else {
            const currentYear = new Date().getFullYear();
            age = currentYear - element.yearOfBirth;
        }

        if (age > 0 && (ageOfOldest === 0 || age > ageOfOldest)) {
            oldest = element;
            ageOfOldest = age;
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
