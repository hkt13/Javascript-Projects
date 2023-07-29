const boxel = document.getElementsByClassName("box")
const infoel = document.getElementById("info")
const btnel = document.getElementById("btn")
let turn = "X";
let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let isgameover = false;

//Turn Logic 
const changeturn = () => {

    if (turn === "X") {
        return "0";
    }
    else {
        return "X";
    }
}

//Game Over Logic
const checkwin = () => {
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    win.forEach((element) => {
        const box_text = document.getElementsByClassName("box_text");
        if (box_text[element[0]].innerText === box_text[element[1]].innerText && box_text[element[1]].innerText === box_text[element[2]].innerText && box_text[element[0]].innerText !== "") {
               
            isgameover = true;
           
            infoel.innerText= box_text[element[0]].innerText + " Won"
            gameover.play();
            document.querySelector("#img_box").getElementsByTagName("img")[0].style.width = "200px";

        }

    })


}

//Game Logic
Array.from(boxel).forEach(box => {

    const box_text = box.querySelector(".box_text")
    box.addEventListener("click", () => {
        if (!isgameover) {
        if (box_text.innerText === "") {
            box_text.innerText = turn;
            turn = changeturn();
            ting.play();
            checkwin();
            if (!isgameover) {
                infoel.innerText = 'Turn for ' + turn;
            }
                

        }
        }
   
    })



})

//Reset Function
btnel.addEventListener('click',function(){
    const box_text = document.getElementsByClassName("box_text");
    Array.from(box_text).forEach((element)=>{
        element.innerText="";
    })
    isgameover=false;
    turn="X";
    infoel.innerText= "Turn for " + turn; 
    document.querySelector("#img_box").getElementsByTagName("img")[0].style.width = "0px";
})