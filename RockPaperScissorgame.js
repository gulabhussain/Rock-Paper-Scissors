let userscore = 0;
let compscore = 0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userScorePara = document.querySelector("#user-score");
  const compScorePara = document.querySelector("#comp-score");

const genCompChoice = (compChoice) => {    // generate comp choice
    const opctions =[ "Rock" , "Paper" , "Scissors"];
    const randIdx = Math.floor(Math.random() * 3 );
    return opctions[randIdx];
};

const drawGame = () =>{      // for draw
    msg.innerText = "Game Was Draw.Play again.";
    msg.style.backgroundColor = "blue"
}

const showWinner = (userWin , usrChoice , compChoice) => {
    if ( userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${usrChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lose. ${compChoice} beats Your ${usrChoice}`;
        msg.style.backgroundColor = "red";
    }; 
};

const playGame = (usrChoice) => {
    console.log("user choice " , usrChoice);
    // generate comp choice
    const compChoice = genCompChoice();
    console.log("comp choice" , compChoice);

    if (usrChoice === compChoice ){
        // drow
        drawGame();
    } else {
        let userWin = "true" ;
        if ( usrChoice === "Rock"){
            // scissora , paper 
            userWin = compChoice === "paper" ? false : true ;
        } else if (usrChoice === "paper" ) {
            //
            userWin = compChoice === "Scissors" ? false : true ;
        } else {
            // rock , paper
            userWin= compChoice === "Rock" ? false : true ;
        }
        showWinner(userWin , usrChoice , compChoice);
    }
};

 choices.forEach((choice) => {
    choice.addEventListener ("click", () => {
        const usrChoice = choice.getAttribute("id");
    playGame(usrChoice);
    });
 });





 // for the mode button
 // Checkbox toggle
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", modeToggle.checked);
});
