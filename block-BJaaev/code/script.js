let input = document.querySelector("input[type= 'text']");
let root = document.querySelector(".root");
let todoArray = [];

function handleToDos(event){
    if(event.keyCode === 13){
        todoArray.push({
            task : event.target.value,
            isDone: false,
        })
        event.target.value = "";
    }
    createUI();

    
}

function handleDelete(event){
    let id = event.target.dataset.id;
    todoArray.splice(id,1);
    createUI();
}

function handleIsDone(event){
    let id= event.target.id;
    todoArray[id].isDone = !todoArray[id].isDone
    createUI();
}


function createUI(){
    root.innerHTML = "";
    todoArray.forEach((task,index) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.setAttribute("type","checkbox");
        input.checked = task.isDone;
        input.setAttribute("id",index);
        input.addEventListener("change", handleIsDone)
        let p= document.createElement("p");
        p.innerText = task.task;
        let span = document.createElement("span");
        span.setAttribute("data-id",index);
        span.addEventListener("click",handleDelete)
        span.innerText = "X";
        li.append(input,p,span);
        root.append(li);
    })
    
}
createUI();


input.addEventListener("keyup", handleToDos)