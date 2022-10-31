function rockPaperScissors(playerSelection, computerSelection)) {

}

function getComputerChoice() {
    let num = Math.floor((Math.random() * 3) + 1);
    if (num == 1) {
        let compChoice = "Rock";
        return compChoice;
    }
    else if (num == 2) {
        let compChoice = "Paper";
        return compChoice;
    }
    else {
        let compChoice = "Scissors";
        return compChoice;
    }
} 

function playerSelection() {
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
    }
}
