function calculator(){
let keys = document.querySelector(".calculator-keys");
let display = document.querySelector(".display");
let submit = document.querySelector(".submit");

function handleEvent(event){
    let child = keys.children;
    [...child].forEach(e => e.classList.remove("is-pressed"));
    console.log(child);
    changeBackgroundColor(event)
    if(display.innerText == "0"){
        display.innerText = event.target.innerText;
    }
    else if(event.target.dataset.action ==="calculate"){
        display.innerText;
    }
    else if(event.target.dataset.action === "clear"){
        display.innerText = "0";
    }
    else{
        display.innerText += event.target.innerText;
    }
}
function calculate(event){
    let final = eval(display.innerText);
    display.innerText = final;
    return display.innerText;
}
function changeBackgroundColor(event){
    event.target.classList.add("is-pressed");
    return;
}
keys.addEventListener("click", handleEvent)

submit.addEventListener("click", calculate)
}

calculator();