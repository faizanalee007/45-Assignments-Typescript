
/* 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests 
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list. */


let guestList: string[]= ['Tuba', 'Huma', 'Bilal'];

let unabletoAttend: string = 'Tuba';

console.log(`\n${unabletoAttend} cannot come to Dinner\n`);

let newGuest: string= 'Mehwish';

guestList[guestList.indexOf(unabletoAttend)]= newGuest;

console.log('\nUpdate Guest List\n');
for(let i =0; i<guestList.length; i++){

console.log(`Hello Dear ${guestList[i]}, You are invited to dinner at my Place`)
}

console.log(`\nHello Guests! We have found a bigger table for Dinner\n`);


// Adding new guest to the beginning of your array.
guestList.unshift('Ahsan');



// Adding new guest to the middle of your array. 
guestList.splice(guestList.length/2, 0, 'Faizan')


// Adding new guest to the end of your list.
guestList.push('Sana');

console.log(`New Updated list of Guest\n`);
// Printing new set for invitation
for(let i=0; i<guestList.length; i++){

    console.log(`Hello Dear ${guestList[i]}, You are invited to Diner at my place.`);
    
}






