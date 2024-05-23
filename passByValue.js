const bookings = []

const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers) 
    {
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking)
};
createBooking('LH1665', 2, 3500);
createBooking('LH16633', 5);
createBooking('LH16652', 10);

const flight = 'LH7761'
const sarthik = {
    name: 'sarthik',
    passport: 7654321
}
const checkIn = function(flightNum = 'LH8899', passenger){;
    passenger.name = 'Mr. '+ passenger.name;
    if (passenger.passport === 7654321){
        alert("check In")
    }else{
        alert("Wrong passport")
    }
}
// checkIn(flight, sarthik);
// console.log(flight);
// console.log(sarthik);

const newPassport = function (person){
    person.passport = Math.trunc(Math.random() * 1000000)
}

newPassport(sarthik);
checkIn(flight, sarthik);
console.log(sarthik);