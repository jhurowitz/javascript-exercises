const leapYears = function(year) {
    if (year % 400 === 0) {
        // Divisible by 400 is always a leap year
        return true;
    }
    else {
        // Divisible not by 400, but by 4 is a leap year under conditions
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                // Not divisible by 400, but 4 and 100 is not a leap year
                return false;
            }
            else {
                // Not divisible by 400 or 100, and only 4 is a leap year
                return true;
            }
        } else {
            // Not divisible by 400, 100, or 4 is not a leap year
            return false;
        }
    }
};

// Do not edit below this line
module.exports = leapYears;
