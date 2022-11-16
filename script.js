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

// Listen for button click
let text;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getPlayerChoice);
})

function game() {
    let winner;
    const playerSelection = text;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    }
    
// Player choice
function getPlayerChoice(e) {
    text = (this.id[0].toUpperCase() + this.id.slice(1));
    game();
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

/*if (compScore > userScore) {
    console.log("Computer wins the round!");
}
else {
    console.log("Player wins the round!");
}*/



