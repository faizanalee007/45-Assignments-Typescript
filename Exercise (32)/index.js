"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ['Faizan', 'naeem', 'Bilal', 'Hamza', 'Junaid'];
let new_users = ['faizan', 'Umaid', 'Abrar', 'hamza', 'Rizwan'];
for (let i = 0; i < current_users.length; i++) {
    if (current_users[i].toLowerCase() === new_users[i].toLowerCase()) { /*Converting the both arrys names into lowercase and
                                                                                checking if the name is already exist or not*/
        console.log(`\n${new_users[i]} will need to enter a new username!`);
    }
    else {
        console.log(`\n${new_users[i]} is Available.`);
    }
}
