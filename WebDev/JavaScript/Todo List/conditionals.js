/*console.log("Hello from out First JS Script from script");

let total = 1 + 3;

console.log("Goodbye")
*/

/*
let random = Math.random();

if (random < 0.5) {
    console.log("No. less than 0.5")
    console.log(random);
}


// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if (num <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}



const mystery = 'Price'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}*/

// Print out "Da ba dee da ba daa" 6 times, using a for loop
for (let i = 1; i <= 6; i++) {
    console.log("Da ba dee da ba daa");
}


// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0
for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let row of numbers) {
    console.log(Math.pow(row, 2));
}