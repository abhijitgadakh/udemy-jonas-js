let markMass = 78;
let markHeight = 1.69;
let markBMI = markMass / markHeight ** 2;
let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
// console.log("for first test data: " + markHigherBMI);

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
