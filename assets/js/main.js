
// OUTPUT Fields
const finalResult = document.querySelector(".finalResult");
const outputUserResult = document.querySelector(".userResult");
const outputCpuResult = document.querySelector(".cpuResult");


// Var Auswahl
let rock = "rock";
let paper = "paper";
let scissors = "scissor";

let userChoice;
let cpuChoice;

let roundCounter = 0;
let maxRoundNum = document.querySelector("input:checked").value;



function compareRounds(){
if (roundCounter >= maxRoundNum){
    andTheWinnerIs();
    setTimeout(reset,2000);
    }
};


document.querySelectorAll("img").forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(roundCounter, maxRoundNum);
        console.log(item.id);
        roundCounter++;
        userChoice = item.id;
        cpuRandomChoice();
        console.log(cpuChoice);
        battleWinner();
        compareRounds();
    });
});

document.querySelectorAll("input").forEach((radioBtn) => {
radioBtn.addEventListener("change", (e) => {
        e.preventDefault();
        console.log(radioBtn.value); 
        maxRoundNum = Number(radioBtn.value);
        console.log(maxRoundNum);
    });
});


function cpuRandomChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        cpuChoice = rock;
        console.log("CPU hat Stein gewählt");
    } else if (randomNumber === 1) {
        cpuChoice = paper;
        console.log("CPU hat Papier gewählt");
    } else {
        cpuChoice = scissors;
        console.log("CPU hat Schere gewählt");
    }
};


let winsCPU = 0;
let winsUSER = 0;

// Funktion um festzulegen welche Zeichen gegeneinander gewinnen 
// + Ausgabe wer dadurch gewonnen hat
// Counter + 1 pro Win
function battleWinner () {
    if (userChoice == rock && paper == cpuChoice || 
        userChoice == paper && scissors == cpuChoice || 
        userChoice == scissors && rock == cpuChoice){
        console.log("CPU Win");
        winsCPU += 1;
        document.querySelector("#WhoBeatsWho").innerHTML = "You are the LOOSER"
    } else if (userChoice == paper && rock == cpuChoice || 
        userChoice == scissors && paper  == cpuChoice ||
        userChoice == rock && scissors == cpuChoice){
        console.log("USER Win");
        winsUSER += 1;
        document.querySelector("#WhoBeatsWho").innerHTML = "You're the WINNER"
    } else {
        console.log("DRAW");
        document.querySelector("#WhoBeatsWho").innerHTML = "DRAW"
    }
    outputUserResult.innerHTML = winsUSER;
    outputCpuResult.innerHTML = winsCPU;
};

// Funktion wer nach Rundenende der Gesamtsieger ist
function andTheWinnerIs() {
    if (winsUSER > winsCPU){
        console.log("USER is WINNER");
        document.querySelector("#finalResult").innerHTML = "CONGRATULATIONS you beat the CPU";
        document.querySelector("#WhoBeatsWho").innerHTML = "";
    } else if (winsCPU > winsUSER){
        console.log("CPU is WINNER");
        document.querySelector("#finalResult").innerHTML = "UFF maybe next time, you LOOSE";
        document.querySelector("#WhoBeatsWho").innerHTML = "";
    } else {
        console.log("NO WINNER");
        document.querySelector("#finalResult").innerHTML = "OH HA you're as good as a Machine";
        document.querySelector("#WhoBeatsWho").innerHTML = "";
    }
};


// Reset Button Function
document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    winsCPU = 0;
    winsUSER = 0;
    roundCounter = 0;
    document.querySelector(".userResult").innerHTML = 0;
    document.querySelector(".cpuResult").innerHTML = 0;
    document.querySelector("#finalResult").innerHTML = "Let's play";
    document.querySelector("#WhoBeatsWho").innerHTML = "";
});

function reset() {
    winsCPU = 0;
    winsUSER = 0;
    roundCounter = 0;
    document.querySelector(".userResult").innerHTML = 0;
    document.querySelector(".cpuResult").innerHTML = 0;
    document.querySelector("#finalResult").innerHTML = "Let's play";
    document.querySelector("#WhoBeatsWho").innerHTML = "";
};