let userScore=0;
let computerScore=0;
const ch=document.querySelectorAll(".choise")
const msg=document.querySelector("#msg")
const userScorep=document.querySelector("#user-score");
const compScorep=document.querySelector("#comp-score");

const gemCompChoice=()=>{
    const option=["rock","paper","scissors"]
  const randomIdx=  Math.floor(Math.random()*3)
 return option[randomIdx];
}
const drawGame=()=>{
console.log("Draw Game")
    msg.innerText="Game was Draw"
        msg.style.backgroundColor="black"
}

const showWinner=(userWin,userChoice,compChoice)=>{
   if(userWin){
    userScore++;
    userScorep.innerText=userScore;
    console.log("you win")
    msg.innerText=`you win ${userChoice} beats${compChoice}`
    msg.style.backgroundColor="green"
   } else{
console.log("you lose")
computerScore++;
compScorep.innerText=computerScore;
    msg.innerText=`you lose ${compChoice} beats${computerScore}`
        msg.style.backgroundColor="red"
   }

   }
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice)
const compChoice=gemCompChoice();
console.log("user choice=",compChoice)
if(userChoice === compChoice){
    drawGame();
}else{
    userWiN=true;
    if(userChoice==="rock"){
        //paper,scissors
        userWin= compChoice==="paper" ? false:true;
    } else if(userChoice=="paper"){
        //scissors,rock
        userWin= compChoice=="scissors" ?false:true;
    }else{
        //rock,paper
        userWin= compChoice==="rock" ? false:true;
    }
    showWinner(userWin,compChoice,userChoice);
}
}


ch.forEach((choise)=>{
choise.addEventListener("click",()=>{// this to make buttion clickable

 const userChoice= choise.getAttribute("id")//get attributre to print the id
 console.log("choice was clicked",userChoice) 
 playGame(userChoice);
})
})