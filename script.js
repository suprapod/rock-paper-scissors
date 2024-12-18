
playGame(); // launch the game (prompt) right after the lauding of the page.

// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        console.log("and the computer played Rock !");
        return "rock";
    } else if (computerChoice === 1) {
        console.log("and the computer played Paper !");
        return "paper";
    } else { 
        console.log("and the computer played Scissors !");
        return "scissors";
    }
}

// getHumanChoice will return one of the valid choices depending on what the user inputs.


function getHumanChoice() {
    
    let humanChoice = prompt("What's your play ? Choose between Rock, Paper and Scissors").toLowerCase();
    
    if (humanChoice === "rock") {
         console.log("You choosed to play Rock...");
         return humanChoice;
    } else if (humanChoice === "paper") {
          console.log("You choosed to play Paper...");
          return humanChoice;
    }  else if (humanChoice === "scissors") {
         console.log("You choosed to play Scissors...");
         return humanChoice;
    }    else {
            console.log("Incorrect syntax, please write it properly.")
            return getHumanChoice();
        }
    }
 



function playGame () { // calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end

    let computerScore = 0
    let humanScore = 0

    function playRound(humanChoice, computerChoice) { // function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

        if (humanChoice === computerChoice) {
            console.log("It's a tie !") 
        } 
        else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`You won this round ! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else {
            console.log(`You lost this round... ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        } 
    
        console.log(`The actuel score is ${humanScore} for you and ${computerScore} for the computer.`)

         }

      // Play 5 rounds by calling playRound 5 times.
      
    for (let i = 0 ; i < 5 ; i++) {
        const humanChoice = getHumanChoice(); 
        const computerChoice = getComputerChoice(); 
        playRound(humanChoice, computerChoice); 
    }

        if (humanScore > computerScore) {
            console.log("You won the game !");
        } else if (computerScore > humanScore) {
            console.log("You lost the game...");           
        } else { 
            console.log("The game is a tie.")  }
        
        }
            