/* 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
 have an empty list at the end of your program.  */
/////////////////////////////////// Q.16 Part Starts ////////////////////////////////
var guestList = ['Tuba', 'Huma', 'Bilal'];
var unabletoAttend = 'Tuba';
console.log("\n".concat(unabletoAttend, " cannot come to Dinner\n"));
var newGuest = 'Mehwish';
guestList[guestList.indexOf(unabletoAttend)] = newGuest;
console.log('\nUpdate Guest List\n');
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello Dear ".concat(guestList[i], ", You are invited to dinner at my Place"));
}
console.log("\nHello Guests! We have found a bigger table for Dinner\n");
// Adding new guest to the beginning of your array.
guestList.unshift('Ahsan');
// Adding new guest to the middle of your array. 
guestList.splice(guestList.length / 2, 0, 'Faizan');
// Adding new guest to the end of your list.
guestList.push('Sana');
console.log("New Updated list of Guest\n");
// Printing new set for invitation
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello Dear ".concat(guestList[i], ", You are invited to Diner at my place."));
}
//////////////////////////////////Q.17 starts From here/////////////////////////////////
// printing a message saying that you can invite only two people for dinner.
console.log("Hello Gests!, New Table is not arrived, so we only can invite two people for Dinner");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Hello ".concat(removedGuest, ", Sorry i can't invite you to Dinner."));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ", You are still invited to Dinner at my Place."));
}
// Removing the last two names from our Guest List list
guestList.pop();
guestList.pop();
//Prining the List to show that its Empty now
console.log("\nOur Guest List is Fully Empty Now.");
console.log(guestList);
