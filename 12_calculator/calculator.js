const add = function(x, y) {
  return x + y;
	
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbers) {
  let total = 0;
  numbers.forEach(x => total += x);
  return total;
};

const multiply = function(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let total = 1;
  for (let i = 0; i < numbers.length; i++) {
    total *= numbers[i];
  }

  return total;
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(number) {
	if (number === 0 || number === 1) {
    return 1;
  }
  else {
    // Help of claude by unintention
    let result = 1;
    for (let i = number; i > 1; i--) {
      result *= i;
    }

    return result;
  }

  // Also, from claude, the one-line implementation
  // return number <= 1 ? 1 ? number : number * factorial(number - 1); 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
