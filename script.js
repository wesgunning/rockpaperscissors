
function playRound(playerSelection, computerSelection) {
    console.log("Player chooses: ", playerSelection + "!");
    console.log("Computer chooses: ", computerSelection + "!");
    if (computerSelection == 'Rock') {
        if (playerSelection == 'Paper') {
            console.log("Player wins!");
        }
        else {
            console.log("Computer wins!");
        }
    }
    else if (computerSelection == 'Paper') {
        if (playerSelection == 'Scissors') {
            console.log("Player wins!");
        }
        else {
            console.log("Computer wins!");
        }
    }
    else {
        if (playerSelection == 'Rock') {
            console.log("Player wins!");
        }
        else {
            console.log("Computer wins!");
        }
    }

}
function game() {
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
console.log("User choice:",userChoice);
return userChoice;
}