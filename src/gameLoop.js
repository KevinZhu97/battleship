import gameboardFactory from './gameboardFactory'
import playerFactory from './player'
import { displayPlacement, playerPlaceShips } from './domManipulation';
import { displayCompDiv, displayPlayerDiv, gameOverDisplay, listenForClick } from './domDisplay';

const gameLoop = () => {

    const computerPlayer = playerFactory();
    const computerGameboard = gameboardFactory();
    const humanGameboard = gameboardFactory();

    const gameOverCheck = () => {
        if (humanGameboard.allShipsSunk()) { //This is triggering when we have nothing set yet
            console.log('all human ships sunk')
            return true;
        } 

        if (computerGameboard.allShipsSunk()) { //comes out as false even tho its true!!!!!!
            console.log('all pc ships sunk') 
            return true; //once this triggers, i can still click on the board // but shouldnt be problem cause it will reset
        }
        return false;
    }

    const gameTurn = () => {
        if (gameOverCheck()) {
            playerPlaceShips.resetProperties();

            if (humanGameboard.allShipsSunk()) {
                gameOverDisplay('You lost!', gameLoop);
            } else {
                gameOverDisplay('You win!', gameLoop);
            }
            
        } else {
            listenForClick(computerGameboard).then(() => {
                computerPlayer.computerTurn(humanGameboard); //this should only go through if above is resolves itself
                displayPlayerDiv(humanGameboard);
                gameTurn();
            })
        }
    }

    displayPlacement(humanGameboard)
    playerPlaceShips.placePicker(humanGameboard, humanGameboard.getShips());
    
    computerGameboard.getShips().forEach((ship) => {
        let result = computerPlayer.generatePlacement();

        while (!computerGameboard.validatePlacement(result[0], result[1], ship)) {
            result = computerPlayer.generatePlacement();
        } 
        computerGameboard.placeShip(result[0], result[1], ship)
    });

    displayPlayerDiv(humanGameboard);
    displayCompDiv(computerGameboard); 

    gameTurn();
};



export default gameLoop;