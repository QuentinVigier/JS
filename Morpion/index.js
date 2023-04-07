const gameBoard =document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');
const startCells = [
    "","","","","","","","",""
];

//Function pour créer une div et une classe pour chaque case du morpion
function createBoard () {
    startCells.forEach((cells, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        gameBoard.append(cellElement);
    })
}

createBoard();