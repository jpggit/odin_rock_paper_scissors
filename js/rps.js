// Declare constant values for reference (optional but can help if you use them later)
const c_rock = 0;
const c_paper = 1;
const c_scissors = 2;

// Function that returns a random number from 0 to 2
function randomNumber() {
    return Math.floor(Math.random() * 3);
}

// Function that returns "rock", "paper", or "scissors"
function getComputerChoice(){
    const choice = randomNumber();
    if (choice === c_rock) {
        return "rock";
    } else if (choice === c_paper) {
        return "paper";
    } else if (choice === c_scissors) {
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

// Function that tracks scores
function playGame() {
let humanScore = 0;
let computerScore = 0;
}