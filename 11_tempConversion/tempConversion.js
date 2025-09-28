
const convertToCelsius = function(fahrenheit) {
  let convertToC = ((fahrenheit - 32)*(5 / 9));
  return Math.round(convertToC * 10) / 10


};

const convertToFahrenheit = function(celsius) {
  let convertToF = (celsius * (9 / 5)) + 32;
  return Math.round(convertToF * 10) / 10


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
