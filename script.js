/*// Best of 5 games wins
let compScore = 0;
let userScore = 0;
for (let i = 0; i < 5; i++) {
    console.log("Game",i+1,"of 5");
    game()
    if (winner == 'player') {
        userScore++;
    }
    else {
        compScore++;
    }
    console.log("Score: \nComputer:",compScore,"\nPlayer:",userScore);

}*/

game()

if (compScore > userScore) {
    console.log("Computer wins the round!");
}
else {
    console.log("Player wins the round!");
}
function playRound(playerSelection, computerSelection) {
    console.log("Player chooses: ", playerSelection + "!");
    console.log("Computer chooses: ", computerSelection + "!");
    if (computerSelection == 'Rock') {
        if (playerSelection == 'Paper') {
            console.log("Player wins!");
            winner = 'player';
        }
        else {
            console.log("Computer wins!");
            winner = 'computer'
        }
    }
    else if (computerSelection == 'Paper') {
        if (playerSelection == 'Scissors') {
            console.log("Player wins!");
            winner = 'player';
        }
        else {
            console.log("Computer wins!");
            winner = 'computer';
        }
    }
    else {
        if (playerSelection == 'Rock') {
            console.log("Player wins!");
            winner = 'player';
        }
        else {
            console.log("Computer wins!");
            winner = 'computer';
        }
    }
return;
}
function game() {
let winner;
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
}

// Randomly generate computer choice
function getComputerChoice() {
    let num = Math.floor((Math.random() * 3) + 1);
    if (num == 1) {
        let computerSelection = "Rock";
        return computerSelection;
    }
    else if (num == 2) {
        let computerSelection = "Paper";
        return computerSelection;
    }
    else {
        let computerSelection = "Scissors";
        return computerSelection;
    }
}

// Prompt user for player choice
function getPlayerChoice() {
    let userChoice;
    let num = prompt("Please enter 'Rock', 'Paper', or 'Scissors'.");
    if (num.toUpperCase() == "ROCK") {
        userChoice = "Rock";
    }
    else if (num.toUpperCase() == "PAPER") {
        userChoice = "Paper";
    }
    else if (num.toUpperCase() == "SCISSORS") {
        userChoice = "Scissors";
    }
    else {
        alert("You did not enter a valid choice. Please try again.")
        getPlayerChoice();
    }
return userChoice;
}