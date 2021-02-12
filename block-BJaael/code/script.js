/* <li class="box">

</li> */


let boxContainer = document.querySelector(".box-container");

let li;

for(let i = 0; i<500; i++){
    li = document.createElement("li");
    li.classList.add("box");
    boxContainer.append(li);
}


function changeColor(event){
    let arr = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];
    let color = "#";
    for(let j= 0;j<6;j++){
        color += arr[Math.floor(Math.random()*arr.length)];
    }
    console.log(color);
    return color;
}


function changeNumber(){
    let num = Math.floor(Math.random()*501);
    return num;
}


function handleBoxes() {
    document.querySelectorAll("li").forEach(e => {
        e.style.backgroundColor = changeColor();
        e.innerText = changeNumber();
    });
}


boxContainer.addEventListener("mousemove",handleBoxes);