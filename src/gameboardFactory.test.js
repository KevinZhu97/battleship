import gameboardFactory from './gameboardFactory'
import battleship from './battleship'


test('board length', () => {
    const newBoard = gameboardFactory();
    expect(newBoard.board).toHaveLength(10)
})

test('marks a spot with ship when placed horizontally', () => {
    const newBoard = gameboardFactory();
    const carrier = battleship('carrier', 3)
    newBoard.placeHorizontally([1, 2], carrier)
    expect(newBoard.board[1][3].hasShip).toBe(true)
})

test('marks a spot with ship when placed vertically', () => {
    const newBoard = gameboardFactory();
    const carrier = battleship('carrier', 3)
    newBoard.placeVertically([2, 4], carrier)
    expect(newBoard.board[2][4].hasShip).toBe(true);
})

test('marks spot as shot at', () => {
    const newBoard = gameboardFactory();
    const carrier = battleship('carrier', 3)
    newBoard.receiveAttack([2, 3], carrier);
    expect(newBoard.board[2][3].isShot).toBe(true)
})

test('if all ships sunk', () => {
    const newBoard = gameboardFactory();
    // const carrier = battleship('carrier', 3)
    // newBoard.placeHorizontally([1, 2], carrier)
    expect(newBoard.allShipsSunk()).toBe(true)
})

test('keep track of missed hits and hits', () => {
    const newBoard = gameboardFactory();
    const carrier = battleship('carrier', 3)
    newBoard.placeHorizontally([2, 3], carrier)
    newBoard.receiveAttack([2, 3], carrier)
    newBoard.receiveAttack([6, 8], carrier)
    newBoard.receiveAttack([8, 2], carrier)
    expect(newBoard.missed.length).toEqual(1)
})