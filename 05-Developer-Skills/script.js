// Remember, we're gonna use strict mode in all scripts now!

'use strict';

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degree celsius:'),
  };

  return Number(measurement.value) + 273;
};

console.log(measureKelvin());
console.warn(measurement);
console.error(measurement);
console.table(measurement);

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
console.log(amplitudeBug);

*/

function printForecast(arr) {
  let str = '... ';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ...`;
  }

  console.log(str);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
