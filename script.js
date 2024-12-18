// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        console.log("and the computer played Rock !")
        return "rock";
    } else if (computerChoice === 1) {
        console.log("and the computer played Paper !")
        return "paper";
    } else {
        console.log("and the computer played Scissors !")
        return "scissors";
    }
}

// getHumanChoice will return one of the valid choices depending on what the user inputs.

function getHumanChoice() {

    let humanChoice = prompt("What's your play ? Choose between Rock, Paper and Scissors.")

    if (humanChoice === "rock") {
        console.log("You choosed to play Rock...")
        return humanChoice;
    } else if (humanChoice === "paper") {
        console.log("You choosed to play Paper...")
        return humanChoice;
    } else if (humanChoice === "scissors") {
        console.log("You choosed to play Scissors...")
        return humanChoice;
    } else {
        console.log("Incorrect syntax, please write it properly.")
        return getComputerChoice();
    }
}