const computer = {
    name: "computer",
    score: 0,
    pick: ""
};
const player = {
    name: "",
    score: 0,
    pick: ""
}
var round = 0;
//Reset
computer.score = 0;
computer.pick = "";
player.score = 0;
player.pick = "";

player.name = prompt("what's your name?", "john");
document.getElementById("playerName").innerHTML = player.name;
function playerPick(pick) {
    player.pick = pick;
}
function newGame() {
    //Reset
    computer.score = 0;
    computer.pick = "";
    player.score = 0;
    player.pick = "";
    var buttons = document.getElementsByClassName("pick-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.visibility = 'visible';
    };
    checkResult(); //check result
}
function computerPick() {
    //random number between 0 and 3
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            computer.pick = "rock";
            break;
        case 1:
            computer.pick = "paper";
            break;
        case 2:
            computer.pick = "scissors";
            break;
    }
};
function checkResult() {
    //Check if there is a tie
    var gameResult;

    if (player.pick === computer.pick) {
        gameResult = "tie!"
    } else if (player.pick === "rock") { //if player chooses rock

        if (computer.pick === "scissors") { player.score++; gameResult = "Player wins!" }
        else if (computer.pick === "paper") { computer.score++; gameResult = "Computer wins!" }

    } else if (player.pick === "paper") { //if player chooses paper

        if (computer.pick === "rock") { player.score++; gameResult = "Player wins!" }
        else if (computer.pick === "scissors") { computer.score++; gameResult = "Computer wins!" }

    } else if (player.pick === "scissors") { //if player chooses scissors
        if (computer.pick === "paper") { player.score++; gameResult = "Player wins!" }
        else if (computer.pick === "rock") { computer.score++; gameResult = "Computer wins!" }

    }
    document.getElementById("computerPick").innerHTML = computer.pick
    document.getElementById("playerPick").innerHTML = player.pick
    document.getElementById("gameResult").innerHTML = gameResult;
    document.getElementById("computerScore").innerHTML = computer.score;
    document.getElementById("playerScore").innerHTML = player.score;
};

function playerPick(pick) {
    player.pick = pick; //save player's pick
    computerPick(); //choose computer's pick
    checkResult(); //check result
};

//initialize game
// const GameState = {
//     "start" : 0,
//     "win" : 1,
//     "end": 2
// };
//use the class Game constructor?



// function playGame (){
//  // get user choice
//     let userChoice = prompt("Do you choose rock, paper or scissors?");


//     console.log("you choose " + userChoice);
//     let computerChoice = 0;
//     //get computer choice
//     computerChoice = Math.random();
//     if (computerChoice < 0.34) {
//     computerChoice = "rock";
//     } else if(computerChoice <= 0.67) {
//     computerChoice = "paper";
//     } else {
//     computerChoice = "scissors";
//     };

//     //compare choices
//     function compare(choice1, choice2){
//         const displayComp = "Computer choice is "
//         if(choice1===choice2){
//             console.log( displayComp + choice2  +" - The result is a tie!");
//             }
//         else if ( choice1==="rock"){
//                 if( choice2==="scissors"){
//                     console.log(displayComp + choice2  + " and rock wins");
//                 }
//                 else{ console.log(displayComp + choice2  + " and paper wins");
//                 }

//             }
//         else if (choice1 === "paper"){
//                 if ( choice2=== "rock"){
//                     console.log(displayComp + choice2  +" and paper wins");
//                 }
//                 else {console.log(displayComp + choice2  +" and scissors wins");
//                 }
//             }
//         else if (choice1 === "paper"){
//                 if ( choice2userChoice === "rock"){
//                     console.log(displayComp + choice2  +" and paper wins");
//                 }
//                 else{console.log(displayComp + choice2  +" and scissors wins");
//                 }
//             }
//         };

//     console.log(compare(userChoice, computerChoice));


//     function displayResult(compare){

//     };
// };
//playGame();

