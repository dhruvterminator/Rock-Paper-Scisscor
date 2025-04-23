let userscore=0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorep = document.querySelector("#uscore");
let compscorep = document.querySelector("#cscore");

const gencompchoice=()=>{
    const option = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random()*3);
    return option[randidx];
};

const gamedraw =()=>{
    msg.innerText = "Game was Draw , Try Again";
};

const choiceNames = {
    rock: "Rock",
    paper: "Paper",
    scissor: "Scissors"
};

const showWin =(userWin,userchoice,compchoice)=>{  
    const userChoiceName = choiceNames[userchoice] || userchoice;
    const compChoiceName = choiceNames[compchoice] || compchoice;
    if(userWin){  
        userscore++;  
        userscorep.innerText=userscore;  
        msg.innerText = "You Win! " + userChoiceName + " beats " + compChoiceName;  
        msg.style.backgroundColor = "green";  
    }  
    else{  
        compscore++;  
        compscorep.innerText=compscore;  
        msg.innerText = "You Lose " + compChoiceName + " beats " + userChoiceName;  
        msg.style.backgroundColor="red";  
    }  
};

const playgame=(userchoice)=>{
    const compchoice = gencompchoice();
    if(userchoice === compchoice){
        gamedraw();
    }
    else{
        let userWin=true;
        if(userchoice === "rock"){
            userWin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userWin = compchoice === "scissor" ? false : true;
        }
        else{
            userWin = compchoice === "rock" ? false : true;
        }
        showWin(userWin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
