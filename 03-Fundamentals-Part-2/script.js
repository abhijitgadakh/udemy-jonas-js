"use strict";

/*
// ----------STRICT MODE ----------
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");
*/

// ---------- function ----------

/*
function logger() {
  console.log("My name is Abhijit");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
const appleOrangeJuice = fruitProcessor(2, 5);

console.log(appleJuice);
console.log(appleOrangeJuice);
*/ //================================

/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const calcAge3 = (birthYear) => 2037 - birthYear;

const age1 = calcAge1(1996);
const age2 = calcAge2(1996);
const age3 = calcAge3(1996);

const yearsToRetirement = (birthYear, firstName) => {
  let age = 2037 - birthYear;
  return `${firstName} retires in ${65 - age}`;
};

const years = yearsToRetirement(1996, "Abhijit");
console.log(years);
*/

//==============Function calling function==================
/*
const cutFruitPieces = (fruit) => fruit * 4;

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
// ================================

/*
const calcAge1 = function (birthYear) {
  return 2037 - birthYear;
};

const yearsToRetirement = function (birthYear, firstName) {
  let age = calcAge1(birthYear);

  return 65 - age > 0 ? 65 - age : -1;
};

console.log(yearsToRetirement(1991, "Abhijit"));
console.log(yearsToRetirement(1970, "Kunanl"));

*/
// ---------- Introduction to Arrays ----------
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
const years = new Array(1996, 2020, 1984, 2008);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Kunal";

const firstName = "Abhijit";

const abhijit = [firstName, "Gadakh", 2037 - 1996, "Programmer", friends];
console.log(abhijit);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[2]));
console.log(calcAge(years[years.length - 1]));

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];

console.log(ages);

*/

/*
// ----- Array Methods ----

const friends = ["Michael", "Steven", "Peter"];
friends.push("Kunal");
friends.unshift("John");
friends.pop();
friends.shift();

friends.indexOf("Steven");
friends.includes("Steven");


*/
// =============================================================

/*
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [];

total.push(tips[0] + bills[0]);
total.push(tips[1] + bills[1]);
total.push(tips[2] + bills[2]);

console.log(bills, tips, total);
*/
// =============================================================
/*
const abhijitArray = [
  "Abhijit",
  "Gadakh",
  "27",
  "Programmer",
  ["Kunal", "Rishikesh", "Anil"],
];

const abhijit = {
  firstName: "Abhijit",
  lastName: "Gadakh",
  age: 2024 - 1996,
  job: "Programmer",
  friends: ["Kunal", "Rishikesh", "Anil"],
};

console.log(abhijit.friends);
console.log(abhijit["friends"]);

let userReply = "last";
console.log(abhijit[userReply + "Name"]);

const interestedIn = prompt(
  "Enter what you want to know about Abhijit - firstName, lastName, age, job or Friends"
);

if (abhijit[interestedIn]) console.log(abhijit[interestedIn]);
else {
  alert("Wrong Request!!");
}

abhijit.location = "Pune";
abhijit["twitter"] = "@abhijitgadakh1";
console.log(abhijit);

//in-lecture challenge
console.log(
  `${abhijit.firstName} has ${abhijit.friends.length} friends and his best friend is ${abhijit.friends[0]}.`
);
*/

/*
const abhijit = {
  firstName: "Abhijit",
  lastName: "Gadakh",
  birthYear: 1996,
  job: "Programmer",
  friends: ["Kunal", "Rishikesh", "Anil"],

  calcAge: function () {
    if (!this.age) this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummery: function () {
    return `${abhijit.firstName} is ${abhijit.calcAge()}-year old ${
      abhijit.job
    }, and he ${this.age > 18 ? "has" : "don't have"} a driver's license.`;
  },
};

console.log(abhijit.getSummery());

const mark = {
  name: "Mark",
  mass: 78,
  height: 1.69,
  CalcBMI: function () {
    if (!this.bmi) {
      this.bmi = this.mass / this.height ** 2;
    }
    return this.bmi;
  },
};

const john = {
  name: "John",
  mass: 92,
  height: 1.95,
  CalcBMI: function () {
    if (!this.bmi) {
      this.bmi = this.mass / this.height ** 2;
    }
    return this.bmi;
  },
};

mark.CalcBMI();
john.CalcBMI();

if (mark.bmi > john.bmi) {
  console.log(`Marks's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
} else if (mark.bmi < john.bmi) {
  console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`);
}

*/

// =========================LOOPS==========================

/*

// console.log("Lifting weights repetition 1 💪");
// console.log("Lifting weights repetition 2 💪");
// console.log("Lifting weights repetition 3 💪");
// console.log("Lifting weights repetition 4 💪");
// console.log("Lifting weights repetition 5 💪");
// console.log("Lifting weights repetition 6 💪");
// console.log("Lifting weights repetition 7 💪");
// console.log("Lifting weights repetition 8 💪");
// console.log("Lifting weights repetition 9 💪");
// console.log("Lifting weights repetition 10 💪");


for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 💪`);
}

*/

// -------------------------

/*
const abhijit = [
  "firstName",
  "Gadakh",
  2037 - 1996,
  "Programmer",
  ["Michael", "Steven", "Peter"],
];

const typeOfAbhijit = [];

for (let i = 0; i < abhijit.length; i++) {
  console.log(typeof abhijit[i], abhijit[i]);
  // typeOfAbhijit[i] = typeof abhijit[i];
  typeOfAbhijit.push(typeof abhijit[i]);
}

console.log(typeOfAbhijit);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

for (let i = 0; i < abhijit.length; i++) {
  if (typeof abhijit[i] === "string") continue;
  console.log(abhijit[i], typeof abhijit[i]);
}

for (let i = 0; i < abhijit.length; i++) {
  if (typeof abhijit[i] === "number") break;
  console.log(abhijit[i], typeof abhijit[i]);
}

for (let i = abhijit.length - 1; i <= 0; i--) {
  console.log(i, abhijit[i], typeof abhijit[i]);
}

*/
/*
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log("------------Strating Exercise No: " + exercise);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 💪`);
  }
}

*/

// -------------- WHILE LOOP ---------------------------
/*
let rep = 1;
while (rep < 6) {
  console.log(`Lifting weights repetition ${rep} 💪`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice} 💪`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

*/
