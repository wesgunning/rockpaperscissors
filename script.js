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
    if (compScore > 4 || userScore > 4) {
        userScore = 0;
        compScore = 0;
        score.innerHTML = "Player: " + userScore + "<br>Computer: " + compScore;
    }
    results.innerHTML = ("Player chooses: " + playerSelection + "!<br>");
    results.innerHTML += ("Computer chooses: " + computerSelection + "!<br>");
    if (computerSelection == playerSelection) {
        results.innerHTML += ("It's a tie!");
        winner = 'tie';
    }
    else if (computerSelection == 'Rock') {
        if (playerSelection == 'Paper') {
            results.innerHTML += ("You win! Paper beats rock!");
            winner = 'player';
        }
        else {
            results.innerHTML += ("Computer wins! Rock beats scissors!");
            winner = 'computer'
        }
    }
    else if (computerSelection == 'Paper') {
        if (playerSelection == 'Scissors') {
            results.innerHTML += ("You win! Scissors beat paper!");
            winner = 'player';
        }
        else {
            results.innerHTML += ("Computer wins! Paper beats rock!");
            winner = 'computer';
        }
    }
    else {
        if (playerSelection == 'Rock') {
            results.innerHTML += ("You win! Rock beats scissors!");
            winner = 'player';
        }
        else {
            results.innerHTML += ("Computer wins! Scissors beat paper!");
            winner = 'computer';
        }
    }
    if (winner == 'player') {
        userScore += 1;
    }
    else if (winner == 'computer') {
        compScore += 1;
    }
    score.innerHTML = "Player: " + userScore + "<br>Computer: " + compScore;
    if (userScore == '5') {
        score.innerHTML += "<br>You win this round!";
    }
    else if (compScore == '5') {
        score.innerHTML += "<br>Computer wins this round!<br>Choose your selection to begin next round.";
    }
}



