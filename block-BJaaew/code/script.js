let navRoot = document.querySelector(".navigation > ul");
let root= document.querySelector(".house_list")
let input = document.querySelector("input");
let navList = document.querySelectorAll(".house");
function createNav(){
    got.houses.forEach(house => {
        let li = document.createElement("li");
        li.innerText = house.name;
        li.classList.add("house");
        li.setAttribute("data-house",house.name);
        
        li.addEventListener("click", handleFilter)
        navRoot.append(li);
    })
}
function handleSearch(event){
    root.innerHTML = "";
    navList.forEach(h => h.classList.remove("active"));
    let filteredSearchData = got.houses.reduce((acc,cv)=>{
        let filteredArray = cv.people.filter(p => {
             return p.name.toLowerCase().includes(event.target.value.toLowerCase());
        })
        console.log("inside filter",(filteredArray));
        return acc.concat(filteredArray);
        
    },[]);
    console.log("array",filteredSearchData);
    createUI(filteredSearchData,root)
}
function handleFilter(event){
    navList.forEach(h => h.classList.remove("active"));
    event.target.classList.add("active");
    let houseName = event.target.dataset.house
    let filteredHouse = got.houses.reduce((acc,cv)=> {
        if(cv.name === houseName){
            acc.push(cv);
        }
        return acc;

    },[])   
    console.log(filteredHouse);
    createUI(filteredHouse[0].people,root);
}
function createUI(data,rootElem){
    rootElem.innerHTML = "";
    data.forEach(p => {
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
        rootElem.append(li);
    })
}
createNav();
input.addEventListener("keyup",handleSearch);
