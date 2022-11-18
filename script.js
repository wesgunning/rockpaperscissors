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
// Results div text box
const results = document.querySelector('#results');

// Score div box
let userScore = 0;
let compScore = 0;
const score = document.querySelector('#score');
score.innerHTML = "Player: " + userScore + "<br>Computer: " + compScore;

// Listen for button click
let text;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getPlayerChoice);
})

function game() {
    const playerSelection = text;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
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
    let winner;
    results.innerHTML = ("Player chooses: " + playerSelection + "!<br>");
    results.innerHTML += ("Computer chooses: " + computerSelection + "!<br>");
    if (computerSelection == 'Rock') {
        if (playerSelection == 'Paper') {
            results.innerHTML += ("Player wins!");
            winner = 'player';
        }
        else {
            results.innerHTML += ("Computer wins!");
            winner = 'computer'
        }
    }
    else if (computerSelection == 'Paper') {
        if (playerSelection == 'Scissors') {
            results.innerHTML += ("Player wins!");
            winner = 'player';
        }
        else {
            results.innerHTML += ("Computer wins!");
            winner = 'computer';
        }
    }
    else {
        if (playerSelection == 'Rock') {
            results.innerHTML += ("Player wins!");
            winner = 'player';
        }
        else {
            results.innerHTML += ("Computer wins!");
            winner = 'computer';
        }
    }
    if (winner == 'player') {
        userScore += 1;
    }
    else {
        compScore += 1;
    }
    score.innerHTML = "Player: " + userScore + "<br>Computer: " + compScore;
}



/*if (compScore > userScore) {
    console.log("Computer wins the round!");
}
else {
    console.log("Player wins the round!");
}*/



