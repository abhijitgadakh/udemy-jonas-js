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
