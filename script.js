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