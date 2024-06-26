/* PROBLEM STATEMENT

1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice

*/

const percentageOfWorld = (population) => (population / 7900) * 100;

function describePopulation(country, population) {
  return `${country} has 1441 million people, which is about ${percentageOfWorld(
    population
  )}% of the world.`;
}

console.log(describePopulation("India", 1444));
console.log(describePopulation("China", 1900));
console.log(describePopulation("Nepal", 123));
