let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    random_number = Math.floor(Math.random() * 3)+1;
    switch(random_number){
        case 1:
            return ("Rock");
        case 2:
            return ("Paper");
        case 3:
            return ("Scissors");
        default:
            console.log("default");
    }
    
}

function getHumanChoice(){
   let answer = prompt("Rock, Paper or Scissors");
   answer = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
   return answer;
}



function playRound(humanChoice, computerChoice){
    if(humanChoice==="Rock" && computerChoice==="Scissors") {
        humanScore ++;
        return("You won! Rock beats Scissors " + "Score: " + (humanScore) + (" ") + (computerScore))
    }
    else if(humanChoice==="Paper" && computerChoice==="Rock"){
        humanScore ++;
        return("You won! Paper beats Rock " + "Score: " + (humanScore) + (" ") + (computerScore))
    }
    else if(humanChoice==="Scissors" && computerChoice==="Paper"){
        humanScore ++;
        return("You won! Scissors beats Paper " + "Score: " + (humanScore) + (" ") + (computerScore))
    }
    else if(humanChoice==="Rock" && computerChoice==="Paper"){
        computerScore ++;
        return("You lost! Paper beats Rock " + "Score: " + (humanScore) + (" ") + (computerScore))
    }
    else if(humanChoice==="Paper" && computerChoice==="Scissors"){
        computerScore ++;
        return("You lost! Scissors beats Paper " + "Score: " + (humanScore) + (" ") + (computerScore))
    }
    else if(humanChoice==="Scissors" && computerChoice==="Rock"){
        computerScore ++;
        return("You lost! Rock beats Scissors " + "Score: " + (humanScore) + (" ") + (computerScore))
    }
    else{
        return("It's a tie!" + "Score: " + (humanScore) + (" ") + (computerScore))
    }

}

function playGame(){
    for( let i=0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
    }
}

playGame();