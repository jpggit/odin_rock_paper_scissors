
// Function that returns a random number from 0 to 2
function randomNumber() {
    return Math.floor(Math.random() * 3);
}

// Function that returns "rock", "paper", or "scissors"
function getComputerChoice(){
    const choice = randomNumber();
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    }
}

// Function that returns human choice
function getHumanChoice(){
    const input=prompt("What is your selection?", "rock, paper, or scissors?: ");
    const choice = input.toLowerCase();

    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (input === "scissors") {
        return "scissors";
    }
}


//Loop to play game
function playGame() {
    //Declare scores
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i<=5; i++) {
        console.log(`Round ${i}:`);

        const human = getHumanChoice();
        const computer = getComputerChoice();
        
        // Display the selections
        console.log(`you chose: ${human}`);
        console.log(`the computer chose: ${computer}`);

        //Outcome calculation
        if (human === computer) {
            console.log("It's a tie!");
        } else if (
            (human === "rock" && computer === "scissors") ||
            (human === "paper" && computer === "rock") ||
            (human === "scissors" && computer === "paper")
        ) {
            console.log (`You win this round`);
            humanScore++;
        } else {
            console.log (`Computer won this round`);
            computerScore++;
        }
        //report score of round
        console.log(`Scores => You: ${humanScore} | Computer: ${computerScore}`);
        console.log('----------');
    }

    console.log ("Final results:");
    if (humanScore>computerScore) {
        console.log(`You won the game ${humanScore} to ${computerScore}`);
    } else if (computerScore>humanScore) {
        console.log(`Computer wins ${computerScore} to ${humanScore}`);
    } else {
        console.log("It's a tie");
    }
}
