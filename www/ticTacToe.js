let tds = document.querySelectorAll("td"); //Grab Table Cells
let ohTurn = false; //ohTurn = O, !ohTurn = X
let gameOver = false;
let pcPlayed = false; //For random function
let random = 0;
let turnCount = 1; //Count plays to determine tie
let playerCount = 1;
let ticOne = document.querySelector("#ticOne");
let ticTwo = document.querySelector("#ticTwo");
let ticThree = document.querySelector("#ticThree");
let ticFour = document.querySelector("#ticFour");
let ticFive = document.querySelector("#ticFive");
let ticSix = document.querySelector("#ticSix");
let ticSeven = document.querySelector("#ticSeven");
let ticEight = document.querySelector("#ticEight");
let ticNine = document.querySelector("#ticNine");
let scoreBoard = document.querySelector("#scoreBoard");

//Set up click watch
for (let i = 0; i < tds.length; i++) {
    {
        tds[i].addEventListener("click", function () {
            if (!gameOver && this.textContent === "") {
                if (!ohTurn) {
                    this.textContent = "X";
                    checkWinner();
                    if (playerCount === 1) singlePlayer();

                } else {
                    if (playerCount === 2) this.textContent = "O";
                    checkWinner();
                }
                if (playerCount === 1) checkWinner();
            }
        });
    }
}

//Buttons
document.querySelector("#resetButton").addEventListener("click", function () {
    resetGame();
});

document.querySelector("#playerOne").addEventListener("click", function () {
    if (playerCount === 2) {
        playerCount = 1;
        document.querySelector("#playerOne").classList.add("border-dark");
        document.querySelector("#playerTwo").classList.remove("border-dark");
        resetGame();
    }
});

document.querySelector("#playerTwo").addEventListener("click", function () {
    if (playerCount === 1) {
        playerCount = 2;
        document.querySelector("#playerTwo").classList.add("border-dark");
        document.querySelector("#playerOne").classList.remove("border-dark");
        resetGame();
    }
});

//Check who's up to change scoreBoard
function checkTurn() {
    if (ohTurn && !gameOver) {
        (playerCount === 2) ? scoreBoard.textContent = "O's Turn": scoreBoard.textContent = "My Turn";
    } else if (!gameOver) {
        (playerCount === 2) ? scoreBoard.textContent = "X's Turn": scoreBoard.textContent = "Your Turn";
    }
    return;
}

//See if anyone won
function checkWinner() {
    if (!gameOver) {
        turnCount++;
        ohTurn = !ohTurn;
        checkTurn();
        if (ticOne.textContent === "X" && ticTwo.textContent === "X" && ticThree.textContent === "X") {
            ticOne.classList.add("winner");
            ticTwo.classList.add("winner");
            ticThree.classList.add("winner");
            exWins();
            return;
        }
        if (ticOne.textContent === "O" && ticTwo.textContent === "O" && ticThree.textContent === "O") {
            ticOne.classList.add("winner");
            ticTwo.classList.add("winner");
            ticThree.classList.add("winner");
            ohWins();
            return;
        }
        if (ticFour.textContent === "X" && ticFive.textContent === "X" && ticSix.textContent === "X") {
            ticFour.classList.add("winner");
            ticFive.classList.add("winner");
            ticSix.classList.add("winner");
            exWins();
            return;
        }
        if (ticFour.textContent === "O" && ticFive.textContent === "O" && ticSix.textContent === "O") {
            ticFour.classList.add("winner");
            ticFive.classList.add("winner");
            ticSix.classList.add("winner");
            ohWins();
            return;
        }
        if (ticSeven.textContent === "X" && ticEight.textContent === "X" && ticNine.textContent === "X") {
            ticSeven.classList.add("winner");
            ticEight.classList.add("winner");
            ticNine.classList.add("winner");
            exWins();
            return;
        }
        if (ticSeven.textContent === "O" && ticEight.textContent === "O" && ticNine.textContent === "O") {
            ticSeven.classList.add("winner");
            ticEight.classList.add("winner");
            ticNine.classList.add("winner");
            ohWins();
            return;
        }
        if (ticOne.textContent === "X" && ticFour.textContent === "X" && ticSeven.textContent === "X") {
            ticOne.classList.add("winner");
            ticFour.classList.add("winner");
            ticSeven.classList.add("winner");
            exWins();
            return;
        }
        if (ticOne.textContent === "O" && ticFour.textContent === "O" && ticSeven.textContent === "O") {
            ticOne.classList.add("winner");
            ticFour.classList.add("winner");
            ticSeven.classList.add("winner");
            ohWins();
            return;
        }
        if (ticOne.textContent === "X" && ticFive.textContent === "X" && ticNine.textContent === "X") {
            ticOne.classList.add("winner");
            ticFive.classList.add("winner");
            ticNine.classList.add("winner");
            exWins();
            return;
        }
        if (ticOne.textContent === "O" && ticFive.textContent === "O" && ticNine.textContent === "O") {
            ticOne.classList.add("winner");
            ticFive.classList.add("winner");
            ticNine.classList.add("winner");
            ohWins();
            return;
        }
        if (ticTwo.textContent === "X" && ticFive.textContent === "X" && ticEight.textContent === "X") {
            ticTwo.classList.add("winner");
            ticFive.classList.add("winner");
            ticEight.classList.add("winner");
            exWins();
            return;
        }
        if (ticTwo.textContent === "O" && ticFive.textContent === "O" && ticEight.textContent === "O") {
            ticTwo.classList.add("winner");
            ticFive.classList.add("winner");
            ticEight.classList.add("winner");
            ohWins();
            return;
        }
        if (ticThree.textContent === "X" && ticSix.textContent === "X" && ticNine.textContent === "X") {
            ticThree.classList.add("winner");
            ticSix.classList.add("winner");
            ticNine.classList.add("winner");
            exWins();
            return;
        }
        if (ticThree.textContent === "O" && ticSix.textContent === "O" && ticNine.textContent === "O") {
            ticThree.classList.add("winner");
            ticSix.classList.add("winner");
            ticNine.classList.add("winner");
            ohWins();
            return;
        }
        if (ticThree.textContent === "X" && ticFive.textContent === "X" && ticSeven.textContent === "X") {
            ticThree.classList.add("winner");
            ticFive.classList.add("winner");
            ticSeven.classList.add("winner");
            exWins();
            return;
        }
        if (ticThree.textContent === "O" && ticFive.textContent === "O" && ticSeven.textContent === "O") {
            ticThree.classList.add("winner");
            ticFive.classList.add("winner");
            ticSeven.classList.add("winner");
            ohWins();
            return;
        }
        if (turnCount > 9) {
            ticOne.classList.add("winner");
            ticTwo.classList.add("winner");
            ticThree.classList.add("winner");
            ticFour.classList.add("winner");
            ticFive.classList.add("winner");
            ticSix.classList.add("winner");
            ticSeven.classList.add("winner");
            ticEight.classList.add("winner");
            ticNine.classList.add("winner");
            tie();
            return;
        }
        return;
    }
}
//Computer Logic
function singlePlayer() {
    if (!gameOver && playerCount === 1) {
        if (ticTwo.textContent === "O" && ticThree.textContent === "O" && ticOne.textContent === "") {
            ticOne.textContent = "O";
            return;
        }
        if (ticFour.textContent === "O" && ticSeven.textContent === "O" && ticOne.textContent === "") {
            ticOne.textContent = "O";
            return;
        }
        if (ticFive.textContent === "O" && ticNine.textContent === "O" && ticOne.textContent === "") {
            ticOne.textContent = "O";
            return;
        }
        if (ticOne.textContent === "O" && ticThree.textContent === "O" && ticTwo.textContent === "") {
            ticTwo.textContent = "O";
            return;
        }
        if (ticFive.textContent === "O" && ticEight.textContent === "O" && ticTwo.textContent === "") {
            ticTwo.textContent = "O";
            return;
        }
        if (ticOne.textContent === "O" && ticTwo.textContent === "O" && ticThree.textContent === "") {
            ticThree.textContent = "O";
            return;
        }
        if (ticSix.textContent === "O" && ticNine.textContent === "O" && ticThree.textContent === "") {
            ticThree.textContent = "O";
            return;
        }
        if (ticFive.textContent === "O" && ticSeven.textContent === "O" && ticThree.textContent === "") {
            ticThree.textContent = "O";
            return;
        }
        if (ticOne.textContent === "O" && ticSeven.textContent === "O" && ticFour.textContent === "") {
            ticFour.textContent = "O";
            return;
        }
        if (ticFive.textContent === "O" && ticSix.textContent === "O" && ticFour.textContent === "") {
            ticFour.textContent = "O";
            return;
        }
        if (ticOne.textContent === "O" && ticNine.textContent === "O" && ticFive.textContent === "") {
            ticFive.textContent = "O";
            return;
        }
        if (ticTwo.textContent === "O" && ticEight.textContent === "O" && ticFive.textContent === "") {
            ticFive.textContent = "O";
            return;
        }
        if (ticThree.textContent === "O" && ticSeven.textContent === "O" && ticFive.textContent === "") {
            ticFive.textContent = "O";
            return;
        }
        if (ticFour.textContent === "O" && ticSix.textContent === "O" && ticFive.textContent === "") {
            ticFive.textContent = "O";
            return;
        }
        if (ticThree.textContent === "O" && ticNine.textContent === "O" && ticSix.textContent === "") {
            ticSix.textContent = "O";
            return;
        }
        if (ticFour.textContent === "O" && ticFive.textContent === "O" && ticSix.textContent === "") {
            ticSix.textContent = "O";
            return;
        }
        if (ticOne.textContent === "O" && ticFour.textContent === "O" && ticSeven.textContent === "") {
            ticSeven.textContent = "O";
            return;
        }
        if (ticFive.textContent === "O" && ticThree.textContent === "O" && ticSeven.textContent === "") {
            ticSeven.textContent = "O";
            return;
        }
        if (ticEight.textContent === "O" && ticNine.textContent === "O" && ticSeven.textContent === "") {
            ticSeven.textContent = "O";
            return;
        }
        if (ticSeven.textContent === "O" && ticNine.textContent === "O" && ticEight.textContent === "") {
            ticEight.textContent = "O";
            return;
        }
        if (ticTwo.textContent === "O" && ticFive.textContent === "O" && ticEight.textContent === "") {
            ticEight.textContent = "O";
            return;
        }
        if (ticOne.textContent === "O" && ticFive.textContent === "O" && ticNine.textContent === "") {
            ticNine.textContent = "O";
            return;
        }
        if (ticThree.textContent === "O" && ticSix.textContent === "O" && ticNine.textContent === "") {
            ticNine.textContent = "O";
            return;
        }
        if (ticSeven.textContent === "O" && ticEight.textContent === "O" && ticNine.textContent === "") {
            ticNine.textContent = "O";
            return;
        }
        if (ticTwo.textContent === "X" && ticThree.textContent === "X" && ticOne.textContent === "") {
            ticOne.textContent = "O";
            return;
        }
        if (ticFour.textContent === "X" && ticSeven.textContent === "X" && ticOne.textContent === "") {
            ticOne.textContent = "O";
            return;
        }
        if (ticFive.textContent === "X" && ticNine.textContent === "X" && ticOne.textContent === "") {
            ticOne.textContent = "O";
            return;
        }
        if (ticOne.textContent === "X" && ticThree.textContent === "X" && ticTwo.textContent === "") {
            ticTwo.textContent = "O";
            return;
        }
        if (ticFive.textContent === "X" && ticEight.textContent === "X" && ticTwo.textContent === "") {
            ticTwo.textContent = "O";
            return;
        }
        if (ticOne.textContent === "X" && ticTwo.textContent === "X" && ticThree.textContent === "") {
            ticThree.textContent = "O";
            return;
        }
        if (ticSix.textContent === "X" && ticNine.textContent === "X" && ticThree.textContent === "") {
            ticThree.textContent = "O";
            return;
        }
        if (ticFive.textContent === "X" && ticSeven.textContent === "X" && ticThree.textContent === "") {
            ticThree.textContent = "O";
            return;
        }
        if (ticOne.textContent === "X" && ticSeven.textContent === "X" && ticFour.textContent === "") {
            ticFour.textContent = "O";
            return;
        }
        if (ticFive.textContent === "X" && ticSix.textContent === "X" && ticFour.textContent === "") {
            ticFour.textContent = "O";
            return;
        }
        if (ticOne.textContent === "X" && ticNine.textContent === "X" && ticFive.textContent === "") {
            ticFive.textContent = "O";
            return;
        }
        if (ticTwo.textContent === "X" && ticEight.textContent === "X" && ticFive.textContent === "") {
            ticFive.textContent = "O";
            return;
        }
        if (ticThree.textContent === "X" && ticSeven.textContent === "X" && ticFive.textContent === "") {
            ticFive.textContent = "O";
            return;
        }
        if (ticFour.textContent === "X" && ticSix.textContent === "X" && ticFive.textContent === "") {
            ticFive.textContent = "O";
            return;
        }
        if (ticThree.textContent === "X" && ticNine.textContent === "X" && ticSix.textContent === "") {
            ticSix.textContent = "O";
            return;
        }
        if (ticFour.textContent === "X" && ticFive.textContent === "X" && ticSix.textContent === "") {
            ticSix.textContent = "O";
            return;
        }
        if (ticOne.textContent === "X" && ticFour.textContent === "X" && ticSeven.textContent === "") {
            ticSeven.textContent = "O";
            return;
        }
        if (ticFive.textContent === "X" && ticThree.textContent === "X" && ticSeven.textContent === "") {
            ticSeven.textContent = "O";
            return;
        }
        if (ticEight.textContent === "X" && ticNine.textContent === "X" && ticSeven.textContent === "") {
            ticSeven.textContent = "O";
            return;
        }
        if (ticSeven.textContent === "X" && ticNine.textContent === "X" && ticEight.textContent === "") {
            ticEight.textContent = "O";
            return;
        }
        if (ticTwo.textContent === "X" && ticFive.textContent === "X" && ticEight.textContent === "") {
            ticEight.textContent = "O";
            return;
        }
        if (ticOne.textContent === "X" && ticFive.textContent === "X" && ticNine.textContent === "") {
            ticNine.textContent = "O";
            return;
        }
        if (ticThree.textContent === "X" && ticSix.textContent === "X" && ticNine.textContent === "") {
            ticNine.textContent = "O";
            return;
        }
        if (ticSeven.textContent === "X" && ticEight.textContent === "X" && ticNine.textContent === "") {
            ticNine.textContent = "O";
            return;
        }
        //Choose Random Empty Cell
        do {
            random = Math.floor(Math.random() * Math.floor(tds.length - 1));
            (tds[random].textContent === "X" || tds[random].textContent === "O" && turnCount <= 8) ? pcPlayed = false: pcPlayed = true;
        } while (!pcPlayed);
        tds[random].textContent = "O";
        return;
    }
}

function exWins() {
    (playerCount === 2) ? scoreBoard.textContent = "X Wins!": scoreBoard.textContent = "You Win!";
    gameOver = true;
    return;
}

function ohWins() {
    (playerCount === 2) ? scoreBoard.textContent = "O Wins!": scoreBoard.textContent = "I Win!";
    gameOver = true;
    return;
}

function tie() {
    scoreBoard.textContent = "It's a Tie!";
    gameOver = true;
    return;
}

function resetGame() {
    for (let i = 0; i < tds.length; i++) {
        tds[i].textContent = "";
        tds[i].classList.remove("winner");
    }
    (playerCount === 2) ? scoreBoard.textContent = "X's Turn": scoreBoard.textContent = "Your Turn";
    ohTurn = false; //ohTurn = O, !ohTurn = X
    gameOver = false;
    turnCount = 1;
}
