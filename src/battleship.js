//create battleship factory
// hit() that takes a number, and marks that position as hit
//turn ship length into an array, 0=not hit, and 1=hit
//use array constructor, new Array(length) and fill it first with non-hit (0)
//use .every() to see if all values are equal 1, to mean the whole ship has been hit

const battleshipFactory = (name, length) => {
    const shipLength = new Array(length).fill(0)
    
    const hit = (hitIndex) => {
        shipLength[hitIndex] = 1
    };
    const isSunk = () => {
        return shipLength.every(position => position === 1)
    };

    return { name, length, hit, isSunk }
}

module.exports = battleshipFactory;