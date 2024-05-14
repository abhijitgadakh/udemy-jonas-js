// --------------------------------
// let js = "amazing";
// if (js == "amazing") alert("Javascript is fun!");
// console.log(40 + 8 + 23 - 10);
// --------------------------------

// --------------------------------
// console.log("Abhijit");
// console.log(23);

// let firstName = "Kunal";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// --------------------------------

// --------------------------------
/*
let jonas_matilda = "JM";

let $function = 27;

let person = "Abhijit";
let PI = 3.14;

let myFirstJob = "Digital Marketing";
let myCurrentJob = "Programmer";

let job1 = "Digital Marketing";
let job2 = "Programmer";

console.log(myFirstJob);

let JavascriptIsFun = true;
console.log(JavascriptIsFun);
console.log(typeof JavascriptIsFun);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof 99.999);

JavascriptIsFun = "Yes!"; //Dynamic typing
console.log(typeof JavascriptIsFun);
*/

// --------------------------------

// --------------------------------
/*
let age = 30;
age = 31; //let is mutable so reassignment is possible

const birthYear = 1996;
// birthYear = 1999; const is immutable so reassignment is not possible

var job = "Programmer";
job = "Senior Programmer";

*/
// --------------------------------

// --------------------------------
/*
//Mathematical operator

const birthYear = 2037;

const ageAbhijit = birthYear - 1996;
const ageArya = birthYear - 2018;

console.log(ageAbhijit, ageArya);
console.log(ageAbhijit * 2, ageArya / 10);

const firstName = "Abhijit";
const lastName = "Gadakh";

console.log(firstName, " ", lastName);

//Assignment operator

let x = 10 + 5;
console.log(x);

x += 10;
console.log(x);

console.log(ageAbhijit > ageArya);
console.log(18 <= ageArya);
*/
// --------------------------------

// --------------------------------
/*
const birthYear = 2037;

const ageAbhijit = birthYear - 1996;
const ageArya = birthYear - 2018;
*/
// Coding Challenge #1
/*
let markMass = 78;
let markHeight = 1.69;
let markBMI = markMass / markHeight ** 2;
let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log("for first test data: " + markHigherBMI);

markMass = 95;
markHeight = 1.88;
markBMI = markMass / markHeight ** 2;
johnMass = 85;
johnHeight = 1.76;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log("for second test data: " + markHigherBMI);
*/
// Coding Challenge #1

// --------------------------------
/*
const firstName = "Abhijit";
const job = "programmer";
const birthYear = 1996;
const year = 2037;

const abhijit =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + ".";
console.log(abhijit);

const abhijitNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(abhijitNew);*/

// --------------------------------
/*
const age = 19;

const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start drive 🚗");
} else {
  console.log(`Sarah is too young. Wait another ${18 - age} years :)`);
}

*/

// --------------------------------
/*
const inputYear = "1991";
console.log(inputYear + 18); //199118
console.log(Number(inputYear) + 18); //2009

console.log(Number("Jonas") + 18); //NaN
console.log(typeof NaN); // Number

console.log("I'm " + 23 + " years old."); // convert to string
console.log("23" - "10" - 3); //  convert to Number

let n = 1 + "1";
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5"); //95
console.log("10" - "4" - "3" - 2 + 5); //15

*/
// --------------------------------

/*
console.log(Boolean(0));
console.log(Boolean(10));
console.log(Boolean(""));
console.log(Boolean("Abhijit"));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if (money) {
  console.log("don't spend it all");
} else {
  console.log("You should get a job");
}

let height;
if (money) {
  console.log("Yaay, Height is defined");
} else {
  console.log("Height is not defined");
}

*/

// --------------------------------
/*
const age = 19;

if (age === 18) console.log("You just beame an adult");

const favourite = prompt("What is your favourite number?");
console.log(favourite);

if (Number(favourite) === 23) {
  //type conversion
  console.log("23 is an amazing number");
}

*/

// --------------------------------
// --------------------------------
/*
const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is allowed to drive!");
// } else {
//   console.log("someone else should drive.");
// }

const isTired = true;

if (shouldDrive && !isTired) {
  console.log("Sarah is allowed to drive!");
} else {
  console.log("someone else should drive.");
}
*/
// --------------------------------
// --------------------------------

/*

let scoreDolphins1 = 96;
let scoreDolphins2 = 108;
let scoreDolphins3 = 89;
let scoreKoalas1 = 88;
let scoreKoalas2 = 91;
let scoreKoalas3 = 110;

let avgScoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
let avgScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

console.log("avgScoreDolphins: " + avgScoreDolphins);
console.log("avgScoreKoalas: " + avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas) {
  console.log("Winner: Team Dolphins");
} else if (avgScoreDolphins === avgScoreKoalas) {
  console.log("It's a draw");
} else {
  console.log("Winner: Team Dolphins");
}

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
  console.log("Winner: Team Dolphins");
} else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
  console.log("Winner: Team Dolphins");
} else if (
  avgScoreDolphins === avgScoreKoalas &&
  avgScoreKoalas >= 100 &&
  avgScoreDolphins >= 100
) {
  console.log("It's a draw");
} else {
  console.log("Winner: None");
}


*/

//--------------------

/*
const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record Videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;

  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

*/

/*
const age = 23;
age >= 18 ? console.log("DRINK BEER") : console.log("DRINK WATER");
*/

const bill = 275;

tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  } `
);

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
