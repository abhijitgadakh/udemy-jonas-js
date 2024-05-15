/* PROBLEM STATEMENT

1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'

2. Log to the console whether the array has 4 elements or not (true or false)

3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values

*/

const populations = [100, 1447, 987, 3950];

if (populations.length === 4) {
  console.log("the array has 4 elements? -", populations.length === 4);
} else {
  console.log("the array has 4 elements? -", populations.length === 4);
}

const percentageOfWorld1 = (population) => (population / 7900) * 100;

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(populations);
console.log(percentages);
