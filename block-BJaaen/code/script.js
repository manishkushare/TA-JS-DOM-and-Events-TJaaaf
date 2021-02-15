function rockPaperScissor ( ){
    
    let welcome = document.querySelector(".welcome");
    welcome.innerHTML = `<h2>Do you wanna play <span>Rock Scissor and Paper</span></h2>`;
    welcome.classList.add("bounceInDown");
    let span = welcome.firstChild;
    span.addEventListener("mousemove", function () {
      span.classList.toggle("pulse");
    });

    // welcome button
    let clickMe = document.createElement("button");
    clickMe.innerText = "Click Me !!";
    clickMe.classList.add("btn");
    welcome.append(clickMe);
    let btn = document.querySelector(".btn");
    setInterval(() => {
      document.querySelector(".btn").classList.toggle("pulse");
    }, 2000);
    btn.addEventListener("click", function () {
      welcome.style.visibility = "hidden";
      document.querySelector(".box-container").style.visibility = "visible";
    });
    // document.body.classList.remove("confetti");



    // hero section
    let alliTags = document.querySelectorAll("i");
    alliTags.forEach(e => {
        e.style.borderRadius = "10px"
        e.style.padding = "2rem";
        e.style.background = "#228EFA";

    })
    let userScore = 0;
    let computerScore = 0;
    let userWeapon = document.querySelector(".user-weapons");
    let userResult = document.querySelector(".user-info").lastElementChild; // h4 tag to update score of user
    let computerResult = document.querySelector(".computer-info").lastElementChild; // h4 tag to update score of computer
    userWeapon.addEventListener("click", function(){
        handleOptions(event,userResult,computerResult,alliTags);

    })

    // restart 
    let restart = document.querySelector(".refresh");
    restart.addEventListener("click", function(){
        handleRestart(event,alliTags,userResult,computerResult);
    });

    //handle options
    function handleOptions(event,userResult,computerResult,alliTags){
        resetSelected(alliTags); // first remove "selected" class from all i tags upon selecting option
        event.target.classList.add("selected"); // add class "selected" to the option which is selcted.
        let selectedOption = event.target.getAttribute("id"); // getting id attribute of user selected weapon
        let computerWeapons = document.querySelector(".computer-weapons").children; // getting all the i tags of computer-weapons
        let computerSelectedOption = computerWeapons[Math.floor(Math.random()*3)]; // selcting random i tag from computer-weapon through variable computerWeapons consisting of array
        computerSelectedOption.classList.add("selected");// adding class "selected" to randomly selcted computer weapon
        let computerOption = computerSelectedOption.getAttribute("id"); // getting id attribute of computer selected weapon (randomly)
        let display = document.querySelector(".display"); // h2 tag to display the message depanding upon decider result
        decider(selectedOption,computerOption,display,userResult,computerResult);  // calling decider function to decide the result of round
    }
    

    //round decider function
    function decider(user,computer,display,userResult,computerResult) {
        if((user === "scissor" && computer === "paper") || (user === "paper" && computer === "rock") || (user === "rock" && computer === "scissor")){
            userWon(display,userResult);

        }
        else if((user === "paper" && computer === "scissor")|| (user === "rock" && computer === "paper") || (user === "scissor" && computer === "rock")){
            userLost(display,computerResult)
        }
        else {
            mathtie(display);
        }
    } 
    //update content on winning
    function userWon(display,userResult,userScore){
        display.innerText = "Congratulations, You Won !";
        userResult.innerText = userScoreIncrement();

    }
    // update content on loosing
    function userLost(display,computerResult){
        display.innerText = "We are sorry, You Lost ! How about trying one more time."
       computerResult.innerText = computerScoreIncrement();
    }
    // update content on match tie
    function mathtie(display){
        display.innerText = "It's Tie , close game, give it a one more shot !";
    }

    // update user score
    function userScoreIncrement(){
        userScore++;
        return userScore;
    }
    // update computer score
    function computerScoreIncrement(){
        computerScore++;
        return computerScore;
    }
    // reset "selected" tag
    function resetSelected(alliTags){
       return  alliTags.forEach(element => {
            
             element.classList.remove("selected");
        });

    }

    //reset the game
    function handleRestart(){
            resetScore();
            document.querySelector(".display").innerText = "Let's Play Again !"
            resetSelected(alliTags);
        
    }
    // reset score
    function resetScore(){
        userScore = 0;
        computerScore = 0;
        userResult.innerText = userScore;
        computerResult.innerText = computerScore;

    }


}

rockPaperScissor();