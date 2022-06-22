//create a board
//place ship on board
//send hit coordinates
import battleshipFactory from './battleship'

const gameboardFactory = () => {

    //board, visualize it as a 10x10 for now.
    let board = []
    for (let i = 0; i < 10; i++) {
        board[i] = [];
        for (let j = 0; j < 10; j++) {
            board[i][j] = { isShot: false, hasShip: false};
        };
    };
    
    let unavailable = []
    //place ships horizontally + vertically. should only place if it not already taken up
    function placeHorizontally(coordinates, ship) {
        for (let i = 0; i < ship.length; i++) { 
             // [0, 0]
            board[coordinates[0] + i][coordinates[1]].hasShip = true;
            board[coordinates[0] + i][coordinates[1]].ship = ship;
            board[coordinates[0] + i][coordinates[1]].index = i
            //push coordinates to unavailable so that when i use it to validate placement, it will give either true or false to give me
            //permission to place ship
            unavailable.push([coordinates[0]+i, coordinates[1]])
            
        }
    }
    
    function placeVertically(coordinates, ship) {
        for (let i = 0; i < ship.length; i++) {
            board[coordinates[0]][coordinates[1]+ i].ship = ship;
            board[coordinates[0]][coordinates[1]+ i].index = i;
            board[coordinates[0]][coordinates[1]+ i].hasShip = true;
            unavailable.push([coordinates[0], coordinates[1]+i])
        }
    }

    //recieveAttack, mark a spot as hit or miss, if hit, take it to hit(), records coordinates, 
    //coordinates is an array of [x, y]
    //keeps track of missed attacks
    let missed = []
    let hits = []

    function receiveAttack(coordinates) {
        // board[coordinates[0]][coordinates[1]].isShot = true;

        if (board[coordinates[0]][coordinates[1]].hasShip === false) {
            if (!includesArray(coordinates, missed)) {
                missed.push(coordinates)
            } 
        } else {
            const cell = board[coordinates[0]][coordinates[1]]
            cell.isShot = true;
            cell.ship.hit(cell.index);

            if (!includesArray(coordinates, hits)) {
                hits.push(coordinates)
            }
            
            if (cell.ship.isSunk()) {
                sinkShip(cell.ship);
            }
        }
    }

    function allShipsSunk(gameShips = ships) {
        if (gameShips.length > 0) {
            return false
        }
        return true
    }

    function createShips() {
        const carrier = battleshipFactory("carrier", 5);
        const battleship = battleshipFactory("battleship", 4);
        const destroyer = battleshipFactory("destroyer", 3);
        const submarine = battleshipFactory("submarine", 3);
        const patrolBoat = battleshipFactory("patrol boat", 2);
    
        return [carrier, battleship, destroyer, submarine, patrolBoat];
      }
    
    const ships = createShips();
    
    function getShips() {
        return ships;
      }

    function getOccupied() {
        const occupied = [];

        board.forEach((row, i) => {
            row.forEach((element, idx) => {
                if (element.hasShip !== true) {
                    occupied.push([i, idx])
                }
            })
        })

        return occupied;
    }


    function sinkShip(sunkShip) {
        const index = ships.findIndex((ship) => sunkShip.name === ship.name);
    
        if (index !== -1) {
          ships.splice(index, 1);
        }
    }

    const includesArray = (data, arr) => {
        return data.some(e => Array.isArray(e) && e.every((o, i) => Object.is(arr[i], o)));
      }

    function validatePlacement(coords, orientation, ship) {
        let x = coords[0];
        let y = coords[1];

        for (let i = 0; i < ship.length; i++) {
            if (orientation === 'horizontal') {
                if (includesArray(unavailable, [x + i, y])) return false; //works, but only for the pointer cell
            } else if (orientation === 'vertical') {
                if (includesArray(unavailable, [x, y + i])) return false;
            }
        }

        for (let i = 1; i < ship.length; i++) {
            if (orientation === "horizontal") {
                x++;
                if (x > 9) return false;
            } else {
                y++;
                if (y > 9) return false;
            }
        }

        return true
    }

    function placeShip(coords, orientation, ship) {
        if (orientation === "vertical") {
          placeVertically(coords, ship);
        } else {
          placeHorizontally(coords, ship);
        }
      }

    return { board, placeShip, allShipsSunk, receiveAttack, placeVertically, placeHorizontally, missed, hits, getShips, getOccupied, validatePlacement }
}


export default gameboardFactory;

