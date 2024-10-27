'use strict';

const bookingList = [];

//Default parameter
const createBooking = function (flightNumber, numPassegers = 1, price = 199) {
  const booking = {
    flightNumber,
    numPassegers,
    price,
  };

  console.log(booking);

  bookingList.push(booking);
};

createBooking('LH123');

// callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upFirstWord = function (str) {
  const [firstWord, ...restOfTheString] = str.split(' ');
  return [firstWord.toUpperCase(), ...restOfTheString].join(' ');
};

const exampleHighOrderFunction = function (str, fn) {
  console.log(fn(str));
  console.log(`Name of the function ${fn.name}`);
};

exampleHighOrderFunction('Elder Oliveira Castro', upFirstWord);
exampleHighOrderFunction('Elder Oliveira Castro', oneWord);

//Example of callback function
/*document.body.addEventListener('click', () => {
  console.log('Click on the body...');
});*/

const clickOnTheBody = function () {
  console.log('Click on the body...');
};

document.body.addEventListener('click', clickOnTheBody);
