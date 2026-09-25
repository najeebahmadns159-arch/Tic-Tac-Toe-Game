let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn")
let newbtn=document.querySelector("#new-btn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turnO=true;

const winpaterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turnO=true;
    count=0;
    enabledboxes();
    msgcontainer.classList.add("hide");
}
const drawgame = () => {
    msg.innerText = "The Game is Draw";
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");

        if(turnO){
            box.innerText="O";
            box.classList.add("O");
            turnO=false;
        }
        else{
            box.innerText="X";
            box.classList.add("X");
            turnO=true;
        }

        box.disabled=true;
        count++;
        checkwinner();
    });
});
const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disabledboxes();

}
let count =0;
const checkwinner=()=>{
    let winnerfind=false;
    for(let pattern of winpaterns){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if(posval1!="" && posval2!="" &&posval3!=""){
            if(posval1===posval2 && posval2===posval3){
                console.log("Winnner",posval1)
                winnerfind=true;
                showwinner(posval1);
            }
        }
    }
    if(count===9 && !winnerfind){
        drawgame();
    }

}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);