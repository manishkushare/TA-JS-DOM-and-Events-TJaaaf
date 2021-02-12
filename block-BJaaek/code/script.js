let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");
function changeBackgroundColor(event){
    let arr = ["A","B","C","D","E","F","0",1,2,3,4,5,6,7,8,9,0];
    let color = "#";
    for(let i=0;i<6;i++){
        color += arr[Math.floor(Math.random()*arr.length)];
    }
    console.log(color); 
    event.target.style.backgroundColor = `${color}`;
}

firstBox.addEventListener("click",changeBackgroundColor);
secondBox.addEventListener("mouseover",changeBackgroundColor)