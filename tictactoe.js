//current player =x
let resetbutton=document.querySelector(".resetbutton");
let currentplayer="X";
let gameover=false;
let message=document.querySelector(".hi");
//select all boxes
const boxes = document.querySelectorAll(".box");
function checkwinner(){
    const wins = [
        [0,1,2],[3,4,5],[6,7,8], //rows
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for (let win of wins){
        let [a,b,c] = win;
        if(
            boxes[a].textContent && 
            boxes[a].textContent === boxes[b].textContent &&
            boxes[b].textContent === boxes[c].textContent

        ){
            message.textContent = currentplayer + " wins!"
            gameover = true;
            return;
        }
    }
    let isdraw = true;
    for (let box of boxes){
        if (box.textContent === ""){
            isdraw = false;
            break; 
        }

    }
    if (isdraw){
        message.textContent = "it' a draw!";
        gameover = true;
    }
}
//when I click box some thing happens
function boxClicked(event){
    console.log("Clicked!")
     // Mark the cell
     const box = event.target;
     if(gameover){
        return;
     }

     if (box.textContent !== ""){
       return;
     }

     // Mark the cell
    
     box.textContent = currentplayer;
     checkwinner();
     if (currentplayer=="X"){
        currentplayer="O"
       
    }
    else{
        currentplayer="X"
    }
  
}


function resetgame(){
    for(let box of boxes){
        box.textContent = "";

    }
    currentplayer="X";
    message.textContent="";
    gameover = false;

}
function win(){
    gameover=true
    return;
}
for(let box of boxes){
    box.addEventListener("click",boxClicked);
    
}

resetbutton.addEventListener("click",resetgame);
