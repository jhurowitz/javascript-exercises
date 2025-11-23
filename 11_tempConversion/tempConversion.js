const convertToCelsius = function(temperature) {
  let conversion = ((temperature - 32) * (5/9));

  // Bias return type (decimal trail or none based on type)
  // if (Number.isInteger(conversion)) {
  //   // Integer, so return as is
  //   return conversion;
  // }
  // else {
  //   // If float, return fixed with 1 decimal trail
  //   return conversion.toFixed(1);
  // }

  // One line implementation
  return  Number.isInteger(conversion) ? conversion : parseFloat(conversion.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  let conversion = ((temperature * (9/5)) + 32);
  return  Number.isInteger(conversion) ? conversion : parseFloat(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
