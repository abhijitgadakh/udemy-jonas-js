/* PROBLEM STATEMENT

1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?

*/

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [100, 1447, 987, 3950];
const percentages = [];
let i = 0;
while (i < populations.length) {
  percentages[i] = percentageOfWorld1(populations[i]);
  i++;
}

console.log(percentages);
