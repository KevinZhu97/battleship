const playerFactory = () => {
    const previousMoves = [];

    function generatePlacement() {
        let xCoordinate = Math.floor(Math.random() * 10);
        let yCoordinate = Math.floor(Math.random() * 10);
        let result = [[xCoordinate, yCoordinate]]
        result.push(chooseOrientation())
        return result
    }

    function randomInteger(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    function generateRandomCoordinates() {
        const result = [];

        const x = randomInteger(0, 9);
        const y = randomInteger(0, 9);

        result.push(x);
        result.push(y);

        return result;
    }

    function computerTurn(enemyBoard) {
        let coords = generateRandomCoordinates();
    

        function hasElement(arr,cell) {
            return arr.some(x => x[0] === cell[0] && x[1] === cell[1])
       }

        while (hasElement(previousMoves, coords)) { //THIS IS GIVING ME FALSE, even tho it does includes, do the coords not match?
            coords = generateRandomCoordinates();
          }

        enemyBoard.receiveAttack(coords)
        previousMoves.push(coords);
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

    return { previousMoves, chooseOrientation, computerTurn, generatePlacement }
};

module.exports = playerFactory;