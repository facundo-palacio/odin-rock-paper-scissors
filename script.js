
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
 	let humanChoice = prompt("Write your choice: rock, paper or scissors");
 	humanChoice = humanChoice.toLowerCase();
    return humanChoice;
} 


/*Playround has the logic of a single round. I stored the losing cases in variables for readability.
The first if statement handles all the ties. And in all the other cases the user wins.
*/
function playRound(humanChoice,computerChoice) {

    let lose1 = (humanChoice == "paper" && computerChoice == "scissors");    
    let lose2 = (humanChoice == "scissors" && computerChoice == "rock");
    let lose3 = (humanChoice == "rock" && computerChoice == "paper");
    
    if (humanChoice == computerChoice){
    	console.log("It's a tie.");
    } else if (lose1 | lose2 | lose3){  
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
	}else {
	    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
	}
}

playRound(getHumanChoice(),getComputerChoice());
