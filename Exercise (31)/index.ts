/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */


let userNames: string[]= [];    /*we Removed all the name from arraty to make sure the correct 
                                message is printed */


if (userNames.length=== 0){
    console.log("\nWe need to find some users!");
}else{
    for (let i=0; i<userNames.length; i++){

        // Conditioning Statement for Admin Message
        if (userNames[i]==='Admin'){
            console.log(`\nHello ${userNames[i]}, would you like to see a status report?`)
        }
        //Consitioning Statement for users Message
        else{
            console.log(`\nHello ${userNames[i]}, thank you for logging in again.`)
        }
    }
}