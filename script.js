
/*
This function uses (pseudo) random numbers transformed to integers 
between 0 to 2 in order to get from the array the choice stored in 
those index numbers.
It doesn't have an input parameter and returns a string.
*/

function getComputerChoice() {

const choices = ["rock","paper","scissors"];

let value = Math.random() * 3;

return choices[Math.floor(value)];
}

console.log(getComputerChoice());
