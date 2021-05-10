// Initializing user score and computer score
let userScore = 0;
let computerScore = 0;

// selecting each button
const buttons = document.querySelectorAll('button');

const comments = document.querySelector('.comments');

const userScoreText = document.querySelector('.user-score');

const computerScoreText = document.querySelector('.computer-score');

// function for playing on computer's part
function computerPlay() {
    // Selecting a random number from 0 - 2 for selecting a weapon
    let randomNumber = Math.floor(Math.random() * 3);

    //depending on random number selecting a weapon
    /* 0 - rock
       1 - paper
       2 - scissor
    */
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissor';
    }
}

// Updating the scores
function updateScores(result) {
    if (result === 'win') {
        userScore++;
        userScoreText.textContent = 'Player: ' + userScore;
    } else if (result === 'loss') {
        computerScore++;
        computerScoreText.textContent = 'Computer: ' + computerScore;
    }
}

//change comment
function changeComment(result, playerSelection, computerSelection) {
    if (result === 'win') {
        comments.textContent = 'You won this round! ' + playerSelection + ' beats ' + computerSelection;
    } else if (result === 'loss') {
        comments.textContent = 'You lost this round! ' + computerSelection + ' beats ' + playerSelection;
    } else {
        comments.textContent = 'This round was a draw';
    }
}

// function to play a round 
function playRound(e) {
    // getting player selection from the class name of event
    const playerSelection = e.target.className;

    // getting computer selection
    const computerSelection = computerPlay();
    
    // check the values of the two parameters for the result
    /* else if (playerSelection == 'rock' AND computerSelection == 'paper') OR (playerSelection == 'paper' AND computerSelection == 'scissor') OR (playerSelection == 'scissor' AND computerSelection == 'rock')
    change comment and update scores for loss
    */
    /* else if (playerSelection == 'paper' AND computerSelection == 'rock') OR (playerSelection == 'scissor' AND computerSelection == 'paper') OR (playerSelection == 'rock' AND computerSelection == 'scissor')
    change comment and update scores for win
    */
    // else change comment for draw
    if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissor') || (playerSelection === 'scissor' && computerSelection === 'rock')) {
        changeComment('loss', playerSelection, computerSelection);
        updateScores('loss');
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper') || (playerSelection === 'rock' && computerSelection === 'scissor')) {
        changeComment('win', playerSelection, computerSelection);
        updateScores('win');
    } else {
        changeComment('draw', playerSelection, computerSelection)
    }
}

// game over after one of the players gets a score of 5
function gameOver() {
    if (userScore > computerScore) {
        comments.textContent = 'Congratulations! You have won the game. Press any button to refresh'
    } else if (computerScore > userScore) {
        comments.textContent = 'Sorry! You have lost the game. Press any button to refresh'
    }
    
    window.addEventListener('keydown', () => window.location.reload());
}

// attaching event listener for each button
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (userScore < 5 && computerScore < 5) {
            playRound(e)
        } else {
            gameOver();
        }
    });
});


