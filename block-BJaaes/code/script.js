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
    let confirmPassword = form.elements.confirm_password;
    handlePassword(password,confirmPassword);

}
// hadnle username
function handleUserName(elem){
    if(elem.value === ""){
        errorMessage = "username cannot be empty";
        updateErrorMessageInSpan(elem,errorMessage);
        addError(elem)
    }
    else if(elem.value.length < 4){
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
    if(elem.value === ""){
        errorMessage = " name cannot be empty";
        updateErrorMessageInSpan(elem,errorMessage);
        addError(elem)
    }
    else if(elem.value.split("").some(e => Number(e))){
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
    if(elem.value === ""){
        errorMessage = "email cannot be empty";
        updateErrorMessageInSpan(elem,errorMessage);
        addError(elem)
    }
    else if(!elem.value.includes("@") || elem.value.length < 6){
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
    if(elem.value === ""){
        errorMessage = "phone number cannot be empty";
        updateErrorMessageInSpan(elem,errorMessage);
        addError(elem)
    }
    else if(!Number(elem.value)){
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
function handlePassword(elem1,elem2){
    if(elem1.value === "" || elem2.value ===""){
        errorMessage = "password cannot be empty"
        updateErrorMessageInSpan(elem1,errorMessage);
        updateErrorMessageInSpan(elem2,errorMessage)
        addError(elem1);
        addError(elem2);
    }
    
    else if(elem1.value !== elem2.value){
        errorMessage = "Password and confirm password are not same";
        updateErrorMessageInSpan(elem2,errorMessage);
        addError(elem1);
        addError(elem2);
    }
    else {
        updateErrorMessageInSpan(elem2);
        addSuccess(elem1);
        addSuccess(elem2);
        removeError(elem1);
        removeError(elem2);
    }
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