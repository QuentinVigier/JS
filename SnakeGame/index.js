const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelector(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let moveX = 0, moveY = 0;
let snakeBody = [];
let score = 0;
let setIntervalId;


let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score : ${highScore}`;


const updateFoodPosition = () =>{
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
}

const handleGameOver = () =>{
    alert ("C'est perdu chef ! Faut se concentrer et appuyer sur OK pour rejouer.");
    location.reload();
}

const changeDirection = e =>{
    if(e.key === "ArrowUp" && moveY != 1){
        moveX = 0;
        moveY = -1;
    }
    else if(e.key === "ArrowDown" && moveY != -1){
        moveX = 0;
        moveY = 1;
    }
    else if(e.key === "ArrowLeft" && moveX != 1){
        moveX = -1;
        moveY = 0;
    }
    else if(e.key === "ArrowRight" && moveX != -1){
        moveX = 1;
        moveY = 0;
    }
}