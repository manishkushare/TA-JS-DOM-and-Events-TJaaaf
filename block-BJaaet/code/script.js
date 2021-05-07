function moviePlayList(){

    let form = document.querySelector("form");
    let root = document.querySelector("ul");
    let movieList = [];


    function handleForm(event){
        event.preventDefault();
        movieList.push({
            name: form.elements.movie_name.value,
            watched : false,
        });
        
        createUI(event);
        form.elements.movie_name.value = "";
    }

    function handleDelete(event){
        let index = event.target.dataset.id;
        movieList.splice(index,1);
        createUI();
    }

    function handleCheckbox(event){
        let id = event.target.id;
        movieList[id].watched = !movieList[id].watched;
        createUI();
    }

    function createUI(event){
        root.innerHTML = "";
        movieList.forEach((movie,index) => {
            let li = document.createElement("li");
            let p = document.createElement("p");
            let span = document.createElement("span");
            let input = document.createElement("input");
            input.setAttribute("type","checkbox");
            input.checked = movie.watched;
            input.addEventListener("change",handleCheckbox);
            input.setAttribute("id",index);
            p.innerText = movie.name;
            span.innerText = "x";
            span.setAttribute("data-id",index);
            span.addEventListener("click",handleDelete);
            li.append(input,p,span);
            root.append(li);
        })
    }
    createUI()


    form.addEventListener("submit",handleForm);

}

moviePlayList();