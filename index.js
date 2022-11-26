let myArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    return randomItem
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) { //gives the scenarios
        return ("Tie!")
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        return ("You lose! Paper beats rock ")
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        playerScore++;
        return ("You win! Paper beats rock ")
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++;
        return ("You lose! Rock beats scissors")
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        playerScore++;
        return ("You win! Rock beats scissors ")
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        playerScore++;
        return ("You win! Scissors beats Paper")
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        return ("You lose! Scissors beats paper ")
    } else {
        return "check your code, something is wrong!"
    }
}

function disableButton() {
    const disBut = document.querySelectorAll(".button-flexbox > button");
    for (let i = 0; i < disBut.length; i++) {
        disBut[i].disabled = true
    }
}



function game(humanChoice, computerChoice) {
    const resultChoiceDisplay = document.querySelector("#result");
    const newGame = document.querySelector("#new-game")
    resultChoiceDisplay.textContent = playRound(humanChoice, computerChoice);
    if (playerScore === 5) {
        resultChoiceDisplay.textContent = "You Win!"
        newGame.style.display = "flex"
        disableButton();
    } else if (computerScore === 5) {
        resultChoiceDisplay.textContent = "You Lose!"
        newGame.style.display = "flex"
        disableButton();
    }

    const humanChoiceDisplay = document.querySelector("#humanChoice");
    humanChoiceDisplay.textContent = humanChoice;
    const playerScoreDisplay = document.querySelector("#humanScore");
    playerScoreDisplay.textContent = playerScore

    const computerChoiceDisplay = document.querySelector("#computerChoice");
    computerChoiceDisplay.textContent = computerChoice;
    const computerScoreDisplay = document.querySelector("#computerScore");
    computerScoreDisplay.textContent = computerScore


}

const humanChoiceRock = document.querySelector("#Rock");
humanChoiceRock.addEventListener("click", function () {
    game("Rock", getComputerChoice())
})

const humanChoicePaper = document.querySelector("#Paper");
humanChoicePaper.addEventListener("click", function () {
    game("Paper", getComputerChoice())
})

const humanChoiceScissors = document.querySelector("#Scissors");
humanChoiceScissors.addEventListener("click", function () {
    game("Scissors", getComputerChoice())
})

const newGame = document.querySelector("#new-game")
function reload() {
    reload = location.reload()
};
newGame.addEventListener("click", reload, false);

