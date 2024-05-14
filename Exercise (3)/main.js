"use strict";
let personName = "Faizan";
//For Lower Case
console.log("Lowercase:  ", personName.toLowerCase());
//For Upper Case
console.log("Uppercase:  ", personName.toUpperCase());
//For Title Case
console.log("Titlecase:  ", personName.replace(/\b\w/g, (char) => char.toUpperCase()));
