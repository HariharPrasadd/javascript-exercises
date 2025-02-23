const convertToCelsius = function(fahrenheitInput) {
  return Number.parseFloat(((fahrenheitInput - 32)*(5/9)).toFixed(1));
};

const convertToFahrenheit = function(celsiusInput) {
  return Number.parseFloat((celsiusInput*(9/5)+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
