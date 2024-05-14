"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
let worldPlaces = ['Turkey', 'China', 'America', 'German', 'Bali',];
console.log("Original Order: ", worldPlaces);
// • Print your array in alphabetical order without modifying the actual list.
console.log(`\nAlphabetical order:  \n${[...worldPlaces].sort()}`);
// • Show that your array is still in its original order by printing it.
console.log("\nOriginal Order: ", worldPlaces);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`\nReverse Alphabetical Order:  \n${[...worldPlaces].sort().reverse()}`);
// • Show that your array is still in its original order by printing it again.
console.log("\nOriginal Order: ", worldPlaces);
// • Reverse the order of your list. Print the array to show that its order has changed.
worldPlaces.reverse();
console.log("\nReversed Order List: ", worldPlaces);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
worldPlaces.reverse();
console.log("\nReversed again (Back to Original Order): ", worldPlaces);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
worldPlaces.sort();
console.log("\nArray stored in Alphabatical Order: ", worldPlaces);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
worldPlaces.reverse();
console.log("\nArray stored in Reverse Alphabatical Order: ", worldPlaces);
