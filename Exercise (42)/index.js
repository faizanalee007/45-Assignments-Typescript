"use strict";
/* Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the
Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */
/////////////////////////     PREVIOUS ASSIGNMENT COPY     ////////////////////////
let magicians = ['Criss Angel', 'Dynamo', 'David Copperfield', 'Ricky Jay', 'Shin Lim'];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
show_magicians(magicians); //calling function with array name
// /////////////////////////////////////////////////////////////////////////////////////
function make_great(Magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`; //adding 'The Great' with every name of 'magicians' array
    }
    console.log(magicians);
}
make_great(magicians);
