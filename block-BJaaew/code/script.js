let navRoot = document.querySelector(".navigation > ul");
let root= document.querySelector(".house_list")

function createNav(){
    got.houses.forEach(house => {
        let li = document.createElement("li");
        li.innerText = house.name;
        li.classList.add("house");
        li.setAttribute("data-house",house.name);
        // li.classList.add("house")
        li.addEventListener("click", createUI);
        navRoot.append(li);
    })
}

function createUI(event){
    root.innerHTML = "";
    let navList = document.querySelectorAll(".house");
    console.log(navList)
    navList.forEach(h => h.classList.remove("active"));
    event.target.classList.add("active");
    let houseName = event.target.dataset.house;
    got.houses.forEach(house => {
        if(house.name === houseName){
            house.people.forEach(p => {
                let li = document.createElement("li");
                let div1 = document.createElement("div");
                div1.classList.add("info")
                let img = document.createElement("img");
                img.src = p.image;
                let h2 = document.createElement("h2");
                div1.append(img,h2);
                h2.innerText = p.name;
                let para = document.createElement("p");
                para.innerText = p.description;
                let btn = document.createElement("button");
                btn.innerText = "Learn More!"
                li.append(div1,para,btn);
                root.append(li);
            })
        }
    })
}
createNav();


