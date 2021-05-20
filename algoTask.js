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


// SOLUTION TO NUMBER 2

const checkYuGiOh = n => {
  if (isNaN(n)) return `invalid parameter: ${JSON.stringify(n)}`;

  if (typeof n !== 'number' && typeof n !== 'string')
    return `invalid parameter: ${JSON.stringify(n)}`;

  const parsedn = parseInt(n);
  let param = [];
  let arr = [];
  for (let i = 1; i <= parsedn; i++) {
    param.push(i);
  }

  for (let i of param) {
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
      i = 'yu-gi-oh';
      arr.push(i);
    } else if (i % 2 == 0 && i % 5 == 0) {
      i = 'yu-oh';
      arr.push(i);
    } else if (i % 3 == 0 && i % 5 == 0) {
      i = 'gi-oh';
      arr.push(i);
    } else if (i % 2 == 0) {
      i = 'yu';
      arr.push(i);
    } else if (i % 3 == 0) {
      i = 'gi';
      arr.push(i);
    } else if (i % 5 == 0) {
      i = 'oh';
      arr.push(i);
    } else {
      i = i;
      arr.push(i);
    }
  }

  return arr;
};

console.log(checkYuGiOh(10));
console.log(checkYuGiOh('5'));
console.log(checkYuGiOh('fizzbuzz is meh'));
