
let humanScore = 0;
let computerScore = 0;


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

/*This function allows the user to choose between rock, paper and scissors
and returns its choice. I made the decision of (pseudo) randomly choose
one option for it if the input is invalid. And restricted its options to 
numbers. This will be reviewed and reformatted later.*/

function getHumanChoice() {
    let wrongInput = true;

    const choice = ["rock", "paper", "scissors"];
    
 	let humanChoice = prompt("Choose a number: 1 - rock, 2 - paper, 3 - scissors");
 	if (humanChoice == 1 | humanChoice == 2 | humanChoice == 3){
        return choice[humanChoice-1];

    }else {
    	return choice[Math.floor(Math.random() * 3)]
    }
} 

console.log(getHumanChoice());

