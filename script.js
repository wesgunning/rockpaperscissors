function playRound(playerSelection, computerSelection) {

}

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

/*function playerSelection() {
    let num = prompt("Please enter 'Rock', 'Paper', or 'Scissors'.");
    if (num.toUpperCase() == "ROCK") {
        let userChoice = "Rock";
        return userChoice;
    }
    else if (num.toUpperCase() == "PAPER") {
        let userChoice = "Paper";
        return userChoice;
    }
    else if (num.toUpperCase() == "SCISSORS") {
        let userChoice = "Scissors";
        return userChoice;
    }
    else {
        alert("You did not enter a valid choice. Please try again.")
        playerSelection();
    }*/
}
