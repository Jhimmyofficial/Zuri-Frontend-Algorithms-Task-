'use strict';

const convertFahrToCelsius = parameter => {
  if (typeof parameter === 'number' || typeof parameter === 'string') {
    return (+parameter - 32) * (5 / 9).toFixed(4);
  } else if (typeof parameter === 'object') {
    const isAnArray = Array.isArray(parameter);

    if (isAnArray) {
      return `${JSON.stringify(
        parameter
      )} is not a valid number but a/an array`;
    }

    return `${JSON.stringify(parameter)} is not a valid number but a/an object`;
  }

  return `${JSON.stringify(
    parameter
  )} is not a valid number but a/an ${typeof parameter}`;
};

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));
