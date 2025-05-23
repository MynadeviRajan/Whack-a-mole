let currMoleTile;
let currSnake;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    // Set up the grid for the game
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",hamer);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1500);
    setInterval(setSnake, 1500);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if(gameOver){
        return;
    }


    // Clear previous mole tile
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./mole_m.png";

    let num = getRandomTile();
    // Avoid placing mole on the same tile as snake
    if (currSnake && currSnake.id === num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    if (currMoleTile) {
        currMoleTile.appendChild(mole);
    }
}

function setSnake() {

    if(gameOver){
        return;
    }

    // Clear previous snake tile
    if (currSnake) {
        currSnake.innerHTML = "";
    }

    let snake = document.createElement("img");
    snake.src = "./snake.png";

    let num = getRandomTile();
    // Avoid placing snake on the same tile as mole
    if (currMoleTile && currMoleTile.id === num) {
        return;
    }
    currSnake = document.getElementById(num); // Use getElementById instead of querySelector
    if (currSnake) {
        currSnake.appendChild(snake);
    }
}

function hamer(){

    if(gameOver){
        return;
    }

    if(this == currMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this == currSnake){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}