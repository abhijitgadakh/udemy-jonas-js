/* PROBLEM STATEMENT

1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is

*/

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [100, 1447, 987, 3950];
const percentages = [];

for (let i = 0; i < populations.length; i++) {
  percentages[i] = percentageOfWorld1(populations[i]);
}

console.log(percentages);
