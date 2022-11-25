let myArray = ["Rock", "Paper", "Scissors"]; //creates an array 

function getComputerChoice() { //returns a random string from the array
    let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    return randomItem
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) { //gives the scenarios
        return ("tie")
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        return ("You lose! Paper beats rock ")
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return ("You win! Paper beats rock ")
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        return ("You lose! Rock beats scissors")
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        return ("You win! Rock beats scissors ")
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        return ("You win! Scissors beats Paper")
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        return ("You lose! Scissors beats paper ")
    } else {
        return "Impossible choice"
    }
}

function playRoundDisplay(humanChoice, computerChoice) {
    const humanChoiceDisplay = document.querySelector("#humanChoice");
    humanChoiceDisplay.textContent = humanChoice;

    const computerChoiceDisplay = document.querySelector("#computerChoice");
    computerChoiceDisplay.textContent = computerChoice;

    const resultChoiceDisplay = document.querySelector("#result");
    resultChoiceDisplay.textContent = playRound(humanChoice, computerChoice)
}

const humanChoiceRock = document.querySelector("#Rock");
humanChoiceRock.addEventListener("click", function () {
    playRoundDisplay("Rock", getComputerChoice())
})

const humanChoicePaper = document.querySelector("#Paper");
humanChoicePaper.addEventListener("click", function () {
    playRoundDisplay("Paper", getComputerChoice())
})

const humanChoiceScissors = document.querySelector("#Scissors");
humanChoiceScissors.addEventListener("click", function () {
    playRoundDisplay("Scissors", getComputerChoice())
})


