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

// function to capitalize first letter with a string parameter
function firstLetterCapital(text) {
    // get a character from first letter of the string
    let firstLetter = text.charAt(0);
   
    // slice the rest of the characters
    let remainingLetters = text.slice(1);
    
    // convert the character to upper case
    firstLetter = firstLetter.toUpperCase();
   
    // join both the strings 
    text = firstLetter + remainingLetters;

    // return the updated string
    return text;
}

// function to play a single round of the game with two parameters playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    // convert all characters of playerSelection to lower case
    playerSelection = playerSelection.toLowerCase();

    // declare a variable to store the result. Initially it is an empty string
    let result = '';

    // check the values of the two parameters for the result
    // if playerSelection == computerSelection result is draw
    /* else if (playerSelection == 'rock' AND computerSelection == 'paper') OR (playerSelection == 'paper' AND computerSelection == 'scissor') OR (playerSelection == 'scissor' AND computerSelection == 'rock')
    result is loss + playerSelection + 'loses to ' + computerSelection
    */
    /* else if (playerSelection == 'paper' AND computerSelection == 'rock') OR (playerSelection == 'scissor' AND computerSelection == 'paper') OR (playerSelection == 'rock' AND computerSelection == 'scissor')
    result is win + playerSelection + 'wins against ' + computerSelection
    */
    if (playerSelection === computerSelection) {
        result = 'Draw';
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissor') || (playerSelection === 'scissor' && computerSelection === 'rock')) {
        result = `Loss`;
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper') || (playerSelection === 'rock' && computerSelection === 'scissor')) {
        result = `Win`;
    }

    // return result 
    return result;
}

// main function for playing the game
function game() {
    // declare two variables win and loss and set it initially to 0
    let win = 0, loss = 0;
    // declare another variable for 'for' loop
    let i;
    // start a for loop from 0 to 4
    for (i = 0; i < 5; i++) {
        /* (1) input a weapon from the user and store it in playerSelection
        (2) call the computerPlay function and store the value in computerSelection 
        (3) call the playRound function and pass playerSelection and computerSelection as parameters. Store the return value in result.
        (4) if result == 'Win' 
                (a) increase win counter by 1
                (b) print 'You won this round'
        (5) if result == 'Loss'
                (a) increase loss counter by 1
                (b) print 'You lost this round'
        (6) else print 'This round is a draw'
        */
        let playerSelection = prompt('Enter the name of your weapon');
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        if (result === 'Win') {
            win++;
            console.log('You won this round!');
        } else if (result === 'Draw') {
            loss++;
            console.log('You lost this round!');
        } else {
            console.log('This round was a draw!');
        }
    }
    // if win > loss print 'Congratulations! You won the game!'
    // else if loss > win print 'Sorry, You lost the game!'
    // else print 'You drew with the computer' 
    
    if (win > loss) {
        console.log('Congratulations! You won the game!');
    } else if (loss > win) {
        console.log('Sorry, You lost the game!');
    } else {
        console.log('You drew with the computer');
    }
}
