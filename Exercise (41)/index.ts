// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magician:string[]= ['Criss Angel','Dynamo','David Copperfield','Ricky Jay','Shin Lim']

function show_magicians(magician:string[]){

    for (let i=0;i<magician.length;i++){

        console.log(magician[i]);
    }
}
show_magicians(magician); //calling function with array name


