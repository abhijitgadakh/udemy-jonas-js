/* Problem Statement

1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/
const country = "India";
const continent = "Asia";
let populationInMillion = 1417;
let language = "Hindi";

let populationInHalf = populationInMillion / 2;
console.log("populationInHalf: " + populationInHalf);

populationInMillion++;
console.log("populationInMillion: " + populationInMillion);

const populationFinland = 6;
const populationIsMoreThanFinland = populationInMillion > populationFinland;
console.log("populationIsMoreThanFinland: " + populationIsMoreThanFinland);

const avgPopulation = 33;
const isPopulationLessThanAvg = populationInMillion < avgPopulation;
console.log("isPopulationLessThanAvg: " + isPopulationLessThanAvg);

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  populationInMillion +
  " million people speaks " +
  language +
  ".";

console.log("description: " + description);
