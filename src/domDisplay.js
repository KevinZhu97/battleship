

const displayPlayerDiv = (board) => {
    const playerDiv =  document.querySelector('.left')
    while (playerDiv.firstChild) {
        playerDiv.removeChild(playerDiv.firstChild)
    }

    const includesArray = (data, arr) => {
        return data.some(e => Array.isArray(e) && e.every((o, i) => Object.is(arr[i], o)));
    }

    board.board.forEach((column, i) => {
        const columnCell = document.createElement('div');
        columnCell.dataset.column = i;
        column.forEach((cell, idx) => {
            const boardCell = document.createElement('div')
            boardCell.dataset.row = idx;

            if (cell.hasShip === false) {                   //if cell.hasShip = classlist.add not occupied //this is not working
                boardCell.classList.add('cell')
            } else if (cell.hasShip === true) {
                boardCell.classList.add('cell')
                boardCell.classList.add('occupied')
            }

            if (cell.isShot === true) {
                boardCell.classList.add('hit');
            } else if (includesArray(board.missed, [i, idx])) {
                boardCell.classList.add('miss')
            }

            columnCell.appendChild(boardCell)
        });

        playerDiv.appendChild(columnCell)
    })
}

const displayCompDiv = (board) => {
    const compDiv =  document.querySelector('.right')
    while (compDiv.firstChild) {
        compDiv.removeChild(compDiv.firstChild)
    }

    const includesArray = (data, arr) => {
        return data.some(e => Array.isArray(e) && e.every((o, i) => Object.is(arr[i], o)));
    }

    board.board.forEach((column, i) => {
        const columnCell = document.createElement('div');
        columnCell.dataset.column = i;
        column.forEach((cell, idx) => {
            const boardCell = document.createElement('div')
            boardCell.dataset.row = idx;

            if (cell.hasShip === false) {                   //if cell.hasShip = classlist.add not occupied //this is not working
                boardCell.classList.add('cell')
            } else if (cell.hasShip === true) {
                boardCell.classList.add('cell')
                boardCell.classList.add('occupied2')
                // boardCell.classList.add('occupied') //here
            }

            if (cell.isShot === true) {
                boardCell.classList.add('hit');
            } else if (includesArray(board.missed, [i, idx])) {
                boardCell.classList.add('miss') 
            }

            columnCell.appendChild(boardCell)
        });

        compDiv.appendChild(columnCell)
    })
}

//returns a promise for when turn ends
const listenForClick = (board) => {
    const compBoard = document.querySelector('.right')
    const promise = new Promise((resolve) => {
        compBoard.addEventListener('click', (e) => {
            if (e.target.className !== 'cell hit' && e.target.className !== 'cell occupied hit' && e.target.className !== 'cell miss') { //should only trigger if its not already shot
                const columnIndex = parseInt(e.target.parentElement.dataset.column, 10);
                const cellIndex = parseInt(e.target.dataset.row, 10);
                board.receiveAttack([columnIndex, cellIndex]);
                while (compBoard.firstChild) {
                compBoard.removeChild(compBoard.firstChild) 
                };
                displayCompDiv(board);
                resolve();
            }
        });
    });

    return promise;
};

const playAgainListener = (newGame) => {
    const playAgainBtn = document.querySelector('.playAgain')
    playAgainBtn.addEventListener('click', () => {
        const overlay = document.querySelector('#overlay');
        const gameOverDisplay = document.querySelector('.gameOver')
        overlay.classList.remove('.overlay')
        gameOverDisplay.style.display = 'none';
        newGame();
    },
    { once: true }
    );
};

const gameOverDisplay = (text, newGame) => {
    const overlay = document.querySelector('#overlay')
    const gameOverDisplay = document.querySelector('.gameOver')
    const gameOverWinner = document.querySelector('.winner')
    overlay.classList.add('.overlay')
    gameOverDisplay.style.display = 'flex';
    gameOverWinner.textContent = text;

    playAgainListener(newGame)
}

export { displayCompDiv, displayPlayerDiv, listenForClick, gameOverDisplay }