
const rbtn = document.querySelector("#rockbtn");
const pbtn = document.querySelector("#paperbtn");
const sbtn = document.querySelector("#scissorsbtn");
const showRoundWinner = document.querySelector("#roundWinner");
const showCurrentScore = document.querySelector("#currentScore");
const showGameWinner = document.querySelector("#gameWinner");
let gameWinner = ""
let computerScore = 0
let humanScore = 0


rbtn.addEventListener("click", () => {
    humanChoice = "Rock";
    playRound(humanChoice, getComputerChoice());
});

pbtn.addEventListener("click", () => {
    humanChoice = "Paper";
    playRound(humanChoice, getComputerChoice());
});

sbtn.addEventListener("click", () => {
    humanChoice = "Scissors";
    playRound(humanChoice, getComputerChoice());
});



// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        console.log("and the computer played Rock !");
        return "Rock";
    } else if (computerChoice === 1) {
        console.log("and the computer played Paper !");
        return "Paper";
    } else { 
        console.log("and the computer played Scissors !");
        return "Scissors";
    }
}

// getHumanChoice will return one of the valid choices depending on what the user inputs.


function getHumanChoice() {
        
    if (humanChoice === "Rock") {
         console.log("You choosed to play Rock...");
         return humanChoice;
    } else if (humanChoice === "Paper") {
          console.log("You choosed to play Paper...");
          return humanChoice;
    }  else if (humanChoice === "Scissors") {
         console.log("You choosed to play Scissors...");
         return humanChoice;
    }    else {
            console.log("Incorrect syntax, please write it properly.")
            return getHumanChoice();
        }
    }
 

    function playRound(humanChoice, computerChoice) { // function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

        if (humanChoice === computerChoice) {
            roundWinner = "It's a tie !"
        } 
        else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {
            roundWinner = `You won this round ! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        else {
            roundWinner = `You lost this round... ${computerChoice} beats ${humanChoice}`
            computerScore++;
        } 

        showRoundWinner.textContent = roundWinner;   
        showCurrentScore.textContent = `The current score is ${humanScore} for you and ${computerScore} for the computer.`


           if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
             gameWinner = "You won the game !";
        } else if (computerScore > humanScore) {
             gameWinner = "You lost the game...";           
        } else { 
             gameWinner = "The game is a tie.";  }
             resetGame()

            }
            
            showGameWinner.textContent = gameWinner
        
        }