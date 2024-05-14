"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...SandwichItems) {
    console.log(`\nHere is the Sandwich of:`);
    SandwichItems.forEach(item => {
        console.log(`-${item}`);
    });
    console.log(`Thank You!\n`);
    return SandwichItems;
}
sandwich('jam', 'Butter'); //1st call with sandwich 2 items
sandwich('Egg', 'Butter', 'mayonnaise'); //2nd call with sandwich 3 items
sandwich('Cheese', 'Tomato', "Turkey", "Lettuce"); //3rd call with sandwich 4 items
