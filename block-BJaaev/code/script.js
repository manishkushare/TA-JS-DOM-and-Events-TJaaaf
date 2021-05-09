let input = document.querySelector("input[type= 'text']");
let root = document.querySelector(".root");
let taskLeft = document.querySelector(".task_left > span");
let todoArray = JSON.parse(localStorage.getItem("todo")) || [];
let all = document.querySelector(".all");
let activeTab = document.querySelector(".active_tab");
let completed = document.querySelector(".completed");
let clearCompleted = document.querySelector(".clear_completed");
function handleToDos(event){
    if(event.keyCode === 13 ){
        todoArray.push({
            task : event.target.value,
            isDone: false,
        });
        
        // ++count ;
        event.target.value = "";
    }
    createUI(todoArray,root);
    displayTaskLeft(todoArray);
    handleClearCompleted();
    showAlltask(todoArray,root);
    localStorage.setItem("todo",JSON.stringify(todoArray));
}
// task left count
function displayTaskLeft(data){
    // console.log("test");
    let filterdData = data.filter(e => !e.isDone);
    // console.log(filterdData);
    taskLeft.innerText = `${filterdData.length} tasks left`;
}
// for all task
function showAlltask(){
    // console.log("hey am inside show all");
    // all.classList.add("active");
    createUI(todoArray,root);
}
// active tab
function handleActive(){
    let filterdData = todoArray.filter(e => !e.isDone);
    createUI(filterdData,root);
}
// completed tab
function handleCompleted(){
    let filteredData = todoArray.filter(e => e.isDone);
    createUI(filteredData,root);
}
// clear complted
function handleClearCompleted(event){
    todoArray = todoArray.filter(e => !e.isDone);
    createUI(todoArray,root);
    localStorage.setItem("todo",JSON.stringify(todoArray));

}
// handle edit on double click
function editData(e) {
  const el = e.target;
  const input = document.createElement("input");
  let id = e.target.dataset.paraId;
  input.setAttribute("value", el.textContent);
  el.replaceWith(input);

  const save = function() {
    const previous = document.createElement(el.tagName.toLowerCase());
    previous.onclick = editData;
    previous.textContent = input.value;
    todoArray[id].task = input.value; 

    input.replaceWith(previous);
    createUI(todoArray,root);
    localStorage.setItem("todo",JSON.stringify(todoArray));
  };

  /**
    We're defining the callback with `once`, because we know that
    the element will be gone just after that, and we don't want 
    any callbacks leftovers take memory. 
    Next time `p` turns into `input` this single callback 
    will be applied again.
  */
  input.addEventListener('blur', save, {
    once: true,
  });
  input.focus();
  
}
// delete task
function handleDelete(event){
    let id = event.target.dataset.id;
    todoArray.splice(id,1);
    createUI(todoArray,root);
    displayTaskLeft(todoArray);
    localStorage.setItem("todo",JSON.stringify(todoArray));
}
// handle isDone
function handleIsDone(event){
    let id= event.target.id;
    todoArray[id].isDone = !todoArray[id].isDone
    displayTaskLeft(todoArray);
    createUI(todoArray,root);
    localStorage.setItem("todo",JSON.stringify(todoArray));
}
// create UI
function createUI(data,rootElem){
    rootElem.innerHTML = "";
    data.forEach((task,index) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.setAttribute("type","checkbox");
        input.checked = task.isDone;
        input.setAttribute("id",index);
        input.addEventListener("change", handleIsDone)
        let p= document.createElement("p");
        // .setAttribute("type","text");
        p.innerText = task.task;
        p.setAttribute("data-para-id",index);
        p.addEventListener("dblclick",editData);
        let span = document.createElement("span");
        span.setAttribute("data-id",index);
        span.addEventListener("click",handleDelete)
        span.innerText = "X";
        li.append(input,p,span);
        rootElem.append(li);
    })
    
}
createUI(todoArray,root);
displayTaskLeft(todoArray);


input.addEventListener("keyup", handleToDos);
all.addEventListener("click",showAlltask);
activeTab.addEventListener("click",handleActive);
completed.addEventListener("click", handleCompleted);
clearCompleted.addEventListener("click",handleClearCompleted);
