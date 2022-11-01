let myArray = ["Rock", "Paper", "Scissors"]; //creates an array 

function getComputerChoice() { //returns a random string from the array
    let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    return randomItem
}
function playRound(humanChoice, computerChoice) {
    ;
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
    }
}

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice))
    }
