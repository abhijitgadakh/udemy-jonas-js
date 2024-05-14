/* Problem Statement
 Recreate the 'description' variable from the last assignment, this time
using the template literal syntax
*/

const country = "India";
const continent = "Asia";
let populationInMillion = 1417;
let language = "Hindi";

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  populationInMillion +
  " million people speaks " +
  language +
  ".";

const descriptionNew = `${country} is in ${continent}, and its ${populationInMillion} million people speaks ${language}.`;

console.log("description: " + description);
console.log("descriptionNew: " + descriptionNew);
