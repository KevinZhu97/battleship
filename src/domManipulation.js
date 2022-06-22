import { displayCompDiv, displayPlayerDiv } from './domDisplay'

const displayPlacement = (board) => {
    const overlay = document.querySelector('#overlay')
    overlay.classList.add('overlay')
    const container = document.querySelector('.placement')
    container.style.display = 'flex'
    const placer = document.querySelector('.placer')
    while (placer.firstChild) {
        placer.removeChild(placer.firstChild)
    }

    board.board.forEach((column, i) => {
        const columnCell = document.createElement('div');
        columnCell.dataset.column = i;
        column.forEach((cell, idx) => {
            const boardCell = document.createElement('div')
            boardCell.dataset.column = i;
            boardCell.dataset.row = idx;

            if (cell.hasShip === false) {                   //if cell.hasShip = classlist.add not occupied //this is not working
                boardCell.classList.add('cell')
            } else if (cell.hasShip === true) {
                boardCell.classList.add('cell')
                boardCell.classList.add('occupied')
            }

            columnCell.appendChild(boardCell)
        });

        placer.appendChild(columnCell)
    })
}

const playerPlaceShips = (() => {
    let rotator = 1; //default direction placement horizontal
    let idx = 0; //used to loop through ships
    const shipName = document.querySelector('.shipType') //to change name each time a ship is placed

    const resetProperties = () => {
        rotator = 1;
        idx = 0;
    };

    const horizontalElement = (columnIndex, cellIndex, i) => {
        const columnNum = parseInt(columnIndex, 10) + i;
        const rowNum = parseInt(cellIndex, 10);

        const selector = `.cell[data-column="${columnNum}"][data-row="${rowNum}"]`; // e.g.    .cell[1][3]
        const hoverCell = document.querySelector(selector) 

        return hoverCell;
    }

    const verticalElement = (columnIndex, cellIndex, i) => {
        const columnNum = parseInt(columnIndex, 10);
        const rowNum = parseInt(cellIndex, 10) + i;

        const selector = `.cell[data-column="${columnNum}"][data-row="${rowNum}"]`
        const hoverCell = document.querySelector(selector);

        return hoverCell;   
    }

    const placePicker = (board, ships) => {
        let ship = ships[idx]
        shipName.innerHTML = ship.name
        const cells = document.querySelectorAll('.placer .cell')

        const hoverListener = (e) => {
            const columnIndex = e.target.parentElement.dataset.column;
            const cellIndex = e.target.dataset.row;

            if (rotator === 1) {
                for (let i = 0; i < ship.length; i++) {
                    const hoverCell = horizontalElement(columnIndex, cellIndex, i)
                    hoverCell.classList.add('placerCell')
                }
            } else if (rotator === 2) {
                for (let i = 0; i < ship.length; i++) {
                    const hoverCell = verticalElement(columnIndex, cellIndex, i)
                    hoverCell.classList.add('placerCell')
                }
            }
        }

        const hoverOutListener = (e) => {
            const columnIndex = e.target.parentElement.dataset.column;
            const cellIndex = e.target.dataset.row;
        
            if (rotator === 1) {
                for (let i = 0; i < ship.length; i += 1) {
                const hoverCell = horizontalElement(columnIndex, cellIndex, i);
                hoverCell.classList.remove("placerCell");
                }
            } else if (rotator === 2) {
                for (let i = 0; i < ship.length; i += 1) {
                const hoverCell = verticalElement(columnIndex, cellIndex, i);
                hoverCell.classList.remove("placerCell");
                }
            }
        };

        cells.forEach((cell) => {
            cell.addEventListener('mouseenter', hoverListener);
            cell.addEventListener('mouseleave', hoverOutListener);
            
            const listener = (e) => {
                const x = parseInt(e.target.dataset.column, 10) 
                const y = parseInt(e.target.dataset.row, 10)

                let orientation;
                
                if (rotator === 1) {
                    orientation = "horizontal"
                } else {
                    orientation = "vertical"
                }
                
                if (board.validatePlacement([x, y], orientation, ship) === true) {
                    board.placeShip([x, y], orientation, ship)
                    idx += 1;

                    if (idx === ships.length) {
                        const overlay = document.querySelector('#overlay')
                        overlay.classList.remove('overlay')
                        const popup = document.querySelector(".placement");
                        popup.style.display = "none";
                        displayPlayerDiv(board);
                        return;
                    }
                    
                    displayPlacement(board);
                    placePicker(board, ships)
                }

                cell.removeEventListener('click', listener)
                };
            cell.addEventListener('click', listener);
        })
    };

    const changeRotator = () => {
        if (rotator === 1) {
          rotator = 2;
        } else {
          rotator = 1;
        }
      };
    
    const rotatorBtn = document.querySelector(".rotate");
    rotatorBtn.addEventListener("click", () => {
    changeRotator();
    })

    return { placePicker, resetProperties }
})();

export { displayPlacement, playerPlaceShips }


//to create the hover effect, tell cell orientation and length of the ships, and then tell which/index we will add class = placerCell and
//this placerCell will have the hover effect. ,create the same one for removing placercell when mouse leave cell