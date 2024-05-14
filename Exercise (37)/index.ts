// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirt(size='Large', message= 'I love TypeScript') //Giving default values for size and message
{
    console.log(`\nThe size of the shirt is '${size}', and the message is: ${message}.`);
}

make_shirt();  //It will call the function and print the default values.

// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

make_shirt('Medium') //updating only size arrguments value and the message will be default.

make_shirt('Small', 'Typscript is Love  <3') //updating both size and message.