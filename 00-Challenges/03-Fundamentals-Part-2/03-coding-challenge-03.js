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
