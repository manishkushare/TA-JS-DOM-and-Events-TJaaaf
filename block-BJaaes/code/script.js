let form = document.querySelector("form");

let userInfo = {};
let errorMessage = "";
function handleForm(event){
    event.preventDefault();
    createInfo(event)
    let usernameElem = form.elements.username;
    handleUserName(usernameElem);
    let nameElem = form.elements.name;
    handleName(nameElem);
    let emailElem = form.elements.email;
    handleEmail(emailElem);
    let phoneNumber = form.elements.telephone;
    console.log(phoneNumber.value);
    handlePhooneNumber(phoneNumber);
    let password = form.elements.password;
    handlePassword(password);
}
// hadnle username
function handleUserName(elem){
    if(elem.value.length < 4){
        errorMessage = "can't be less than 4 characters";
        updateErrorMessageInSpan(elem,errorMessage);
        addError(elem);
    }
    else {
        updateErrorMessageInSpan(elem)
        removeError(elem);
        addSuccess(elem);
    
    }
}   
// handle name
function handleName(elem){
    if(elem.value.split("").some(e => Number(e))){
        errorMessage = "You can't use number in the name field";
        updateErrorMessageInSpan(elem,errorMessage);
        addError(elem);
    }
    else if(elem.value === ""){
        errorMessage = "name field can't be empty";
        updateErrorMessageInSpan(elem,errorMessage);
        addError(elem);
    }

    else {
        updateErrorMessageInSpan(elem)
        addSuccess(elem);
        removeError(elem);
    }
}
// handle email
function handleEmail(elem){
    if(!elem.value.includes("@") || elem.value.length < 6){
        errorMessage = "Not a valid email";
        updateErrorMessageInSpan(elem,errorMessage);
        addError(elem);
    }
    else{
        updateErrorMessageInSpan(elem);
        addSuccess(elem);
        removeError(elem);
    }
}
// handle phone number
function handlePhooneNumber(elem){
    if(!Number(elem.value)){
        errorMessage = "Phone number can only contain numbers";
        updateErrorMessageInSpan(elem,errorMessage);
        addError(elem);
    }
    else{
        updateErrorMessageInSpan(elem);
        addSuccess(elem);
        removeError(elem);
    }
}
// password
function handlePassword(elem){
    
}
// stor user info in object
function createInfo(event){
    userInfo.username = form.elements.username.value;
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.telephone = form.elements.telephone.value;
    userInfo.password  = form.elements.password.value;
    return userInfo;
}

//  update error message for individual cases
function updateErrorMessageInSpan(elem,msg = ""){
    elem.nextElementSibling.innerText = msg;
}

// add success class to particular element
function addSuccess(elem){
    elem.classList.add("success");
}
// add error class to particular element
function addError(elem){
    elem.classList.add("error");
}
// remove error class from particular element
function removeError(elem){
    elem.classList.remove("error");
}

form.addEventListener("submit",handleForm);