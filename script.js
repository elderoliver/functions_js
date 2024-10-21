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
