'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  //firstName is declare in parent scope of this function so it is accessble in this function scope.

  function printAge() {
    let output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating new varibale with same name as outer scope variable
      const firstName = 'Abhijit Gadakh';

      // re-assigning outer scope's varible
      output = 'New Output';
      const str = `oh and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);
    // str in child scope so cannot be accessble

    console.log(millenial);
    // even tho millenial is in child scope but it is declared by var and var is function scope. so it is actually part of printAge() function scope

    // add(3, 4);
    // functions are also block scope(while using strict mode) and this function is in child scope so cannot be accessble
    // if you remove strict mode this function willbe accessible
  }

  printAge();
  return age;
}

const firstName = 'Abhijit';
calcAge(1996);

// console.log(age); age in child scope so cannot be accessble
// printAge(); this function is also in child scope so cannot be accessble

*/

/*
console.log(me); // undefined
//console.log(job); // Uncaught ReferenceError: Cannot access 'job' before initialization
//console.log(year); // Uncaught ReferenceError: Cannot access 'year' before initialization

var me = 'Abhijit';
let job = 'Programmer';
const year = 1996;

console.log(addDecl(9, 5)); // get execute
// console.log(addExpr(9, 5)); // Uncaught ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow(9, 5)); // Uncaught TypeError: addArrow is not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('deleted');
}

*/

/*

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/
// ===================================
/*
console.log(this);

const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // Undefined
  // this function gets it's own this keyword but will be undefined
};

const calcAge = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //window
  // this function don't gets it's own this keyword and this will refer to parents this key word. parent is window
};

const jonas = {
  birthYear: 1996,
  calcAge1: function () {
    console.log(2037 - this.birthYear);
    console.log(this); // jonas
    // this function gets it's own this keyword but will refer to jonas or abhijit based on on which object this method gets called
  },
};

const abhijit = {
  birthYear: 2000,
};

jonas.calcAge1();

abhijit.calcAge1 = jonas.calcAge1; //method borrowing
abhijit.calcAge1();
*/
// ========================================

/*
var firstName = 'Matila';

const jonas = {
  firstName: 'Abhijit',
  birthYear: 1996,
  calcAge1: function () {
    console.log(this);
    console.log(2037 - this.birthYear);

    // let self = this;
    // const isMillenial = function () {
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    // };

    const isMillenial = () => {
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`), //Matila
};

// jonas.greet();
// jonas.calcAge1();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(3, 4, 5, 6);

const addArroe = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArroe(3, 4, 5, 6);

*/

// ==================================================

/*
let age = 30;
let oldAge = age;

age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Abhijit',
  age: 31,
};

const friend = me;

friend.age = 27;

console.log(me);
console.log(friend);

let lastName = 'William';
let oldLastName = lastName;
lastName = ' Devis';

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Devis';

console.log('jessica', jessica);
console.log('marriedJessica', marriedJessica);


*/

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = Object.assign({}, jessica);
marriedJessica.lastName = 'Devis';

console.log('jessica', jessica);
console.log('marriedJessica', marriedJessica);
