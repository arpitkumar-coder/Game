let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const genCompChoice = () => {
    //rock, paper, scissor
    const option =["rock","paper","scissor"];
   const randIdx = Math.floor(Math.random()*3);
   return option[randIdx];
    
}

const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Game was draw, Play Again";
    msg.style.backgroundColor ="black";
}

const showWinner =(userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("YOU WIN");
        msg.innerText = "You Win! ";
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("YOU LOSE");
        msg.innerText = "You Lose! ";
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoiceId) =>{
    console.log("user choice = ", userChoiceId);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoiceId === compChoice) {
        //DRAW MATCH
        drawGame();
    }else {
        let userWin = true;
        if(userChoiceId ==="rock"){
            // scissor , paper
            userWin = compChoice === "paper" ? false: true;
        }else if (userChoiceId ==="paper"){
            //rock,Scissor
            userWin = compChoice === "scissor" ? false : true;
        }else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoiceId = choice.getAttribute("id")
        // console.log("Choice was clicked", userChoiceId);
        playGame(userChoiceId);

    })
})
