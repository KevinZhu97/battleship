// Players can take turns playing the game by attacking the enemy Gameboard.
// The game is played against the computer, so make ‘computer’ players capable of making random plays. 
// The AI does not have to be smart, but it should know whether or not a given move is legal. 
// (i.e. it shouldn’t shoot the same coordinate twice).

//generate random integers from 1-10

import gameboardFactory from './gameboardFactory'
import battleshipFactory from './battleship'




let previousMoves = []
function generateRandomCoordinates() {
    let xCoordinate = Math.floor(Math.random() * 10);
    let yCoordinate = Math.floor(Math.random() * 10);
    let result = [xCoordinate, yCoordinate]
    for (let i = 0; i <= previousMoves.length; i++) {
        if (previousMoves[i] === result) {
            generateRandomCoordinates();
        } else {
            previousMoves.push(result)
            return result
        }
    }
}













//remember to export and return functions and objects