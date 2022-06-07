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

    //place ships horizontally + vertically
    function placeHorizontally(coordinates, ship) {
        for (let i = 0; i < ship.length; i++) {
            board[coordinates[0]][coordinates[1] + i].hasShip = true;
        }
    }
    
    function placeVertically(coordinates, ship) {
        for (let i = 0; i < ship.length; i++) {
            board[coordinates[0] + i][coordinates[1]].hasShip = true;
        }
    }

    //recieveAttack, mark a spot as hit or miss, if hit, take it to hit(), records coordinates, 
    //coordinates is an array of [x, y]
    //keeps track of missed attacks
    let missed = []
    let hits = []

    function isShot(coordinates) {
        board[coordinates[0]][coordinates[1]].isShot = true;
    }

    function receiveAttack(coordinates, ship) {
        if (board[coordinates[0]][coordinates[1]].hasShip === false) {
            missed.push(coordinates)
            isShot(coordinates); //leave this here for testing purposes, probably not convenient not pure function
        }

        if (board[coordinates[0]][coordinates[1]].hasShip === true) {
            hits.push(coordinates)
            board[coordinates[0]][coordinates[1]].isShot = true;
            //ship.hit(hitIndex); //should tell the ship that was hit, what part of it was hit, this is iffy wrong
        } 
    }

    function allShipsSunk() {
        //array.find(function(element, index, array), thisValue)
        //loop through arrays of arrays to check if all the cells with hasShip === true and isShot===true
        //if there is any array of array with hasShip === true and isShot === false, return false
        let noSurvivingShips = true;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (board[i][j].hasShip === true && board[i][j].isShot === false) {
                    noSurvivingShips = false
                }
                }
            }

        return noSurvivingShips
    }    

    return { board, allShipsSunk, receiveAttack, isShot, placeVertically, placeHorizontally, missed, hits }
}


module.exports = gameboardFactory;

