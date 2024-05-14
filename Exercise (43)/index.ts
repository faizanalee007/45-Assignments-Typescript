// // Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// /////////////////////////     PREVIOUS ASSIGNMENT STARTS    /////////////////////////
let magicians:string[]= ['Criss Angel','Dynamo','David Copperfield','Ricky Jay','Shin Lim']

function show_magicians(magician:string[]){

    for (let i=0;i<magician.length;i++){

        console.log(magician[i]);
    }
}

function make_great(magician:string[]){

    let greatMagicians: string[]= [];

    for(let i=0; i<magicians.length; i++){

       greatMagicians.push(`The Great ${magicians[i]}`)
    }
    return greatMagicians;
}

let greatMagicians= make_great(...[magicians] );

console.log(`\nOriginal Magician names:`)
    show_magicians(magicians) 

console.log(`\nGreat Magician names:`)

    show_magicians(greatMagicians) 

