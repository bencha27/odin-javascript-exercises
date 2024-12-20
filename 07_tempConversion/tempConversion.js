const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * 5/9;
  if (!Number.isInteger(celsius)) {
    return Number(celsius.toFixed(1));
  } else return celsius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = temp * 9/5 + 32;
  if (!Number.isInteger(fahrenheit)) {
    return Number(fahrenheit.toFixed(1));
  } else return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
