let form = document.querySelector("form");
let ul = document.querySelector("ul");
function handleForm(event){
    event.preventDefault();
    console.log("test");
    let movie = {};
    console.dir(event.target);
    movie.movieName = form.elements.movie_name.value;
    movie.isWatched = false;
    movie.isDelete = "X";
    createUI(movie);

}

function createUI(movie){
    let li = document.createElement("li");
    // li.addEventListener("click",function(event){
    //     handleOperation(event,movie)
    // })
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click",function(event){
        handleCheckbox(event,movie)
    });
    console.dir(checkbox);
    console.log("is movie watched",movie.isWatched)
    let span = document.createElement("span");
    let p = document.createElement("p");
    p.innerText = movie.movieName;
    span.innerText = movie.isDelete;
    span.addEventListener("click",function(event){
        handleDelete(event,movie)
    });
    checkbox.checked = movie.isWatched;
    li.append(checkbox,p,span);
    ul.append(li);   
}


function handleCheckbox(event,movie){
    console.log("inside chekbox handle",movie);
    if(event.target.checked === true){
        movie.isWatched = true;
    }



}



form.addEventListener("submit", handleForm)