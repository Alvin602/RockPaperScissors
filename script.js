let playerScore = 0;
let computerScore = 0;
let computerChoice = computerPlay();

//  Write initial zero score on score table
document.getElementById("playerscore").innerText = playerScore;
document.getElementById("computerscore").innerText = computerScore;

function runGame() {
    let btnChoice = document.getElementsByTagName("button");
    let btnCount = btnChoice.length;
    for (let btnNum = 0; btnNum <= btnCount; btnNum += 1) {
        btnChoice[btnNum].onclick = () => {
            if (btnChoice[btnNum].innerText == "Rock") {

                // Series of checks if Player chooses Rock
                if (computerChoice == "Paper") {
                    computerWins("Rock","Paper");
                } else if (computerChoice == "Scissors") {
                    playerWins("Rock","Scissors");
                } else {
                    playersTie("Rock");
                }

            // Series of checks if player chooses Paper
            } else if (btnChoice[btnNum].innerText == "Paper") {
                if (computerChoice == "Scissors") {
                    computerWins("Paper","Scissors");
                } else if (computerChoice == "Rock") {
                    playerWins("Paper","Rock");
                } else {
                    playersTie("Paper");
                }

            // Series of checks if player chooses Scissors
            } else {
                if (computerChoice == "Rock") {
                    computerWins("Scissors","Rock");
                } else if (computerChoice == "Paper") {
                    playerWins("Scissors","Paper");
                } else {
                    playersTie("Scissors");
                }
            };
        };
    };
};

function computerPlay() {
    let regNum = Math.floor(Math.random() * 3);
    if (regNum === 0) {
        return "Rock";
    } else if (regNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    };
};

function playerWins(pChoice,cChoice) {
    playerScore += 1;  // Increment player score
    alert("PLAYER WINS - Player chose " + pChoice + ", Computer chose " + cChoice);
    document.getElementById("playerscore").innerText = playerScore; // Write new playerScore in table
    computerChoice = computerPlay();  // Make computer pick again
}

function computerWins(pChoice,cChoice) {
    computerScore += 1; // Increment computer score
    alert("COMPUTER WINS - Player chose " + pChoice + ", Computer chose " + cChoice);
    document.getElementById("computerscore").innerText = computerScore; // Write new computerScore in table
    computerChoice = computerPlay(); // Make computer pick again
}

function playersTie(tChoice) {
    alert("TIE - Both Player and Computer chose " + tChoice);
    document.getElementById("computerscore").innerText = computerScore;
    computerChoice = computerPlay(); // Make computer pick again
}


runGame();
