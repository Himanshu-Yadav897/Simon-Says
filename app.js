let gameSq = [];
let userSq = [];

 let btns = ["red" , "yellow", "purple" , "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function (){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");  

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn){
    btn.classList.add("userFlash");  

    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 200);
}

function levelUp()  {
    userSq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSq.push(randColor);
    console.log(gameSq);
    btnFlash(randBtn);
    
}

function checkAns(idx){
  

    if(userSq[idx] == gameSq[idx]){
        if(userSq.length == gameSq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score is <b> ${level} </b>  </br> Press any key to restart`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector('body').style.backgroundColor = "white";
        }, 150);
        reset();
    }

   
}

function btnPress(){
    let btn = this;

    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSq.push(userColor);

    checkAns(userSq.length -1);

}

let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    gameSq = [];
    userSq = [];
    started = false;
    level = 0;
}