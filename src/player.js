const playerFactory = () => {

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

    function computerTurn(enemyBoard) {
        let coords = generateRandomCoordinates();
        enemyBoard.receiveAttack(coords)
    }
   
    function chooseOrientation() {
        let orientation = '';
        orientation = Math.floor(Math.random() * 2);
        if (orientation === 0) {
            orientation = 'vertical';
        } else {
            orientation = 'horizontal';
        }

        return orientation
    }

    return { chooseOrientation, computerTurn, generateRandomCoordinates, previousMoves }
};


module.exports = playerFactory;


//remember to export and return functions and objects