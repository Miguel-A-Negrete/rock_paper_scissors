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
        return("You won! Rock beats Scissors")
    }
    else if(humanChoice==="Paper" && computerChoice==="Rock"){
        return("You won! Paper beats Rock")
    }
    else if(humanChoice==="Scissors" && computerChoice==="Paper"){
        return("You won! Scissors beats Paper")
    }
    else if(humanChoice==="Rock" && computerChoice==="Paper"){
        return("You lost! Rock beats Paper")
    }
    else if(humanChoice==="Paper" && computerChoice==="Scissors"){
        return("You lost! Scissors beats Paper")
    }
    else if(humanChoice==="Scissors" && computerChoice==="Rock"){
        return("You lost! Rock beats Scissors")
    }
    else{
        return("It's a tie!")
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log(playRound(humanSelection, computerSelection));
console.log(computerSelection);