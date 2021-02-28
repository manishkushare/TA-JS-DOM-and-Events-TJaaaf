const display = document.querySelector(".display");
const keys = document.querySelector(".calculator-keys");

function handleCalculator(event){
    console.log("test");
    const key = event.target;
    const keyContent = key.innerText
    const action = key.dataset.action;
    const displayNumber = display.innerText;
    if(!action){
        if(displayNumber === "0") {
            display.innerText  = keyContent;
        }
        else {
            display.innerText = displayNumber + keyContent;
        }

    }
    if(action === "add" || action === "subtract" || action === "multiply" || action === "division"){
        
    }
    if(action === "clear"){
        display.innerText = "0";

    }
    if(action === "calculate"){

    }
    if(action === "decimal"){
        display.innerText = displayNumber + keyContent;

    }
    

}

keys.addEventListener("click", handleCalculator);