let box=  document.querySelectorAll(".box1 .box");
box.forEach((elem,index) => {
    elem.addEventListener("click", function(){
        elem.innerText = index+1;
        setTimeout(()=> elem.innerText = "",5000)
    });
})


let boxTwo = document.querySelector(".box2");
let boxTwoChild = boxTwo.children;
[...boxTwoChild].forEach((elem,index)=>{
    elem.setAttribute("data-index",index+1);
    console.log(elem);
})

function handleEvent(event){
    event.target.innerText = event.target.dataset.index;
    setTimeout(function(){
        handleText(event)
    },5000);
}
function handleText(event){
    event.target.innerText = "";
}
boxTwo.addEventListener("click", handleEvent);